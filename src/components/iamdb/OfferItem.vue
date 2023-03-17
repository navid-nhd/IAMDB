<template>
    <div class="offer-item">
        <div class="offer-image">
            <img v-show="dataStore.offerList[index]" :src="dataStore.offerList[index].image" class="block"/>
        </div>
        <div class="offer-text">
            <p>{{ dataStore.offerList[index].title }}</p>
        </div>
    </div>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter.js';
    export default{
        props:{
            index: {
                type: Number,
            }
        },
        components:{

        },
        computed:{
            ...mapStores(useMovieData)
        }
    }
</script>
<style scoped>
.offer-item{
    @apply flex justify-start items-center gap-5 m-1 p-1 text-slate-200 rounded-md;
  background-color: rgba(27, 23, 23, 0.7);
  box-shadow: -6px -6px 52px -7px rgba(0,0,0,0.91);
}
.offer-item:hover{
  background-color: rgba(27, 23, 23, 0.8);
  cursor: pointer;
}
.offer-image{
    @apply rounded-md;
  background-color: rgb(51, 51, 51);
}
.offer-image img{
    @apply w-14 h-16 rounded-md;
}
.offer-text{
    @apply text-lg;
}
@media (min-width: 992px) {
.offer-text{
    @apply text-xl;
}  
.offer-image img{
    @apply w-16 h-20 rounded-md;
}
}
</style>