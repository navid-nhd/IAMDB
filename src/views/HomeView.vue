<template>
  <main class="main">
    {{input}}
    <div class="wrapper">
      <div class="container">
          <SiteName></SiteName>
          <div class="input-holder pt-32 lg:pt-24 xl:pt-30 2xl:pt-56">
            <!-- <InputBox class="input-box" @gettingInput="getInput"></InputBox> -->
            <div class=" flex flex-wrap lg:flex-nowrap  items-center">
                  <div class="input flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-4/5   lg:pr-3" >
                      <input class="small" type="text" placeholder="Type the name of your favorite movie ..." v-model="input">
                      <input class="large" type="text" placeholder="Your favorite movie ..." v-model="input">
                  </div>
                  <div class="search-btn flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-1/5">
                      <router-link to="/result" >
                        <button  class="text" @click="fetchInput()">
                              <span>Search</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                              </svg>
                        </button>
                      </router-link>
                  </div>
            </div>
          </div>
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



export default{
    components : {
      SiteName,InputBox,SearchBtn,
    },
    data(){
      return{
        input: '',
        movieId: '',
        movieLink: '',
      }
    },
    methods: {
      getInput(id){
        this.input = id ;
      },
      fetchInput(){
        // fetch('https://imdb-api.com/en/API/SearchTitle/k_72zng87l/lost 2004')
        //       .then( response => response.text())
        //       .then( res => JSON.parse(res))
        //       .then( res => {
        //         this.movieId = res.results[0].id
        //       })
        // this.movieLink =   'https://imdb-api.com/en/API/Posters/k_72zng87l/'+ this.movieId + "'"    
        fetch('https://imdb-api.com/en/API/SearchAll/k_72zng87l/' + this.input)
              .then( response => response.text())
              .then( res => JSON.parse(res))
              .then( res => {
                
                  this.dataStore.movieId = res.results[0].id
                  this.dataStore.movieTitle = res.results[0].title
                  this.dataStore.movieDesc = res.results[0].description
                  this.dataStore.posterImage = res.results[0].image
                
              })
              .catch(error => {
                // window.location.href = 'http://localhost:5173/error'
                console.log('error', error)
              });
              setTimeout(() => {
                  fetch('https://imdb-api.com/en/API/Title/k_72zng87l/' + this.dataStore.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          this.dataStore.directors = res.directors
                          this.dataStore.year = res.year

                          this.dataStore.timeInfo.push(res.year)
                          this.dataStore.timeInfo.push(res.contentRating)
                          this.dataStore.timeInfo.push(res.runtimeStr)

                          this.dataStore.movieId = res.id
                          this.dataStore.genres = res.genres
                          this.dataStore.imDbRating = res.imDbRating
                          this.dataStore.imDbRatingVotes = res.imDbRatingVotes
                          this.dataStore.contentRating = res.contentRating
                          this.dataStore.countries = res.countries
                          this.dataStore.awards = res.awards
                          this.dataStore.actorList = res.actorList
                          this.dataStore.plot = res.plot
                          this.dataStore.writers = res.writers

                          this.dataStore.tableInfo.push(res.writers)
                          this.dataStore.tableInfo.push(res.genres)
                          this.dataStore.tableInfo.push(res.awards)
                          this.dataStore.tableInfo.push(res.countries)
                          this.dataStore.tableInfo.push(res.imDbRating)
                          for (let i = 0; i < 10; i++) {
                            this.dataStore.actorsName.push(res.actorList[i].name)
                            this.dataStore.actorsRole.push(res.actorList[i].asCharacter)
                            this.dataStore.actorsImages.push(res.actorList[i].image)
                          }
                          for (let i = 0; i < 10; i++) {
                            this.dataStore.similarImage.push(res.similars[i].image)
                            this.dataStore.similarTitle.push(res.similars[i].title)
                            this.dataStore.similarRating.push(res.similars[i].imDbRating)
                          }

                        })
                        .catch(error => {
                          // window.location.href = 'http://localhost:5173/error'
                          console.log('error', error)
                        });
                  fetch('https://imdb-api.com/API/Posters/k_72zng87l/' + this.dataStore.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          this.dataStore.bgImage = res.backdrops[1].link
                        })
                        .catch(error => {
                          // window.location.href = 'http://localhost:5173/error'
                          console.log('error', error)
                        });
                  fetch('https://imdb-api.com/API/Images/k_72zng87l/'+ this.dataStore.movieId+'/Full')
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          for (let i = 0; i < 10; i++) {
                            this.dataStore.movieImages.push(res.items[i].image)
                          }
                        });
                  fetch('https://imdb-api.com/en/API/FAQ/k_72zng87l/'+ this.dataStore.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          for (let i = 0; i < 15; i++) {
                            this.dataStore.movieQuestion.push(res.items[i].question)
                            this.dataStore.movieAnswere.push(res.items[i].answer)
                          }
                        })
              }, "7000");
        
        // axios.get('https://imdb-api.com/en/API/Search/k_72zng87l/inception 2010')
        //     .then(res => {
        //       console.log(res)
        //     })
        },
      testfetch() {
        // fetch('https://imdb-api.com/en/API/SearchAll/k_72zng87l/avenger')
        //       .then( response => response.text())
        //       .then( res => JSON.parse(res))
        //       .then( res => {
        //         this.movieId = res.results[0].id
        //         this.movieLink =   "'https://imdb-api.com/en/API/FAQ/k_72zng87l/"+ this.movieId + "'" 
        //       })
              
         console.log       
        fetch('https://imdb-api.com/en/API/FAQ/k_72zng87l/tt1375666')
              .then( response => response.text())
              .then( res => JSON.parse(res))
              .then( res => {
                
                
                console.log(res)
              })
              // setTimeout(() => {
              //     this.movieLink =  'https://imdb-api.com/en/API/FAQ/k_72zng87l/'+this.dataStore.movieId
              //     console.log(this.movieLink)
              // }, "3000");
            
      }
      // 'https://imdb-api.com/en/API/FAQ/k_72zng87l/tt0458339'
      // https://imdb-api.com/en/API/SearchAll/k_72zng87l/avenger
  },
  computed: {
    ...mapStores(useMovieData)
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
    @media (min-width: 992px) {
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
</style>
