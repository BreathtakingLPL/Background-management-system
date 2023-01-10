<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">Users</h4>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Title</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in  userlist" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.position}}</td>
          
          <td>
            <a href="#" @click.prevent='getDetail(item.id)'>Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyUser',
  data() {
    return {
      // 用户列表数据
      userlist: [
        { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
        { id: 2, name: '李斯', age: 35, position: '丞相' },
        { id: 3, name: '吕不韦', age: 50, position: '商人' },
        { id: 4, name: '赵姬', age: 48, position: '王太后' }
      ]
    }
  },
  methods: {
    // go to userDetail
    getDetail(id) {
      this.$router.push('/home/userinfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped></style>
