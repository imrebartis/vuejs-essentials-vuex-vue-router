<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    {{ isLoggedIn }}
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <button class="item"><a>Galleries</a></button>
        <button class="item"><a>Upload</a></button>
        <button class="item"><a>Logout</a></button>
      </div>
       <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "AppHeader",
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login'])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
.item:hover {
  cursor: pointer;
}
</style>

