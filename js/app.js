//On implémente VueJS
//Prend en paramètre un tableau d'options
new Vue({
    //1er options: élément
    el: '#app',//Indique sur quel élément on va griffer VueJS
    //Tableau qui va contenir toutes les variables qu l'on souhaite ajouter a notre vue
    data: {
        message: 'Hello World!', //La variable message est défini dans la vue
        //link est défini dans le "v-bind"
        link: 'https://google.fr',
        test: true,
        liste: ['Steven', 'Edwin', 'Océane']
    },
    //Method qui permet au clique du bouton de faire disparaitre le message
    methods: {
        close: function (){
            this.test = false
        }
    }
})