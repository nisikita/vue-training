<template>
  <v-container>
    <h1>第5問 computedを使ってみよう</h1>
    <h2>dataで定義されている値の合計値をcomputedを使って表示せよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <p>
          1個{{ meats[0].price }}円の{{ meats[0].name }}を{{ meats[0].count }}個
        </p>
        <p>
          1個{{ meats[1].price }}円の{{ meats[1].name }}を{{ meats[1].count }}個
        </p>
        <p>
          1個{{ meats[2].price }}円の{{ meats[2].name }}を{{ meats[2].count }}個
        </p>
        <p>合計金額は:</p>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="denmark">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="france">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "eswatini",
  data() {
    return {
      meats: [
        {
          name: "chicken",
          price: 200,
          count: 1,
        },
        {
          name: "pork",
          price: 300,
          count: 2,
        },
        {
          name: "beef",
          price: 500,
          count: 3,
        },
      ],
    };
  },
};
</script>