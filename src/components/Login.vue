<template>
<div class="wrapper">
  <div class="login">
    <form>
      <fieldset>
        <input type="tel">
        <input type="password">
        <button class="btn" v-if="mode === 'login'" type="submit">登陆</button>
        <button class="btn" v-else type="submit">注册</button>
        <div v-if="mode === 'login'">
          没有账号？<span @click="mode='register'">注册</span>
        </div>
        <div v-else>
          已有账号？<span @click="mode='login'">登陆</span>
        </div>
      </fieldset>
    </form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      mode: 'register'
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-image: url('/static/bg.png');
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  display: flex;
}
.login {
  background: #fff;
  margin: auto;
  border: 1px solid #dadada;
  box-shadow: 0 9px 30px -6px rgba(0,0,0,.2), 0 18px 20px -10px rgba(0,0,0,.04), 0 18px 20px -10px rgba(0,0,0,.04), 0 10px 20px -10px rgba(0,0,0,.04);
  border-radius: 10px;
  padding: 2em;
}
fieldset {
  width: 25em;
  border: none;
}
fieldset > * {
  width: 100%;
  margin: 1em 0;
}
input {
  padding: 1em;

  border-radius: .25em;
  border: 1px solid #ccc;
  transition: .1s all;
}
input:focus {
  box-shadow: 0 0 .5em rgba(93, 162, 248, 0.5);
  border-color: #5da2f8;
  outline: 0;
}
</style>
