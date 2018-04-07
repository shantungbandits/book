<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  overflow: hidden;
}
.container {
  width: 75em;
  margin: 0 auto;
}
html {
  box-sizing: border-box;
  margin: 0;

}

main {

}
body {
  background: #ededed;
  font-weight: normal;
  margin: 0;
}
*, *::before, *::after {
  box-sizing: inherit;
}
header {
  padding: 1rem 0;
  position: absolute;
  width: 100%;
  background: #1a1a1a;

}
main {
  overflow: hidden;
}
.logo {
  background: url('/static/logo.png') no-repeat 50%;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: 0 5px;
  float: left;
}
.logo img {
  display: block;
  width: 100%;
}
.btn {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-image: none;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 11px 30px;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}
</style>
