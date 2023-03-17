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
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  margin: 5px;
  padding: 5px;
  background-color: rgba(27, 23, 23, 0.7);
  color: white;
  border-radius: 5px;
  box-shadow: -6px -6px 52px -7px rgba(0,0,0,0.91);
}
.offer-item:hover{
  background-color: rgba(27, 23, 23, 0.8);
  cursor: pointer;
}
.offer-image{
  background-color: rgb(51, 51, 51);
  border-radius: 5px;

}
.offer-image img{
  width: 60px;
  height: 80px;
  border-radius: 5px;
}
.offer-text{
  font-size: 18px;
}
@media (min-width: 992px) {
.offer-text{
  font-size: 22px;
}  
}
</style>