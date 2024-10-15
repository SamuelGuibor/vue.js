new Vue({
	el: '#desafio',
	data: {
		efeitoCor: 'destaque',
		cor1: true,
		digitar: '',
		classeI: '',
		cor5: '',
		exc5: {
			widht: '100px',
			height: '100px'
		},
		cor: 'cor1',
		widht: '0',
	},
	computed: {

	},
	methods: {
		iniciarEfeito() {
	
		setInterval(() => {
				this.efeitoCor = this.efeitoCor == 'destaque' ? 'encolher' : 'destaque'
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0
			const tempo = setInterval(() => {
				valor += 5
				this.widht = `${valor}%`
				if(valor == 100) {
					clearInterval(tempo)
				}
			}, 500)
		},
		setTrue(event) {
			if(event.target.value == 'true') {
				this.digitar = true
			} else if (event.target.value == 'false'){
				this.digitar = false
			}
		}
	}
})
