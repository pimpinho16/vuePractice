const app = new Vue({
    el: '#main',
    data:{
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
        }
    }
})