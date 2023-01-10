<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">Back</button>
    <h4 class="text-center">User Details{{id}}</h4>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props:['id']
}
</script>

<style lang="less" scoped></style>
