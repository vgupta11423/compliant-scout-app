<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase" style="padding-bottom: 1.5em;">Login</h2>

              <div class="form-outline form-white mb-4">
                <input type="email" id="username" placeholder="Username" style="margin-bottom: 1.8em;" class="form-control form-control-lg" />
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="password" placeholder="Password" class="form-control form-control-lg" />
              </div>

              <button class="btn btn-outline-light btn-lg px-5" style="margin-top: 1.8em;" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>