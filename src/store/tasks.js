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
    async addTask(description) {
      try {
        const response = await api.createTask(description);
        this.tasks.unshift(response.data);
      } catch (error) {
        console.error('Error creating task:', error);
      }
    },
    async toggleTask(id) {
      try {
        const task = this.tasks.find((task) => task.id === id);

        if (!task) {
          console.error('Task not found.');
          return;
        }

        task.completed = !task.completed;

        await api.updateTask(id, { completed: task.completed });
      } catch (error) {
        console.error('Error toggling task:', error);
      }
    },
    async editTask(payload) {
      try {
        await api.updateTask(payload.id, payload);
        
        const taskIndex = this.tasks.findIndex((task) => task.id === payload.id);
        if (taskIndex !== -1) {
          this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...payload };
        }
      } catch (error) {
        console.error('Error updating task:', error);
      }
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
