const app = new Vue({
    el: '#main',
    data:{
        personas:[]
    },
    mounted(){
        //console.log('instancia montada');
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respuesta )  =>{
            console.log(respuesta.data)
            this.personas = respuesta.data
        })
    }

})