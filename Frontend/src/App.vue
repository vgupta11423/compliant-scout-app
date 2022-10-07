<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand float-left" href="/">Compliant Scout App</a>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/companies" class="nav-link">Companies</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<div class="container mt-5">
  <router-view></router-view>
</div>
</template>

<style>
  @import "./assets/base.css";
  

  </style>

