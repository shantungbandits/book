<template>
  <div class="container">
    <div class="courses">
        <div class="course" v-for="(course, index) in courses" :key="index"  @click="navigateTo(course.id)">
          <figure>
            <img :src="'/static/' + course.img_src">
          </figure>
          <div class="course-content">
            <h5>月儿</h5>
            <span>25.99元</span>
            <svg class="icon" aria-hidden="true" style="width: 24px; height: 24px">
              <use xlink:href="#icon-heart"></use>
            </svg>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      courses: [
        { img_src: 's1.png', id: '123' },
        { img_src: 's2.png', id: '134' },
        { img_src: 's3.png', id: '213' },
        { img_src: 's4.png', id: '153' }
      ]
    }
  },
  methods: {
    navigateTo (id) {
      this.$router.push({ name: 'Course', params: { courseid: id } })
    }
  }
}
</script>

<style scoped>
.courses {
  margin-top: 82px;
  display: flex;
  width: 100%;
}
figure {
  text-align: center;
}
.course {
  flex: 0 1 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #efefef;
  background: #fff;
  cursor: pointer;
}
.course-content {
  padding: .5em;
}
</style>
