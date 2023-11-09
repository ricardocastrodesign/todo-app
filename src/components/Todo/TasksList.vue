<template>
  <!-- !TODO ADD LATER TO A TEXT-FIELD COMPONENT -->
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
import { useTasks } from "@/store/tasks"; // Update the path based on your project structure

export default {
  data() {
    return {
      newTaskDescription: "",
    };
  },
  methods: {
    addTask() {
      // !TODO ADD LATER TO A TEXT-FIELD COMPONENT -->
      useTasks().addTask(this.newTaskDescription);
      this.newTaskDescription = "";
    },
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
