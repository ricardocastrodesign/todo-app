<template>
  <v-dialog width="500" v-model="dialogOpen" persistent>
    <template v-slot:default>
      <v-card title="Edit task">
        <v-card-text>Change the task description:</v-card-text>
        <v-text-field
          class="pa-3"
          v-model="taskDescription"
          @keyup.enter="editTask"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Cancel" @click="show = false"></v-btn>
          <v-btn text="Save" color="green" @click="editTask"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { useTasks } from "@/store/tasks";

export default {
  props: ["task"],
  data() {
    return {
      dialogOpen: true,
      taskDescription: null,
    };
  },
  mounted() {
    this.taskDescription = this.task.description;
  },
  methods: {
    editTask() {
      let payload = {
        id: this.task.id,
        description: this.taskDescription,
      };
      useTasks().editTask(payload);
      this.$emit("close");
    },
  },
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>
