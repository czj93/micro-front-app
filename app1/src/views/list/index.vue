<template>
  <div>
    App1 List
    <div>
      <ul>
        <li>
          通过 router-link 进行跨应用跳转 无法得到预期的结果
          <router-link to="/app2/list"><el-button type="text">跳转 App2 list</el-button></router-link>
        </li>
        <li><el-button @click="clickHandle">跳转 App2 list</el-button></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  methods: {
    clickHandle() {
      history.pushState(null, '', '/app2/list')
    }
  }
}
</script>
