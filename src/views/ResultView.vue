<template>
    <main>
        <section class="movie-info">
            <MovieBgImage />
            <div class="container">
                <div class="row movie-info-holder">
                    <div class="hidden lg:block col-lg-3">
                        <!------------ Movie Poster and Rating Graph -->
                        <div class="movie-poster-and-ratings">
                            <MoviePoster></MoviePoster>
                            <div class="movie-graph-and-votes flex flex-nowrap gap-x-5 items-center justify-start mt-6">
                                <RatingGraph></RatingGraph>
                                <VoteNumbers></VoteNumbers>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="movie-data lg:px-7">
                             <!------------ Movie primary Data ------------>
                            <MovieName class="lg:mt-12"></MovieName>
                            <DirectorName class="mt-1.5"></DirectorName>
                            <!------------ Movie Informations -->
                            <div class="movie-info-time my-4 lg:my-5">
                                <ul class="list-none flex gap-3">
                                    <li v-for="item in timeInfo" class="list-items flex items-center">
                                        <TimeInfoItem>{{item}}</TimeInfoItem>
                                    </li>
                                </ul>
                            </div>
                            <!------------ Buttons ------------>
                            <div class="movie-btn-holder flex gap-4 lg:gap-5">
                                <ThrailerPlayButton></ThrailerPlayButton>
                                <ShareButton></ShareButton>
                                <LikeButton></LikeButton>
                            </div>
                            <!------------ Description ------------>
                            <div class="movie-description my-10">
                                <MovieDescription></MovieDescription>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        3
                    </div>       
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
    import MovieName from '@/components/iamdb/MovieName.vue'
    import DirectorName from '@/components/iamdb/DirectorName.vue'
    import TimeInfoItem from '@/components/iamdb/TimeInfoItem.vue'
    import ThrailerPlayButton from '@/components/iamdb/ThrailerPlayButton.vue'
    import ShareButton from '@/components/iamdb/ShareButton.vue'
    import LikeButton from '@/components/iamdb/LikeButton.vue'
    import MovieDescription from '@/components/iamdb/MovieDescription.vue'

    export default{
        components : {
            MovieBgImage,MoviePoster,RatingGraph,VoteNumbers,MovieName,DirectorName,TimeInfoItem,ThrailerPlayButton,ShareButton,LikeButton,MovieDescription,
        },
        data() {
            return{
                timeInfo: ['2008','PG-13','2h 6m']
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
        position: relative;
        z-index: 999;
    }
    .list-items::after {
        content: "";
        margin-left: 12px;
        width: fit-content;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
    }
    .list-items:last-child::after {
        display: none;
    }
</style>