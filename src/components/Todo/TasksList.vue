<template>
  <div v-for="task in filteredTasks" :key="task.id">
    <v-list select-strategy="classic">
      <v-list-item @click="toggleTask(task.id)">
        <template v-slot:prepend>
          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.completed"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <template v-slot:append>
          <v-btn
            @click.stop="deleteTask(task.id)"
            color="primary"
            icon="mdi-delete"
            variant="text"
          ></v-btn>
        </template>
        <v-list-item-title
          :class="{ 'text-decoration-line-through': task.completed }"
          >{{ task.description }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { useTasks } from "@/store/tasks";

export default {
  methods: {
    toggleTask(id) {
      useTasks().toggleTask(id);
    },
    deleteTask(id) {
      useTasks().deleteTask(id);
    },
  },
  mounted() {
    useTasks().fetchTasks();
  },
  computed: {
    filteredTasks() {
      return useTasks().filteredTasks;
    },
  },
};
</script>

<style lang="scss" scoped></style>
