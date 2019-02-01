<template>
  <div>
    image list
    {{ allImages.length }}
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
