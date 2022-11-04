<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Organization content -->
            <h3 class="text-center">Update Company</h3>
            <form @submit.prevent="handleUpdateForm">

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="companyData.c_name" required>
                </div>

                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="companyData.c_address" required>
                </div>

                <div class="form-group">
                    <label>Mail Address</label>
                    <input type="text" class="form-control" v-model="companyData.c_mailAddress" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="companyData.c_city" required>
                </div>

                <div class="form-group">
                    <label>County</label>
                    <input type="text" class="form-control" v-model="companyData.c_county" required>
                </div>

                <div class="form-group">
                    <label>EIN</label>
                    <input type="text" class="form-control" v-model="companyData.c_EIN" required>
                </div>
                
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="companyData.c_email" required>
                </div>

                <div class="form-group">
                    <label>Location Name</label>
                    <input type="text" class="form-control" v-model="companyData.c_locationName" required>
                </div>
                
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" v-model="companyData.c_phoneNumber" required>
                </div>

                <button class="btn btn-warning mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
     data() {
        return {
            companyData: { }
        }
    },
    created() {
        let apiURL = `http://localhost:8080/api/companies/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.companyData = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:8080/api/companies/${this.$route.params.id}`;
            console.log(this.companyData)
            axios.put(apiURL, this.companyData).then((res) => {
                console.log(res)
                this.$router.push('/api/companies')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>