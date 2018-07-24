<!-- 底部导航栏组件 -->
<template lang="html">
  <footer>
    <a v-for="item in data" :class="$route.path.indexOf(item.key) !== -1 ? 'active' : ''">
      <i :class="['icon icon-' + item.key]" ></i>
      <span class="title">{{ item.title }}</span>
    </a>
  </footer>
</template>

<script>
export default {
  data() {
    return{
      data: [{
        title: "外卖",  // 首页
        key: "home"
      }, {
        title: "搜索",
        key: "explore"
      }, {
        title: "订单",
        key: "order"
      }, {
        title: "我的",
        key: "user"
      }]
    }
  }
}
</script>

<style lang="less" scoped>
footer{
  display: flex;
  position: fixed;
  height: 55px;
  width: 100%;
  padding-top: 8px;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 12px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  background-color: #ffffff;

  .active{
    color: #0089dc;

    .icon-home{
      background-image: url("../../assets/images/components/home-active.svg");
    }

    .icon-explore{
      background-image: url("../../assets/images/components/explore-active.svg");
    }

    .icon-order{
      background-image: url("../../assets/images/components/order-active.svg");
    }

    .icon-user{
      background-image: url("../../assets/images/components/user-active.svg");
    }
  }

  >a{
    display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;

    .title{
        display: block;
    }
  }
}

.icon{
  display: inline-block;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: contain;
}
.icon-home{
  background-image: url("../../assets/images/components/home.svg");
}
.icon-explore{
  background-image: url("../../assets/images/components/explore.svg");
}
.icon-order{
  background-image: url("../../assets/images/components/order.svg");
}
.icon-user{
  background-image: url("../../assets/images/components/user.svg");
}
</style>
