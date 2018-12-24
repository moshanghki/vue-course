export default store => {
  console.log('我在store初始化后被调用了')
  store.subscribe((mutation, state) => {
    // 提交mutation后触发
    console.log('提交了mutation')
  })
}
