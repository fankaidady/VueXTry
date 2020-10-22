<template>
  <div class="componentsA">
    <P class="title">组件A</P>
    <P class="titleName">餐馆名称：{{ resturantName }}</P>
    <div>
      <!-- 点击修改 为 A 餐馆 -->
      <button class="btn" @click="modify('A餐馆')">修改为A餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="trunToB">跳转到B页面</button>
    </div>
  </div>
</template>
 
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "A",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      resturantName: state => state.user.resturantName
    }),
    // ...mapActions( 'user',// 语法糖
    //     ['modifyAName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
    // ),
  },
  methods: {
    modify(products) {
      this.$store.dispatch("user/modifyAName", products);
    },
    trunToB() {
      this.$router.push({ path: "/Home/SecondPart" }); // 路由跳转到B
    },
  },
};
</script>