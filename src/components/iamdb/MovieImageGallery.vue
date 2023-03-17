<template>
    <div>
        <div class="gellery-holder"  @click="isVisible()">
            <div class="picture-holder">
                <img class="gallery-img" :src="dataStore.movieImages[index]" alt=""/>
                <div class="overlay-holder">
                    <img class="overlay-picture" src="@/assets/images/Vector.png"/>
                </div>
            </div>
        </div>
        <div v-if="visibility" :class="`modal-holder`">
            <div class="modal relative">
                    <img class="modal-picture" :src="dataStore.movieImages[slideNum]" />
                <div class="close-btn" @click="isHidden()">
                    <img src="@/assets/images/close.png" alt="" />
                </div>
                <!-- Navigation -->
                <div class="navigation flex">
                    <div class="chevron-left absolute left-1 top-1/2"
                            @click="prevPicture()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div>
                    <div class="chevron-right absolute right-1 top-1/2"
                             @click="nextPicture()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        props: {
            photoData : {
                type : Object,
            },
            index: {
                type: Number,
            }
        },
        data(){
            return{
                visibility : false,
                slideNum : this.index,
                
            }
        },  
        methods: {
            isVisible(){
                this.visibility = true
            },
            isHidden(){
                this.visibility = false
            },
            prevPicture(){
                if(this.slideNum === 0){
                    this.slideNum = this.dataStore.movieImages.length - 1
                }else{
                    this.slideNum -= 1
                }
            },
            nextPicture(){
                if(this.slideNum === this.dataStore.movieImages.length - 1 ){
                    this.slideNum = 0
                }else{
                    this.slideNum += 1
                }
            }

        },
        computed : {
            ...mapStores(useMovieData),
        }
    }
</script>
<style scoped>
    .picture-holder{
        @apply rounded-xl flex m-3 relative;
    }
    .picture-holder:hover{
        cursor: pointer;
    }
    .picture-holder:hover::after{
        content: '';
        @apply w-full h-full rounded-xl absolute left-0 bg-black opacity-70;
    }
    .gallery-img{
        @apply block rounded-xl object-cover aspect-[6/4];
    }
    .overlay-picture{
        @apply hidden absolute left-1/2 top-1/2 w-1/6 aspect-square z-50 -translate-x-1/2 -translate-y-1/2;
    }
    .gellery-holder:hover .overlay-picture{
        @apply block;
    }
    .modal-holder{
        @apply fixed inset-0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 999;
    }
    .modal{
        @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/2;
        z-index: 999;
    }
    .modal-picture{
        @apply block aspect-[3/2] rounded-xl;
    }
    .close-btn{
        @apply absolute top-3 right-3 p-1 border-2 rounded-full flex justify-center items-center;
        width: 8%;
        height: 12%;
        cursor: pointer;
    }
    .chevron-right,.chevron-left{
       border-radius: 50%;
       padding: 2px;
       border: 2px solid white;
    }
    .chevron-right:hover,.chevron-left:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }
    .chevron-right > svg,.chevron-left > svg{
        padding: 5px;
    }
</style>