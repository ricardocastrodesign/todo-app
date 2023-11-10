<template>
  <div class="home">
    <AddTask />
    <template v-if="tasks.length > 0">
      <TasksList />
    </template>
    <template v-else>
      <NoTasks />
    </template>
  </div>
</template>

<script>
import { useTasks } from "@/store/tasks";

import AddTask from "@/components/Todo/AddTask.vue";
import TasksList from "@/components/Todo/TasksList.vue";
import NoTasks from "@/components/Todo/NoTasks.vue";
export default {
  components: {
    TasksList,
    AddTask,
    NoTasks
  },
  mounted() {
    useTasks().fetchTasks();
    console.log(this.$store);

  },
  computed: {
    tasks() {
      return useTasks().filteredTasks;
    },
  },
};
</script>

<style lang="scss" scoped></style>
