let vm = new Vue({ 
    el: '#app_exo',

    data: {
        seconds: 0
    },
    //Lorsque que l'élement est monté
    mounted: function (){
        this.$interval = setInterval(() => {
            console.log('Test')
            this.seconds++
        }, 1000);
    },
    destroyed: function(){
        clearInterval(this.$interval)
    }
})
    