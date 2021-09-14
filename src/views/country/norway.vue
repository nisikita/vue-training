<template>
  <v-container>
    <h1>第14問 バリデーション</h1>
    <h2>それぞれのplaceholderに従ってバリデーションを設定せよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <v-text-field placeholder="半角数値のみ入力"></v-text-field>
        <v-text-field placeholder="ローマ字のみの入力"></v-text-field>
        <v-text-field placeholder="必須入力項目"></v-text-field>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="madagascar">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="oman">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "lebanon",
};
</script>