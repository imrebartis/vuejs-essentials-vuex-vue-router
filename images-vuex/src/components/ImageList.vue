<template>
  <div>
    <img width="200" height="160" v-for="image in allImages" :src="image.link" />
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
  img {
    padding-left: 20px;
  }
</style>
