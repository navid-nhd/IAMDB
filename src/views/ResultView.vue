<template>
    <main>
        <section class="movie-info">
            <MovieBgImage />
            <div class="container">
                <div class="row movie-info-holder">
                    <div class="hidden lg:block col-lg-3">
                        <div class="movie-poster-and-ratings">
                            <MoviePoster></MoviePoster>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">2</div>
                    <div class="col-12 col-lg-3">3</div>       
                </div>
            </div>
        </section>
    </main>
</template>
<script >
    import MovieBgImage from '@/components/iamdb/MovieBgImage.vue'
    import MoviePoster from '@/components/iamdb/MoviePoster.vue'

    export default{
        components : {
            MovieBgImage,MoviePoster,
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
    @import '@/assets/css/font.css';  
    @import '@/assets/css/bootstrap-grid.css';
    
    /* -----Movie Info----- */
    .movie-info-holder{
        margin-top: -27vh;
    }
</style>