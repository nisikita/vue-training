<template>
  <v-container>
    <h1>第6問 もう少しcomputedを使ってみよう</h1>
    <h2>3つの入力された値の合計値を表示せよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <v-col cols="6">
          <v-form>
            <v-text-field placeholder="入力値１"></v-text-field>
            <v-text-field placeholder="入力値２"></v-text-field>
            <v-text-field placeholder="入力値３"></v-text-field>
          </v-form>
        </v-col>
        <p>合計値:</p>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="eswatini">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="greece">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "france",
};
</script>