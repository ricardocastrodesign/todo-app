<template>
  <router-view />
  <SnackbarComponent ref="vtoast" />
</template>

<script>
import SnackbarComponent from "./components/Global/SnackbarComponent.vue";

export default {
  components: {
    SnackbarComponent,
  },
  mounted() {
    this.$root.vtoast = this.$refs.vtoast;
  },
};
</script>
