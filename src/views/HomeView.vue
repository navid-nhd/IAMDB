<template>
  <main class="main">
    <div class="wrapper">
      <div class="container">
          <SiteName ></SiteName>
          <form>
            <div class="input-holder pt-32 lg:pt-36 xl:pt-48 2xl:pt-80">
              <div class=" flex flex-wrap lg:flex-nowrap  items-center">
                  <div class="input flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-4/5  lg:pr-3 relative" >
                    <nav :class="`recommended absolute ${isVisible} `">
                      <ul class="offer-list">
                          <li v-for="(item,index) in dataStore.offerList" @click="dataStore.fetchInput(dataStore.offerList[index].title)">
                            <router-link :to="`/result/${dataStore.offerList[index].title}`" >
                              <OfferItem :index="index"></OfferItem>
                            </router-link>
                          </li>
                      </ul>
                    </nav>
                    <input class="small" type="text" placeholder="Type the name of your favorite movie ..." v-model="input" @keyup="showRec(this.input)">
                    <input class="large" type="text" placeholder="Your favorite movie ..." v-model="input" @keyup="showRec(this.input)">
                  </div>
                  <div class="search-btn flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-1/5">
                      <router-link :to="`/result/${this.input}`" >
                        <button  class="text" @click="dataStore.fetchInput(this.input)">
                              <span>Search</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                              </svg>
                        </button>
                      </router-link>
                  </div>
              </div>
            </div>
          </form>
            <div @click="testfetch()">fetch</div>
      </div>
    </div>
  </main>
</template>
<script>
  import { mapStores,mapActions } from 'pinia';
  import { useMovieData } from '@/stores/counter.js';


  import SiteName from '@/components/iamdb/SiteName.vue'
  import InputBox from '@/components/iamdb/InputBox.vue'
  import SearchBtn from '@/components/iamdb/SearchBtn.vue'
  import OfferItem from '@/components/iamdb/OfferItem.vue'



export default{
    components : {
      SiteName,InputBox,SearchBtn,OfferItem
    },
    data(){
      return{
        input: '',
        movieId: '',
        movieLink: '',
        isVisible: 'visible',
      }
    },
    methods: {
      ...mapActions(useMovieData,['fetchInput']),
      getInput(id){
        this.input = id ;
      },
      showRec(movieName){
        this.dataStore.offerList = []
        fetch('https://imdb-api.com/en/API/SearchMovie/k_hx4oobgs/' + movieName)
        .then( response => response.text())
        .then( res => JSON.parse(res))
        .then( res => {
          console.log(res.results.length)
                this.isVisible = this.input ? 'visible' : 'hidden';
                for(let i=0;i<=10;i++){
                  this.dataStore.offerList.push(res.results[i])
                }
              })  
      },
      testfetch() {
        fetch('https://imdb-api.com/en/API/SearchAll/k_hx4oobgs/tt0110413')
              .then( response => response.text())
              .then( res => JSON.parse(res))
              .then( res => {
                
                console.log(res)
              })     
      }
    },
    computed: {
      ...mapStores(useMovieData)
    },
}
</script>
<style>
    @import '@/assets/css/font.css';  
    @import '@/assets/css/bootstrap-grid.css';
.recommended{
  bottom: 65px;
  left: 20px;
  background-color: rgb(161, 161, 161);
  color: black;
  width: 90%;
  max-height: 400px;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.recommended::-webkit-scrollbar{
    @apply w-5 h-5 rounded-xl bg-transparent;
}
.recommended::-webkit-scrollbar-thumb{
    @apply rounded-xl border-4 border-solid border-transparent bg-clip-content;
    background-color: rgb(58, 58, 58);
}

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
input[type=text]{
    @apply w-full rounded-[100px] py-3 px-8 border-2 border-zinc-500;
    background-color: var(--bg-color);
}
input[type=text]::placeholder{
    @apply text-base font-normal;
}
input.large { 
    @apply inline-block;
}
input.small { 
    @apply hidden; 
}
.search-btn {
    @apply py-4;
}
.text{
    @apply flex justify-center items-center gap-3 w-full text-base rounded-[100px] bg-red-700 hover:bg-red-800 py-3 px-8;
    text-align: center;
} 
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
  input.large { 
      @apply hidden;  
  }
  input.small { 
      @apply inline-block; 
  }
  .text{
      @apply text-xl;
  }
}  
@media (min-width: 1200px) {
  .wrapper{
    width: 90%;
    background-position: -50px -90px;
  }
}  

   
</style>
