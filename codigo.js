//cualquier cambio a variables de esta instancia no se veran reflejadas de manera reactiva porque no está anclado al DOM 
const puente = new Vue({
    data:{
        datoCompartido: 'Este string es compartido'
    }
})

const app = new Vue({
    el: '#main',
    data:{
       datoCompartido : puente.datoCompartido,
       conectado:false,
       edad :17,
       lista: ['Manuel','Jose','Victoria'],
       listaPersonas:[
           {nombre:'Manuel',edad:37},
           {nombre:'Jose',edad:25},
           {nombre:'Victoria',edad:30}
       ],
       tareas:[
           {titulo:'Aprender ES6',completado:false},
           {titulo:'Aprender Vue',completado:true}, 
           {titulo:'Descansar toda la tarde',completado:false}, 
        ],
       tarea: '',
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift( {titulo:this.tarea,completado:true}) 
        }
    },
    computed:{
        mostrarCompletadas(){
            return this.tareas.filter(item => item.completado)
        },
        mostrarPorTitulo(){
            return this.tareas.filter(item => item.titulo.includes(this.tarea))
        }
    }
})


const app2 = new Vue({
    el: '#app2',
    data: {
        titulo: 'Instancia numero 2',
        datoCompartido : puente.datoCompartido
    }
})

