import { defineStore } from 'pinia'

export const useMovieData = defineStore('data', {
    state : () => {
      return{
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
        console.log(this.isInArrayResult)
        if(!this.isInArrayResult){
          this.favoriteList.push(id)
        }else{
          this.relatedIndex = this.favoriteList.findIndex( item => item === id)
          this.favoriteList.splice(this.relatedIndex,1)
        }
          
      }
    }
})