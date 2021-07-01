const app = new Vue({
    el: '#main',
    data:{
        tareas:[
            {titulo:'Aprender ES6',completado:true},
            {titulo:'Aprender Vue',completado:true}, 
            {titulo:'Descansar toda la tarde',completado:true}, 
         ],
         tarea: '',
    },
    methods:{
        completarTarea(tarea){
            tarea.completado = !tarea.completado
        }
    }
})