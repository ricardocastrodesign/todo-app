<template>
  <v-dialog width="500" v-model="dialogOpen" persistent>
    <template v-slot:default>
      <v-card title="Delete task">
        <v-card-text>Are you sure you want to delete this task?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="No" @click="show=false"></v-btn>
          <v-btn text="Yes, I'm sure" color="red" @click="deleteTask"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { useTasks } from "@/store/tasks";

export default {
  props: ['task'],
  data() {
    return {
      dialogOpen: true,
      taskId: null
    };
  },
  mounted() {
    this.taskId = this.task.id;
  },
  methods: {
    deleteTask() {
      useTasks().deleteTask(this.taskId);
      this.$emit("close");
    }
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
