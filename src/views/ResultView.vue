<template>
    <MovieBgImage />
    
</template>
<script >
    import MovieBgImage from '@/components/iamdb/MovieBgImage.vue'
    export default{
        components : {
            MovieBgImage,
        },
        data() {
            return{

            }
        },
        methods : {

        },
        computed : {

        }
    }
</script>
<style>

body{
    width:100%;
    padding: 0;
    margin: 0;
    background-color: var(--bg-color);
    color: var(--primary-text-color);
    font-family:var(--main-font);
}
</style>