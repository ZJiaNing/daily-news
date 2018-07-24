<template>
  <div class="main">
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import Footer from 'components/footer/FooterGuide';
export default {
  components: {
    "footer-guide": Footer
  }
}
</script>

<style media="screen">
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
