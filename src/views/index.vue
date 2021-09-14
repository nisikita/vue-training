<template>
  <v-container>
    <h1>Vue.js勉強会〜演習編〜</h1>
    <v-card class="mb-4">
      <v-card-title>演習ルール</v-card-title>
      <v-card-text
        >以下の演習問題を解いていってください。</v-card-text
      >
    </v-card>
    <v-card class="mb-4">
      <v-card-title>初級問題</v-card-title>
      <v-container>
        <v-row>
          <v-col
            v-for="beginnerQuestion in beginnerQuestions"
            :key="beginnerQuestion.id"
            cols="4"
          >
            <v-btn color="primary" block :to="beginnerQuestion.to">{{
              beginnerQuestion.name
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="mb-4">
      <v-card-title>中級問題</v-card-title>
      <v-container>
        <v-row>
          <v-col
            cols="3"
            v-for="intermediateQuestion in intermediateQuestions"
            :key="intermediateQuestion.id"
          >
            <v-btn block color="primary" :to="intermediateQuestion.to">{{
              intermediateQuestion.name
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-card-title>上級問題</v-card-title>
      <v-container>
        <v-btn color="primary" block to="/universe/moon">最終問題</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {
  getBeginnerQuestions,
  getIntermediateQuestions,
} from "../data/question.js";
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