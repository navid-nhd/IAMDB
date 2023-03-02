
<template>
  <main class="main">
    <div class="wrapper">
      <div class="container">
        
          <SiteName></SiteName>
          <div class="input-holder flex flex-wrap lg:flex-nowrap pt-48 lg:pt-32 xl:pt-72 items-center">
            <InputBox class="input-box lg:pr-3"></InputBox>
            <SearchBtn class="search-btn"></SearchBtn>
          </div>
        
      </div>
    </div>
  </main>
</template>
<script>
  import SiteName from '@/components/iamdb/SiteName.vue'
  import InputBox from '@/components/iamdb/InputBox.vue'
  import SearchBtn from '@/components/iamdb/SearchBtn.vue'

  export default{
    components : {
      SiteName,InputBox,SearchBtn,
    }
  }
</script>
<style>
    @import '@/assets/css/font.css';  
    @import '@/assets/css/bootstrap-grid.css';
 .main {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
  }
.wrapper{
  width: 100vw;
  height: 100%;
  background-image: url('@/assets/images/HomepageImage-2.png');
  background-repeat: no-repeat;
  background-position: 0 -20px;
  background-size: contain;
}
.content-holder{
  @apply flex justify-center flex-wrap;
}
.input-box{
  @apply flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-4/5;
}
.search-btn{
  @apply flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-1/5;
}
@media (min-width: 450px) {
  .wrapper{
    background-position: 0 0;
    background-size: cover;
  }
} 
@media (min-width: 576px) {

} 
@media (min-width: 768px) {

}  
@media (min-width: 992px) {
  .wrapper{
    width: 100%;
    background-image: url('@/assets/images/HomepageImage-1.png');
    background-position: 0 -30px;
    background-size: cover;
  }
  .content-holder{
    @apply justify-end;
  }
}  
@media (min-width: 1200px) {
  .wrapper{
    width: 90%;
    background-position: -50px -90px;
  }
}  
</style>
