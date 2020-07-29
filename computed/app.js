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
                    let test = value.split(' ')
                    console.log(test)
                    this.nom = test[0]
                    this.prenom = test[1]
                }
        }
    }
})