<template>
  <ul>Video list {{videos}}</ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: {
    videos: Array
  },
};
</script>

<style>
</style>


