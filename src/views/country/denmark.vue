<template>
  <v-container>
    <h1>第4問 v-modelを理解しよう</h1>
    <h2>v-text-fieldへの入力値がpタグに表示されるようにせよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <v-form>
          <v-text-field
            placeholder="ここに入力した値がpタグに表示される"
          ></v-text-field>
        </v-form>
        <p>入力値：{{ text }}</p>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="colombia">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="eswatini">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "denmark",
  data() {
    return {
      text: "",
    };
  },
};
</script>