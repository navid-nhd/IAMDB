import { defineStore } from 'pinia'
// imdbi account : k_73l2tbte /// k_ygw2uk2v /// k_hx4oobgs /// k_1lezkqm0 /// k_71qyebui /// k_9w4s5mev /// k_72zng87l ///
export const useMovieData = defineStore('data', {
    state : () => {
      return{
        offerList: [],
        isInArrayResult: '',
        relatedIndex: '',
        graphRate: '',
        searchInput: '',
        bgImage : '',
        posterImage: '',
        movieId : '',
        movieTitle: '',
        movieDesc: '',
        directors: '',
        year: '',
        genres: '',
        imDbRating: '',
        imDbRatingVotes: '',
        contentRating: '',
        countries: '',
        awards: '',
        actorList: [],
        plot: '',
        writers: '',
        timeInfo:[],
        tableInfo: [],
        actorsName:[],
        actorsRole:[],
        actorsImages:[],
        movieImages:[],
        similarImage: [],
        similarTitle: [],
        similarRating: [],
        movieQuestion: [],
        movieAnswere: [],
        movieThrailer: '',
        castShowNumber: 5,
        favoriteList: [],
      }
    },
    actions : {
      addOrRemoveFavList(id){
        this.isInArrayResult = this.favoriteList.some( item => item === id)
        // console.log(this.isInArrayResult)
        if(!this.isInArrayResult){
          this.favoriteList.push(id)
        }else{
          this.relatedIndex = this.favoriteList.findIndex( item => item === id)
          this.favoriteList.splice(this.relatedIndex,1)
        }   
      },
      dataReset(){
        this.graphRate = '';
        this.searchInput = '';
        this.bgImage  = '';
        this.posterImage = '';
        this.movieId  = '';
        this.movieTitle = '';
        this.movieDesc = '';
        this.directors = '';
        this.year = '';
        this.genres = '';
        this.imDbRating = '';
        this.imDbRatingVotes = '';
        this.contentRating = '';
        this.countries = '';
        this.awards = '';
        this.actorList = [];
        this.plot = '';
        this.writers = '';
        this.timeInfo =[];
        this.tableInfo = [];
        this.actorsName =[];
        this.actorsRole =[];
        this.actorsImages =[];
        this.movieImages =[];
        this.similarImage = [];
        this.similarTitle = [];
        this.similarRating = [];
        this.movieQuestion = [];
        this.movieAnswere = [];
        this.movieThrailer = '';
      },
      fetchInput(movieName){
        this.dataReset();
        fetch('https://imdb-api.com/en/API/SearchAll/k_ygw2uk2v/' + movieName)
              .then( response => response.text())
              .then( res => JSON.parse(res))
              .then( res => {
                  this.movieId = res.results[0].id
                  this.movieTitle = res.results[0].title
                  this.movieDesc = res.results[0].description
                  this.posterImage = res.results[0].image
              })
              .catch(error => {
                window.location.href = 'http://localhost:5173/error'
                console.log('error', error)
              });
              setTimeout(() => {
                  fetch('https://imdb-api.com/en/API/Title/k_ygw2uk2v/' + this.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          this.directors = res.directors
                          this.year = res.year

                          this.timeInfo.push(res.year)
                          this.timeInfo.push(res.contentRating)
                          this.timeInfo.push(res.runtimeStr)

                          this.movieId = res.id
                          this.genres = res.genres
                          this.imDbRating = res.imDbRating

                          this.graphRate = (res.imDbRating*36) + 'deg'

                          this.imDbRatingVotes = res.imDbRatingVotes.toLocaleString("fi-FI")
                          this.contentRating = res.contentRating
                          this.countries = res.countries
                          this.awards = res.awards
                          this.actorList = res.actorList
                          this.plot = res.plot
                          this.writers = res.writers

                          this.tableInfo.push(res.writers)
                          this.tableInfo.push(res.genres)
                          this.tableInfo.push(res.awards)
                          this.tableInfo.push(res.countries)
                          this.tableInfo.push(res.imDbRating)
                          for (let i = 0; i < 10; i++) {
                            this.actorsName.push(res.actorList[i].name)
                            this.actorsRole.push(res.actorList[i].asCharacter)
                            this.actorsImages.push(res.actorList[i].image)
                          }
                          for (let i = 0; i < 12; i++) {
                            this.similarImage.push(res.similars[i].image)
                            this.similarTitle.push(res.similars[i].title)
                            this.similarRating.push(res.similars[i].imDbRating)
                          }
                  })
                  .catch(error => {
                      console.log('error', error)
                  });
                  fetch('https://imdb-api.com/API/Posters/k_ygw2uk2v/' + this.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          this.bgImage = res.backdrops[1].link
                        })
                        .catch(error => {
                          console.log('error', error)
                  });
                  fetch('https://imdb-api.com/API/Images/k_ygw2uk2v/'+ this.movieId+'/Full')
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          for (let i = 0; i < 10; i++) {
                            this.movieImages.push(res.items[i].image)
                          }
                  });
                  fetch('https://imdb-api.com/en/API/FAQ/k_ygw2uk2v/'+ this.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                          for (let i = 0; i < 15; i++) {
                            this.movieQuestion.push(res.items[i].question)
                            this.movieAnswere.push(res.items[i].answer)
                          }
                  })
                  fetch('https://imdb-api.com/API/Trailer/k_ygw2uk2v/'+ this.movieId)
                        .then( response => response.text())
                        .then( res => JSON.parse(res))
                        .then( res => {
                            this.movieThrailer = res.link 
                  })
              }, "7000");
        // axios.get('https://imdb-api.com/en/API/Search/k_ygw2uk2v/inception 2010')
        //     .then(res => {
        //       console.log(res)
        //     })
        },
    },
    getters: {
      
    }
})