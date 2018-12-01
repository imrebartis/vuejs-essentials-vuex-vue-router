<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import axios from 'axios';
require("dotenv").config({ path: "variables.env" });

const API_KEY = process.env.API_KEY

export default {
  name: "App",
  components: {
    SearchBar
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm,
        }
      }).then(response => console.log(response))
    }
  }
};
</script>

