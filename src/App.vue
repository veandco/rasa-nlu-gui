<template>
  <div id='app'>
    <div id='nav'>
      <h1 class='title'>RASA NLU</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang='scss'>
html, body {
  background:#2c3e50;
}

#app {
  font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
}

#nav {
  color: #f7f7f7;
  background: #2c3e50;
  padding: .5rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav .title {
  text-decoration: underline;
}
</style>
