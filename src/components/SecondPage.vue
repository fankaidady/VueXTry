<template>
  <div>
    <h2>This is Second Page</h2>
    <div>{{ count }}</div>
    <el-button type="success" @click="increment">测试</el-button>
  </div>
</template>
<script>
export default {
    data () {
      return {
        count: 0
      }
    },
     methods: {
      increment () {
        this.count++
      }
    }
};
</script>

<style>
</style>