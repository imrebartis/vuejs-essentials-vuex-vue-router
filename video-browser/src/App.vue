<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
    {{ videos.length }}
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import axios from 'axios';
import VideoList from './components/videoList';
require("dotenv").config({ path: "variables.env" });

const API_KEY = process.env.API_KEY

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
  },
  data() {
    return { videos: [] };
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm,
        }
      }).then(response => {
        this.videos = response.data.items
      })
    }
  }
};
</script>

