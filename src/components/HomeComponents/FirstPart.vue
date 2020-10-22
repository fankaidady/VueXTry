<template>
  <div class="componentsA">
      <P class="title">组件A</P>
      <P class="titleName">餐馆名称：{{resturantName}}</P>
      <div>
            <!-- 点击修改 为 A 餐馆 -->
          <button class="btn" @click="modifyAName('A餐馆')">修改为A餐馆</button>
      </div>
      <div class="marTop">
          <button class="btn" @click="trunToB">跳转到B页面</button>
      </div>
  </div>
</template>
 
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'A',
  data () {
    return {
    }
  },
  methods:{
      ...mapActions( // 语法糖
          ['modifyAName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
      ),
      trunToB () {
          this.$router.push({path: '/Home/SecondPart'}) // 路由跳转到B
      }
  },
  computed: {
      ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getters.resturantName
  }
}
</script>