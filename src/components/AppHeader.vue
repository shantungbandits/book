<template>
  <header>
    <div class="container">
      <a class="logo logo-primary">
      </a>
      <nav>
        <ul class="tab">
          <li><router-link class="btn" to="/courses">课程</router-link></li>
          <li><router-link class="btn" to="/login">登陆</router-link></li>
          <li class="dropdown">
            <router-link class="btn user" to="/user">个人</router-link>
            <ul class="user-menu">
              <li><router-link to="/courses">我的预约</router-link></li>
              <li><router-link to="/courses">我的地址</router-link></li>
              <li><router-link to="/courses">我的资料</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>

</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  width: 60%;
  float: right;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

}
a {
  text-decoration: none;
}
.tab > li > a {

  color: white;
}
.user-menu > li > a {
  color: #616161;
}

.tab {
  text-align: right;
}
.tab > li {
  display: inline-block;
}

.dropdown {
  position: relative;
}
.user-menu {
  top: 50px;
  text-align: center;
  width: 100%;
  background: #fff;
  display: none;
  position: absolute;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0,0,0,.15);

}
.user-menu li {
  padding: 12px 8px;
  border-top: 1px solid #f5f5f5;
}
.dropdown:hover > .user-menu {
  display: block;
  color: black;
}

</style>
