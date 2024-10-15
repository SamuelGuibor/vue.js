new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        valor2: 0
    },
    methods: {
        alerta(){
            alert('Exibiu o alerta!')
        },
        alterarValor(event) {
            this.valor2 = event.target.value
        }
    }
})