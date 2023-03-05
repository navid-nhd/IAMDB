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
        castShowNumber: 5,
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
// {{dataStore.imDbRating}}k_71qyebui