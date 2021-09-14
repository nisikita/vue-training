<template>
  <v-container>
    <h1>第2問 メソッドを起動しよう</h1>
    <h2>ボタンクリックした際にアラートが表示されるようにせよ</h2>
    <p></p>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <v-btn color="primary" block>alert</v-btn>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="australia">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="colombia">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "brazil",
  methods: {
    btnClickAlert() {
      // alert: function()の省略した書き方
      alert("アラートです");
    },
  },
};
</script>