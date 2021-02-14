const app = {
    data() {
        return {
            tasks: [{url:"images/Hitokage.png" , title: "Hitokage",done: false},
                    {url:"images/Senikame.png" , title: "Senikame", done: false},
                    {url:"images/Fushigidane.png" , title: "Fushigidane", done: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => t.done ).length
        }
    }
}
Vue.createApp(app).mount('#app')

