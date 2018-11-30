<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
require("dotenv").config({ path: "variables.env" });

const API_KEY = process.env.API_KEY

export default {
  name: "App",
  components: {
    SearchBar
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
};
</script>

