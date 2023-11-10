<template>
  <div class="home">
  
    <template v-if="tasks.length > 0">
      <TasksList/>
    </template>
    <template v-else>
      <NoTasks />
    </template>
  </div>
</template>

<script>
import { useTasks } from "@/store/tasks";


import TasksList from "@/components/Todo/TasksList.vue";
import NoTasks from "@/components/Todo/NoTasks.vue";
export default {
  components: {
    TasksList,
    NoTasks
  },
  mounted() {
    useTasks().fetchTasks();
  },
  computed: {
    tasks() {
      return useTasks().filteredTasks;
    },
  },
};
</script>

<style lang="scss" scoped></style>
