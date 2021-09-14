<template>
  <v-app-bar app>
    <v-btn v-if="topPageFlg" text>
    <v-img max-height="30" max-width="30" src="../../assets/logo.png" />
    </v-btn>
    <v-btn v-else text to="/">
      <v-img max-height="30" max-width="30" src="../../assets/logo.png" />
    </v-btn>
    Vue Basic Training
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  computed:{
    topPageFlg(){
      if(this.$route.path === "/"){
        return true
      }
      return false
    }
  }
}
</script>