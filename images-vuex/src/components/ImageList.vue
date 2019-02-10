<template>
  <div>
    <img v-for="image in allImages" :src="image.link" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "ImageList",
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}
img {
  width: 200px;
  height: 160px;
  margin-bottom: 10px;
}
</style>

