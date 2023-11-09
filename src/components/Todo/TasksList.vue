<template>
  <v-list select-strategy="classic">
    <v-list-item value="notifications">
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title>Task</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
