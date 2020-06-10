new Vue({
    el: '.app',
    data: {},

    created(){
        window.addEventListener('scroll', this.overFlat)
    },

    methods: {
        overFlat(e){
            if (window.pageYOffset >= 470) {
                document.querySelector("nav.highnav").classList.add('fullcolor')
            } else {
                document.querySelector("nav.highnav").classList.remove('fullcolor')
            }
            
        }
    }
})