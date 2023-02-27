<template>
    <div class="gellery-holder">
        <div class="picture-holder">
            <img class="gallery-img" :src="`src/assets/images/${photoData.url}`" alt="Iron Man photo 1"/>
            <div class="overlay-holder">
                <img class="overlay-picture" src="src/assets/images/Vector.png"/>
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
</style>