import { defineStore } from 'pinia';

import * as api from '@/api';

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: [],
    filter: 'all',
    nextId: 0 //it wont be used when api request are done,
  }),
  getters: {
    finishedTasks(state) {
      return state.tasks.filter((task) => task.completed);
    },
    unfinishedTasks(state) {
      return state.tasks.filter((task) => !task.completed);
    },
    filteredTasks(state) {
      if (state.filter === 'finished') {
        return this.finishedTasks;
      } else if (state.filter === 'unfinished') {
        return this.unfinishedTasks;
      }
      return state.tasks;
    },
  },
  actions: {
    addTask(description) {
      this.tasks.unshift({
        id: this.nextId++,
        description,
        completed: false,
      });
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask(payload) {
      console.log('Edit Task:', payload);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    async fetchTasks() {
      try {
        const response = await api.getTasks();
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
  },
});
