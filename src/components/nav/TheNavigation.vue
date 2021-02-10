<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/Home"><base-button>Home</base-button></router-link>
        </li>
        <li>
          <router-link to="/Review"><base-button>Reviews</base-button></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
header {
  width: 100%;
  height: 5rem;
  background-color:  #360032;
}
body {
  margin: 0;
}
nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}
</style>