<template>
  <v-container>
    <h1>第1問 scriptとtemplateを繋げよう</h1>
    <h2>dataで定義されている文章を表示させよ</h2>
    <p>文章を直接書き込んではならない</p>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <p></p>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="11"></v-col>
      <v-col cols="1">
        <v-btn small color="primary" to="brazil">次へ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "australia",
  data() {
    // data:function()の省略された書き方
    return {
      text: "オーストラリアは南半球に位置する国で大陸全土がそのまま国家として成り立っています。",
    };
  },
};
</script>