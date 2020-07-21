let vm = new Vue({ 
    el: '#app_exo',

    data: {
        seconds: 0
    },
    //Lorsque que l'élement est monté
    mounted: function (){
        setInterval(() => {
            this.seconds++
        }, 1000);
    }
})
    