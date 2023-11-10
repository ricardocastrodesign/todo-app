<template>
  <v-app-bar class="py-3">
    <v-app-bar-title>
      <v-icon icon="mdi-check-circle-outline" />
      Todo App
    </v-app-bar-title>

    <AddTask />
  </v-app-bar>
</template>

<script>
import AddTask from "@/components/Todo/AddTask.vue";
export default {
  components: {
    AddTask,
  }
};
</script>
