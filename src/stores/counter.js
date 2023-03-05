import { defineStore } from 'pinia'

export const useMovieData = defineStore('data', {
    state : () => {
      return{
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
      }
    },
    actions : {
      increment(){
        
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
// {{dataStore.imDbRating}}