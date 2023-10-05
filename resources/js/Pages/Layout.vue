<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <main>
    <div class="app">
      <!-- Cabeçalho -->
      <header class="header">
        <div class="logo">
          <!-- Link para a rota "home" -->
          <Link href="/">Home</Link>

        </div>
        <nav class="nav-links">
          <!-- Link para a rota "about" -->
          <Link href="/about">About</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
  
      <!-- Conteúdo central -->
      <main class="content">
        <div class="center-text">
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Este é o layout normal.</p>
          <div>
            <slot></slot>
          </div>
        </div>
      </main>
    </div>
</main>
  </template>
  
  <script>
  export default {
    components:{
    Link,
}
  };
  </script>
  
  <style scoped>
  /* Estilos para o layout */
  .app {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  .header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header a {
    color: #fff;
    text-decoration: none;
    margin: 0 20px;
  }
  
  .content {
    padding: 20px;
  }
  
  .center-text {
    text-align: center;
  }
  </style>
  