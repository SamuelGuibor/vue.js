new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        valor() {
            setTimeout(() => {
                return this.valor = 0
            }, 5000)
        }
    },
    methods: {
        resultado() {
            return this.valor == 37 ?
                'Valor igual' : 'Valor Diferente'
        }
    }
});