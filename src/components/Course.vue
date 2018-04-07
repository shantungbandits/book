<template>
  <div class="container">
    <div class="course">
      <div class="course-media">
        <img src="/static/s1.png">
      </div>
      <div class="course-content">
        <h5>的算法撒旦垃圾</h5>
        <span>599</span>
        <button class="btn">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
.course {
  width: 100%;
  height: 80vh;
  margin-top: 82px;
  border: 1px solid #efefef;
  background: #fff;
}

.course > * {
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

details {
  padding-left: 2em;
  background: #fff;
  width: 100%;
  font-size:16px;
  border-bottom:1px solid #e0e0e0;
  box-shadow:0 0 2px rgba(0,0,0,0.12),0 2px 4px rgba(0,0,0,0.24);
  display:flex;
}
summary {
  outline:none;
  cursor: pointer;
  padding: 16px 0;
  color:#212121;
  position: relative;
  font-size: 15px;
}
summary::after {
  content: "expand_more";
  font-family: 'Material Icons';
  color: #9e9e9e;
  font-size: 1.5em;
  padding: 0;
  text-align: center;
  margin-top: 0;
  position: absolute;
  top: calc(50% - 12px);
  bottom: 0;
  right: 0;
  width: 6%;
}

</style>
