<template>
  <v-container>
    <h1>第9問 v-ifを使ってみよう</h1>
    <h2>「回答を表示」ボタンで回答が表示されるようにせよ</h2>
    <h2>「また、回答を非表示」ボタンで回答が非表示になるようにせよ</h2>
    <h2>
      さらに、一方のボタンが表示されている間、もう一方のボタンは非表示にせよ
    </h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <p>Q:次回の夏季オリンピック開催都市はどこでしょうか？</p>
        <p>A:パリ</p>
        <v-btn color="secondary">回答を表示</v-btn>
        <v-btn color="secondary">回答を非表示</v-btn>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="honduras">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="japan">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "indea",
};
</script>