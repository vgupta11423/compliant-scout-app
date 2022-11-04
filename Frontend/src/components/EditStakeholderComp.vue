<template>
  <div class="row justify-content-center">
      <div class="col-md-6">
          <h3 class="text-center">Edit Stakeholder</h3>
          <form @submit.prevent="handleUpdateForm">
            <div class="form-group">
                  <label>Stakeholder ID</label>
                  <input type="text" class="form-control"  v-model="Stakeholder.s_id">
              </div>
              <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control"  v-model="Stakeholder.s_firstName">
              </div>
              <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_lastName" required>
              </div>
              <div class="form-group">
                  <label>Title</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_title" required>
              </div>
              <div class="form-group">
                  <label>DOB</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_dob" required>
              </div>
              <div class="form-group">
                  <label>Place of Birth</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_place_of_birth" required>
              </div>
              <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_address" required>
              </div>
              <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_email" required>
              </div>
              <div class="form-group">
                  <label>Spouse First Name</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_spouse_firstName" required>
              </div>
              <div class="form-group">
                  <label>Spouse Last Name</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_spouse_lastName" required>
              </div>
              <div class="form-group">
                  <label>Personal Funds Invested</label>
                  <input type="text" class="form-control" v-model="Stakeholder.s_personal_funds_invested" required>
              </div>

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
        Stakeholder: {},
      }
    },
    created() {
      let apiURL = `http://localhost:8080/api/stakeholders/${this.$route.params.s_id}`

      // Fills out fields with current data
      axios.get(apiURL).then((res) => {
        this.Stakeholder = res.data
      })
    },
    methods: {
      handleUpdateForm() {
        let apiURL =`http://localhost:8080/api/stakeholders/${this.$route.params.s_id}`
        // Put the new data into the db using the API URL
        axios.put(apiURL, this.Stakeholder).then((res) => {
          this.$router.push(`/companies`)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }


</script>