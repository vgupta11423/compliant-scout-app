<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand float-left" href="/">Compliant Scout App</a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="nav navbar-nav mr-auto">
        
        <!-- Home-->
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<div class="container mt-5">
  <RouterView></RouterView>
</div>
</template>

<style>
  @import "./assets/base.css";
  
  /* body { 
    background-color:rgb(202, 202, 202) !important
  } */
  </style>

