new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    showAlert() {
      alert("aqui um alerta");
    },
    keyDownEvent(e) {
      this.valor = e.target.value;
    },
  },
});
