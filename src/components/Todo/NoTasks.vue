<template>
  <v-main>
    <v-container class="fill-height" >
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <div class="no-tasks">
            <v-icon size="100">mdi-check</v-icon>
            <p>All done for now!</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
.no-tasks {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
}
</style>
