<template>
    <main>
        <section class="movie-info">
            <MovieBgImage />
            <div class="container">
                <div class="row movie-info-holder">
                    <div class="hidden lg:block col-lg-3">
                        <div class="movie-poster-and-ratings">
                            <MoviePoster></MoviePoster>
                            <div class="movie-graph-and-votes flex flex-nowrap gap-x-5 items-center justify-start mt-6">
                                <RatingGraph></RatingGraph>
                                <VoteNumbers></VoteNumbers>
                            </div>
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
    import RatingGraph from '@/components/iamdb/RatingGraph.vue'
    import VoteNumbers from '@/components/iamdb/VoteNumbers.vue'

    export default{
        components : {
            MovieBgImage,MoviePoster,RatingGraph,VoteNumbers,
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