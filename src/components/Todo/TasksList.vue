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
            @click.stop="editTask(task)"
            color="primary"
            icon="mdi-pencil"
            variant="text"
          ></v-btn>
          <v-btn
            @click.stop="deleteTask(task)"
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
  <DialogDelete v-if="dialogDelete" :task="selectedTask" :visible="dialogDelete" @close="dialogDelete = false" />
  <DialogEdit v-if="dialogEdit" :task="selectedTask" :visible="dialogEdit" @close="dialogEdit = false"/>
</template>

<script>
import { useTasks } from "@/store/tasks";

import DialogEdit from "@/components/Todo/Dialogs/DialogEdit.vue"
import DialogDelete from "@/components/Todo/Dialogs/DialogDelete.vue"

export default {
  components: {
    DialogEdit,
    DialogDelete
  },
  data() {
    return {
      dialogEdit: false,
      dialogDelete: false,
      selectedTask: null
    }
  },
  methods: {
    toggleTask(id) {
      useTasks().toggleTask(id);
    },
    deleteTask(task) {
      this.selectedTask = task;
      this.dialogDelete = true;
    },
    editTask(task) {
      this.selectedTask = task;
      this.dialogEdit = true;
    }
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
