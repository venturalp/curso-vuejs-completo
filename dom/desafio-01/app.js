new Vue({
  el: "#desafio",
  data: {
    nome: "Guilherme Ventura de Souza",
    idade: 32,
    minhaImg:
      "https://s2.glbimg.com/vyEZWQadB6_vc9nPztA3hXGhfJo=/0x0:1568x882/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/X/j/SI61JER3AyIb5KP9SDMA/pokemon-unite-2.png",
  },
  methods: {
    randomNum: () => {
      return Math.random();
    },
  },
});
