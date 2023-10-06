<template>
  <header class="header">
    <div class="container">
      <div class="header_inner">
        <nav class="nav" id="nav">
          <a class="nav_link">Все заказы</a>
          <a class="nav_link">Добавить зказ</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  height: var(--navbar-height);
  background-color: #409EFF;
  top: 0;
  left: 0;
  z-index: 5;
}

.header_inner {
  display: flex;
  justify-content: space-between;
  padding: 35px;
  align-items: center;
}

.nav {
  display: flex;
  /*font-size: 13px;*/
  /*font-weight: 700;*/
  text-transform: uppercase;
}

.nav_link {
  color: #561c1c;
  text-decoration: none;
  opacity: 0.75;
  margin-left: 60px;
  cursor: pointer;

  transition: opacity .1s linear;
}

.nav_link:first-child {
  margin-left: 0;
}

.nav_link:hover {
  opacity: 1;
}
</style>
