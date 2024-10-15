new Vue({
    el: '#desafio',
    data: {
        nome: 'Samuel',
        idade: 20,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34iEOaXace3VrMFdmWGZlPt_tA45DhQgVUA&s'
    },
    methods: {
      multiplicarIdade() { 
        return this.idade * 3
        }
    }
}) 