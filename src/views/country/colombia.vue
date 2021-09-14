<template>
  <v-container>
    <h1>第3問 dataの中身を制御しよう</h1>
    <h2>
      ボタンをクリックした際に、表示されている文章が「コロンビアのコーヒー産地の文化的景観は世界遺産に登録されています」に変わるようにせよ
    </h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <p>{{ text }}</p>
        <v-btn color="primary">change</v-btn>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="brazil">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="denmark">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "colombia",
  data() {
    return {
      text: "コロンビアはコーヒーの産地です",
    };
  },
};
</script>