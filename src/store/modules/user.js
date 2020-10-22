const state = () => ({
  resturantName: '飞歌餐馆' // 默认值
  // id: xxx  如果还有全局状态也可以在这里添加
  // name:xxx
})
const mutations = {
  // 提交 mutations是更改Vuex状态的唯一合法方法
  modifyAName: (state, name) => { // A组件点击更改餐馆名称为 A餐馆
    state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
  },
  modifyBName: (state, name) => { // B组件点击更改餐馆名称为 B餐馆
    state.resturantName = name
  }
}
const actions = {

  // 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
  modifyAName({ commit }, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆
    return commit('modifyAName', name)
  },
  modifyBName({ commit }, name) {
    return commit('modifyBName', name)
  }

  // ES6精简写法
  //modifyAName:({commit},name) => commit('modifyAName', name)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
