<template>
  <v-container>
    <h1>第4問 コンポーネントを作成して、共通化しよう</h1>
    <h2>共通部分をコンポーネントに切り分けよ</h2>
    <p>切り分けたコンポーネントを再利用せよ</p>
    <v-card class="mb-4">
      <v-card-title>初級問題</v-card-title>
      <v-container>
        <v-row>
          <v-col
            v-for="beginnerQuestion in beginnerQuestions"
            :key="beginnerQuestion.id"
            cols="4"
          >
            <v-btn color="primary" block>{{
              beginnerQuestion.name
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-card-title>中級問題</v-card-title>
      <v-container>
        <v-row>
          <v-col
            cols="3"
            v-for="intermediateQuestion in intermediateQuestions"
            :key="intermediateQuestion.id"
          >
            <v-btn block color="primary">{{
              intermediateQuestion.name
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {
  getBeginnerQuestions,
  getIntermediateQuestions,
} from "../../data/question.js";
export default {
  name: "top",
  data() {
    return {
      beginnerQuestions: [],
      intermediateQuestions: [],
    };
  },
  created() {
    this.$set(this, "beginnerQuestions", getBeginnerQuestions());
    this.$set(this, "intermediateQuestions", getIntermediateQuestions());
  },
};
</script>