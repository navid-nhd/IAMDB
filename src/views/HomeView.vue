
<template>
  <main class="main">
    <div class="wrapper">
    </div>
  </main>
</template>
<script>

</script>
<style>
 .main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
.wrapper{
  width: 100vw;
  height: 100%;
  background-image: url('@/assets/images/bg-2.png');
  background-repeat: no-repeat;
  background-position: 0 -20px;
  background-size: contain;
}
@media (min-width: 450px) {
  .wrapper{
    background-position: 0 -40px;
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
  background-image: url('@/assets/images/bg.png');
  background-position: 0 -30px;
  background-size: cover;
}
}  
@media (min-width: 1200px) {
  .wrapper{
    width: 90%;
    background-position: -50px -90px;
  }
}  
</style>
