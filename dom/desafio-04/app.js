new Vue({
  el: "#desafio",
  data: {
    corEfeito: "destaque",
    classeInformada: "",
    classeInformada2: "",
    usarClasse: "false",
    estilo5: {
      width: "100px",
      height: "100px",
    },
    item5: "red",
    progressTotal: 0,
  },
  computed: {
    renderEfeito() {
      return {
        destaque: this.corEfeito === "destaque",
        encolher: this.corEfeito !== "destaque",
      };
    },

    progressBar() {
      return {
        width: this.progressTotal + "px",
      };
    },
  },
  methods: {
    iniciarProgressBar() {
      setInterval(() => {
        if (this.progressTotal < 100) {
          this.progressTotal += 10;
        }
      }, 1000);
    },
    iniciarEfeito() {
      setInterval(() => {
        this.corEfeito =
          this.corEfeito === "destaque" ? "encolher" : "destaque";
      }, 1000);
    },
    iniciarProgresso() {},
  },
});
