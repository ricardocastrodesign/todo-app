<template>
  <v-dialog width="500" v-model="dialogOpen" persistent>
    <template v-slot:default>
      <v-card title="Edit task">
        <v-card-text>Change the task description:</v-card-text>
        <v-text-field class="pa-3"
          v-model="taskDescription"
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
export default {
  props: ["task"],
  data() {
    return {
      dialogOpen: true,
      taskDescription: null
    };
  },
  mounted() {
    this.taskDescription = this.task.description;
  },
  methods: {
    editTask() {
      this.$emit("edit", this.taskDescription);
    },
  },
  computed: {
   
  },
};
</script>
