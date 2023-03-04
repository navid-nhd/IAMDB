import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state : () => {
      return{
        test: [],
      }
    },
    actions : {
      increment(id){
        console.log(id)
        this.test.push(id)
        console.log(this.test)
      }
    }
})
