<template>
  <div class="">
    <Header></Header>
    <!-- Swiper -->
    <div class="swiper-container food-entry">
      <div class="swiper-wrapper">
        <div class="swiper-slide food-entry-item">
          <a href="javascript:">
            <div><img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/></div>
            <span>美食</span>
          </a>
          <a href="javascript:">
            <div><img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/></div>
            <span>美食</span>
          </a>
          <a href="javascript:">
            <div><img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/></div>
            <span>美食</span>
          </a>
          <a href="javascript:">
            <div><img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/></div>
            <span>美食</span>
          </a>
          <a href="javascript:">
            <div><img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/></div>
            <span>美食</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Header from 'components/header/Header.vue'
  import { msiteFoodTypes } from 'src/service/getData'
  import axios from 'axios'

  // 滑动-第三方插件
  // import 'src/plugins/swiper-4.3.3.min.js'
  // import 'assets/styleS/swiper-4.3.3.min.css'

  export default {
   data() {
     return {
       name: "This is Home",
       footTypes: []         // 分类
     }
   },
   created() {

   },
   mounted() {
     msiteFoodTypes("dd").then( res => {

       debugger;

     })
    // this.getData();
   },
   methods: {
     getData() {
       axios.get('../data/sliderData.json')
         .then(response => {
             // 看这个，是不是请求成功之后，就可以执行resolve函数啦~~
            debugger;

         }, err => {
             reject(err);
             // 出错也是同样需要关闭loading的
         })
         .catch(error => {
             reject(error);
             // 出错也是同样需要关闭loading的
         })
     }
   },
   components: {
     "Header": Header
   }
  }
</script>

<style lang="less" media="screen">
  .food-entry{

    .food-entry-item{
      overflow: hidden;

      >a{
        float: left;
        width: 20%;
        font-size: 13px;
        color: black;
        text-decoration: none;
        text-align: center;

        img{
          width: 100%;
          height: 100%;
        }

        span{
          display: block;
        }
      }
    }
  }
</style>
