<template>
    <div class="container">
      <form>
        <h2 class="mb-3">Login</h2>
        <div class="input">
          <label for="email">Username</label>
          <input
            class="form-control"
            type="text"
            name="username"
            placeholder=""
          />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder=""
          />
        </div>
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Login
        </button>
        <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_1"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </form>
    </div>
  </template>