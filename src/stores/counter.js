import { defineStore } from 'pinia'

export const useMovieData = defineStore('data', {
    state : () => {
      return{
        result: '',
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
      addOrRemoveFavList(){
        this.result = this.favoriteList.some( item => item === this.movieTitle)
        console.log(this.result)
        if(!this.result){
          this.favoriteList.push(this.movieTitle)
        }else{
          this.relatedIndex = this.favoriteList.findIndex( item => item === this.movieTitle)
          this.favoriteList.splice(this.relatedIndex,1)
        }
          
      }
    }
})
// import { mapStores,mapActions } from 'pinia';
// import { useMovieData } from '@/stores/counter';
// export default{
// computed : {
//         ...mapStores(useMovieData)
//     }
// }
// {{dataStore.imDbRating}}k_71qyebui