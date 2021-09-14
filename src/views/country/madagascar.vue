<template>
  <v-container>
    <h1>第13問 イベントハンドリング</h1>
    <h2>
      ボタンをマウスオーバーした際にtextの表示を「マウスオーバーしています」になるようにせよ
    </h2>
    <h2>また、マウスを話した場合元に戻るようにせよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <v-btn color="primary">カーソルを載せてください</v-btn>
        <p>{{ text }}</p>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="lebanon">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="norway">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "madagascar",
  data() {
    return {
      text: "マウスオーバーしていません",
    };
  },
};
</script>