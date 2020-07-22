let vm = new Vue({
    el: '#app',
    data:{
        nom: 'Delchambre',
        prenom: 'Steven'
    },
    computed:{
        nom_complet: {
                get: function(){
                    return this.nom + ' ' + this.prenom
                },
                set: function(value){
                    console.log(value)
                }
        }
    }
})