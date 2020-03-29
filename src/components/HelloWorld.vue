<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ComA></ComA>
    <ComB></ComB>
  </div>
</template>

<script>
// import ComA from './user/ComA'
// import ComB from './user/ComB'
export default {
  name: 'HelloWorld',
  // components: {
  //   ComA,
  //   ComB
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
