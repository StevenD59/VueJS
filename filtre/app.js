Vue.filter('majuscule', function(value){
    return value.toUpperCase()
})

let vm = new Vue({

    el:'#app',
    data: {
        message:'Salut les copains'
    }

})