console.log('vue ok', Vue)

const {createApp} = Vue;

const app = createApp({
    data (){
        return {
            destinations,
            currentIndex: 0,
            autoPlay: null
        }
    },
    computed: {
        isFirstIndex(){
            return this.currentIndex === 0
        },

        isLastIndex(){
            return this.currentIndex === this.destinations.length -1
        }
    },
    methods : {
        
        setCurrentIndex(target){
            if(target === 'prev'){
                if(!this.isFirstIndex) this.currentIndex--
                else this.currentIndex = this.destinations.length -1
            } else if (target === 'next'){
                if(!this.isLastIndex) this.currentIndex++
                else this.currentIndex = 0
            } else {
                this.currentIndex = target
            }
        }
        }
    },
)

app.mount('#root')