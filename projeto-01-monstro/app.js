const initialData = () =>  ({
    charInfo: {
        life: 100,
        attackRange: [4, 11],
        healRange: [10, 16],
        specialAttackRange: [8, 13],
    },
    monsterInfo: {
        life: 100,
        attackRange: [7, 12]
    },
    gameTimeline: [],
    playing: false,
})

new Vue({
    el: '#app',
    data: initialData(),
    computed: {
        isFinished() {
            return this.charInfo.life === 0 || this.monsterInfo.life === 0
        },
        playerWin() {
            return this.charInfo.life > 0 && this.monsterInfo.life === 0
        },
        draw() {
            return this.charInfo.life === 0 && this.monsterInfo.life === 0
        }
    },
    methods: {
        clearGame() {
            Object.assign(this.$data, initialData())
        },
        startGame() {
            this.playing = true
        },
        giveUp() {
            this.playing = false
            this.clearGame()
        },
        attack(special) {
            const monsterAttack = this.handleAttack({attacker: 'monster', defender: 'char'})  
            const charAttack = this.handleAttack({attacker: 'char', defender: 'monster', special})
            
            this.gameTimeline.unshift({
                monster: {
                    hit: monsterAttack,
                    msg: `Monstro atingiu jogador com ${monsterAttack}.`
                },
                char: {
                    hit: charAttack,
                    msg: special ? `jogador usou golpe especial de ${charAttack} em monstro.` 
                        : `jogador atingiu monstro com ${charAttack}.`
                }
            })
        },
        getRandomInRange(min, max) {
            return Math.round(Math.random() * (max - min + 1) + min)
        },
        heal(){
            const monsterAttack = this.handleAttack({attacker: 'monster', defender: 'char'})
            const charHealValue = this.handleHeal()

            this.gameTimeline.unshift({
                monster: {
                    hit: monsterAttack,
                    msg: `Monstro atingiu jogador com ${monsterAttack}.`
                },
                char: {
                    hit: charHealValue,
                    msg: `jogador ganhou força de  ${charHealValue}.`
                }
            })
        },
        handleHeal(who = "char") {
            if (this.charInfo.life === 100) return 0
            const [minHeal, maxHeal] = this.charInfo.healRange
            const healingValue = this.getRandomInRange(minHeal, maxHeal)
            this.charInfo.life = Math.min(this.charInfo.life + healingValue, 100)

            return healingValue
        },
        handleAttack({attacker = 'char', defender = "monster", special = false}) {
            const [attackMin, attackMax] = this[`${attacker}Info`][special? 'specialAttackRange' : 'attackRange']
            const attackValue = this.getRandomInRange(attackMin, attackMax) 
            this[`${defender}Info`].life = Math.max(0, this[`${defender}Info`].life - attackValue) 

            return attackValue
        },
        progressBar(who = 'monster') {
            return {
                width: `${this[`${who}Info`].life}%`
            }
        }
    }
})