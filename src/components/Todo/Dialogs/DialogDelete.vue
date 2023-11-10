<template>
  <v-dialog width="500" v-model="dialogOpen" persistent>
    <template v-slot:default>
      <v-card title="Delete task">
        <v-card-text>Are you sure you want to delete this task?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="No" @click="show = false"></v-btn>
          <v-btn text="Yes, I'm sure" color="red" @click="deleteTask"></v-btn>
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
      taskId: null,
    };
  },
  mounted() {
    this.taskId = this.task.id;
  },
  methods: {
    async deleteTask() {
      try {
        await useTasks().deleteTask(this.taskId);
        this.$root.vtoast.show({
          icon: "mdi-trash",
          message: "Task " + this.task.description + " deleted with success!",
          color: "error",
        });
        this.$emit("close");
      } catch (error) {
        if (error.response) {
          const errorMessage = "Error: " + error.response.data.message;
          this.$root.vtoast.show({
            icon: "mdi-trash",
            message: errorMessage,
            color: "error",
          });
        } else {
          this.$root.vtoast.show({
            icon: "mdi-trash",
            message:
              "Sorry, we couldn't delete the task " + this.task.description,
            color: "error",
          });
        }
      }
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
