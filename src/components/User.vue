<template>
  <div class="user">
    <span>{{user.name}}</span>
    <span>{{user.age}}</span>
    <span>{{user.address}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: 'adsfa',
        age: '18',
        address: '啊地方大师傅'
      }
    }
  }
}
</script>

<style scoped>

</style>
