<template>
  <v-container>
    <h1>第2問 propsで値をやり取りしよう</h1>
    <h2>/components/planet/Venus/ディレクトリにあるコンポーネントをインポートし、値を表示せよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>

      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"><v-btn small color="primary" to="mercury">前へ</v-btn></v-col>
      <v-col cols="10"></v-col>
      <v-col cols="1"><v-btn small color="primary" to="earth">次へ</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "venus",
  data(){
    return {
      propsData: 'コンポーネントに値が渡せました'
    }
  }
};
</script>