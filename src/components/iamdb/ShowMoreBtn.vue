<template>
    <div class="btn-holder" @click="showMore()">
        <div class="btn-text">Show all</div>
        <div class="chevron-right">
            <svg v-if="showMoreCast" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <svg v-if="!showMoreCast" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
        </div>
    </div>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        data(){
            return{
                showMoreCast: true ,
            }
        },
        methods: {
            showMore(){
                this.showMoreCast = this.showMoreCast ? false : true ;

                this.dataStore.castShowNumber = this.showMoreCast ? 5 : 10;
            }
        },
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style  scoped>
    .btn-holder{
        @apply flex justify-center lg:justify-start items-center gap-3.5 text-red-500 hover:text-red-700;
        cursor: pointer;
    }
    .btn-text{
        @apply text-lg;
    }
    .chevron-right{
        @apply w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center;
    }
    .btn-holder:hover .chevron-right{
        border-color: rgb(185 28 28);
    }
</style>