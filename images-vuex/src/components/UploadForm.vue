<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
export default {
  name: "UploadForm",
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background: #eee;
}

input {
  width: 100%;
  height: inherit;
  position: absolute;
  opacity: 0;
}
</style>

