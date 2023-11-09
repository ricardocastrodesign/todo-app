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

  <div v-for="task in tasks" :key="task.id">
    <v-list select-strategy="classic">
      <v-list-item @click="toogleTask(task.id)">
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
export default {
  data() {
    return {
      newTaskDescription: "",
      tasks: [
        {
          createdAt: "2023-11-06T13:49:10.135Z",
          description: "numquam qui ad",
          completed: false,
          id: "17",
        },
        {
          createdAt: "2023-11-05T22:31:58.223Z",
          description: "perferendis explicabo aspernatur",
          completed: false,
          id: "16",
        },
        {
          createdAt: "2022-12-26T14:49:51.221Z",
          description: "feed wild  geese",
          completed: true,
          id: "13",
        },
        {
          createdAt: "2022-12-26T10:11:03.938Z",
          description: "walk the dog",
          completed: false,
          id: "12",
        },
        {
          createdAt: "2022-12-25T20:19:47.767Z",
          description: "take a walk on the wild side",
          completed: true,
          id: "14",
        },
        {
          createdAt: "2022-12-25T18:43:25.662Z",
          description: "pray to the almighty",
          completed: true,
          id: "15",
        },
        {
          createdAt: "2022-12-18T09:32:35.006Z",
          description: "Do the dishes",
          completed: false,
          id: "6",
        },
        {
          createdAt: "2022-12-18T03:58:20.482Z",
          description: "Take out trash",
          completed: false,
          id: "7",
        },
      ],
    };
  },
  methods: {
    addTask() {
      // !TODO ADD LATER TO A TEXT-FIELD COMPONENT -->
      let newTask = {
        id: Date.now(),
        description: this.newTaskDescription,
        completed: false,
      };

      this.tasks.unshift(newTask);
      this.newTaskDescription = "";
    },
    toogleTask(id) {
      console.log("id:", id);
      let task = this.tasks.find((task) => task.id === id);

      task.completed = !task.completed;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
