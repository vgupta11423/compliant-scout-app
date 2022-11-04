<template>
  <div class="row justify-content-center">
      <div class="col-md-6">
          <h3 class="text-center">Edit Stakeholder</h3>
          <form @submit.prevent="">
              <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control"  v-model="stakeholder.s_firstName">
              </div>
              <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" v-model="stakeholder.s_lastName" required>
              </div>
              <div class="form-group">
                  <label>Title</label>
                  <input type="text" class="form-control" v-model="stakeholder.s_title" required>
              </div>


              <!-- If there are anything in the error list - display those errors. -->
              <p v-if="errors.length">
                  <br>
                  <b>Please correct the following error(s):</b>
                  <ul>
                      <li v-for="error in errors" :key="error">{{ error }} </li>
                  </ul>
              </p>
              <button type="submit" class="btn btn-danger mt-3">Update</button>
          </form>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        errors: [],
        stakeholder: { }
      }
    },
    created() {
      let apiURL = `http://localhost:8080/api/stakeholders/${this.$route.params.id}`

      axios.get(apiURL).then((res) => {
        console.log(res.data)
      })
    }
  }

  // export default {
  //   data() {
  //     return {
  //       errors: [],
  //       // Stakeholder object
  //       stakeholder: { }
  //     }
  //   },
  //   created() {
  //     let apiURL = `http://localhost:8080/api/stakeholders/${this.$route.params.id}`;

  //     // Fills out the fields with the stakeholder's current data
  //     axios.get(apiURL).then((res) => {
  //       this.stakeholder = res.data
  //     })
  //   }
  // }
</script>