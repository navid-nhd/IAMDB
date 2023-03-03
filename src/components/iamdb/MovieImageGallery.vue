<template>
    <div>
        <div class="gellery-holder"  @click="isVisible()">
            <div class="picture-holder">
                <img class="gallery-img" :src="`src/assets/images/${photoData.url}`" alt="Iron Man photo 1"/>
                <div class="overlay-holder">
                    <img class="overlay-picture" src="src/assets/images/Vector.png"/>
                </div>
            </div>
        </div>
        <div :class="`modal-holder  ${visibility}`">
            <div class="modal">
                <img class="modal-picture" :src="`src/assets/images/${photoData.url}`" />
                <div class="close-btn" @click="isHidden()">
                    <img src="src/assets/images/close.png" alt="" />
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
    export default{
        props: {
            photoData : {
                type : Object,
            }
        },
        data(){
            return{
                visibility : 'hidden opacity-0'
            }
        },  
        methods: {
            isVisible(){
                this.visibility = 'block opacity-100'
            },
            isHidden(){
                this.visibility = 'hidden opacity-0'
            }
        }
    }
</script>
<style>
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
        @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-3/5;
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
</style>