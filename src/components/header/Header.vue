<template lang="html">
  <div class="search-box">
    <p class="location"><i class="el-icon-location-outline"></i>阿里巴巴西溪园区</p>
    <el-input
      placeholder="搜索饿了么商家、商品名称"
      prefix-icon="el-icon-search">
    </el-input>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.search-box{
  padding: 0 12px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: linear-gradient(90deg,#0af,#0085ff);

  .location{
    height: 45px;
    line-height: 45px;
  }

  .el-input{
    padding-bottom: 8px;
  }
}
</style>
