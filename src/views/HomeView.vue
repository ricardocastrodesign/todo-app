<template>
  <div class="home">
    <TasksList />
  </div>
</template>

<script>
import TasksList from "@/components/Todo/TasksList.vue";
export default {
  components: {
    TasksList,
  },
};
</script>

<style lang="scss" scoped></style>
