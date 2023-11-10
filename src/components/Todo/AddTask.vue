<template>
  <v-text-field
    v-model="newTaskDescription"
    @click:appendInner="addTask"
    @keyup.enter="addTask"
    hide-details
    clearable
    class="pa-6"
    label="Add task"
    append-inner-icon="mdi-plus"
    variant="outlined"
  ></v-text-field>
</template>

<script>
import { useTasks } from "@/store/tasks";

export default {
  data() {
    return {
      newTaskDescription: "",
    };
  },
  methods: {
    addTask() {
      useTasks().addTask(this.newTaskDescription);
      this.$root.vtoast.show({message: 'Task ' + this.newTaskDescription + ' added with success!'});
      this.newTaskDescription = "";

    },
  },
};
</script>

<style lang="scss" scoped></style>
