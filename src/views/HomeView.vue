
<template>
  {{ input }}
  <main class="main">
    <div class="wrapper">
      <div class="container">
          <SiteName></SiteName>
          <div class="input-holder pt-32 lg:pt-24 xl:pt-30 2xl:pt-56">
            <InputBox class="input-box" @gettingInput="getInput"></InputBox>
          </div>
          <router-link to="/result" >
            <div @click="counterStore.increment(input)">fetch</div>
          </router-link>
      </div>
    </div>
  </main>
</template>
<script>
  import { mapStores,mapActions } from 'pinia';
  import { useCounterStore } from '@/stores/counter';

  import axios from 'axios'
  import SiteName from '@/components/iamdb/SiteName.vue'
  import InputBox from '@/components/iamdb/InputBox.vue'
  import SearchBtn from '@/components/iamdb/SearchBtn.vue'

export default{
    components : {
      SiteName,InputBox,SearchBtn,
    },
    data(){
      return{
        input: '',
      }
    },
    methods: {
      ...mapActions(useCounterStore,['increment']),
      getInput(id){
        this.input = id ;
      },
      fetchInput(){

        this.counterStore.test = this.input

        // fetch('https://imdb-api.com/en/API/Posters/_73l2tbte/tt1375666', {
        //         method: 'GET',
        //         redirect: 'follow'
        //       })
        //       .then( response => response.text())
        //       .then( res => JSON.parse(res))
        //       .then( res => {
        //         console.log(res)
        //       })
        //       .catch(error => {
        //         window.location.href = 'http://localhost:5173/error'
        //         console.log('error', error)
        //       });



              //https://imdb-api.com/en/API/Title/k_73l2tbte/tt1375666'
        // fetch('https://imdb-api.com/en/API/SearchMovie/k_73l2tbte/inception2010')
        //   .then( response => response.text())
        //   .then( res => JSON.parse(res))
        //   .then( res => {
        //     console.log(res)
        //   })
        // axios.get('https://imdb-api.com/en/API/Search/k_73l2tbte/inception 2010')
        //     .then(res => {
        //       console.log(res)
        //     })
      }
      
      // changeUrl(){
      //   window.location.href = 'http://localhost:5173/result'
      // }
  },
  computed: {
    ...mapStores(useCounterStore)
  },
}
</script>
<style>
    @import '@/assets/css/font.css';  
    @import '@/assets/css/bootstrap-grid.css';
 .main {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
  }
.wrapper{
  width: 100vw;
  height: 100%;
  background-image: url('@/assets/images/HomepageImage-2.png');
  background-repeat: no-repeat;
  background-position: 0 -20px;
  background-size: contain;
}
.content-holder{
  @apply flex justify-center flex-wrap;
}
/* .input-box{
  @apply flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-4/5;
}
.search-btn{
  @apply flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-1/5;
} */
@media (min-width: 450px) {
  .wrapper{
    background-position: 0 0;
    background-size: cover;
  }
} 
@media (min-width: 576px) {

} 
@media (min-width: 768px) {

}  
@media (min-width: 992px) {
  .wrapper{
    width: 100%;
    background-image: url('@/assets/images/HomepageImage-1.png');
    background-position: 0 -30px;
    background-size: cover;
  }
  .content-holder{
    @apply justify-end;
  }
}  
@media (min-width: 1200px) {
  .wrapper{
    width: 90%;
    background-position: -50px -90px;
  }
}  
</style>
