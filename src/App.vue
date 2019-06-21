<template>
  <div id="app">
    <div style="width: 10%">
      <st-num v-model="test" min="1" max="5" @change="change" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      test: 3
    }
  },
  methods:{
    change(num){
      console.log(num)
    }
  },
  components:{
    // StNum
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
