<template>
  <div class="row justify-content-center">
      <table class="table table-hover table-striped table-bordered">
          <thead>
              <tr class="table-dark">
                  <th class="sticky-header">ID</th>
                  <th class="sticky-header">Name</th>
                  <th class="sticky-header">Address</th>
                  <th class="sticky-header">Mail Address</th>
                  <th class="sticky-header">City</th>
                  <th class="sticky-header">County</th>
                  <th class="sticky-header">EIN</th>
                  <th class="sticky-header">Email</th>
                  <th class="sticky-header">Location Name</th>
                  <th class="sticky-header">Phone Number</th>
                  <th class="sticky-header">Company Bio</th>
                  <th class="sticky-header">Company Licenses</th>
                  <th class="sticky-header">Company Stakeholders</th>
                  <th class="sticky-header">Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr class="companyinfo" v-for="company in companies" :key="company._id">
                  <td>{{ company.c_id }}</td>
                  <td>{{ company.c_name }}</td>
                  <td>{{ company.c_address }}</td>
                  <td>{{ company.c_mailAddress }}</td>
                  <td>{{ company.c_city }}</td>
                  <td>{{ company.c_county }}</td>
                  <td>{{ company.c_EIN }}</td>
                  <td>{{ company.c_email }}</td>
                  <td>{{ company.c_locationName }}</td>
                  <td>{{ company.c_phoneNumber }}</td>
                  <td v-if="company.c_owned"><router-link :to="{name: 'CompanyBioOwnedView'}" class="btn btn-primary btn-sm action-btn">Company Bio</router-link></td>
                  <td v-else="!company.c_owned"><router-link :to="{name: 'CompanyBioLeasedView'}" class="btn btn-primary btn-sm action-btn">Company Bio</router-link></td>
                  <td><router-link :to="{name: 'CompanyLicensesView'}" class="btn btn-primary btn-sm action-btn">Company Licenses</router-link></td>
                  <td><router-link :to="{name: 'StakeholdersView'}" class="btn btn-primary btn-sm action-btn">Company Stakeholders</router-link></td>
                  <td>
                      <span>
                          <router-link :to="{name: 'EditCompanyComp'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                          <button @click.prevent="deletecompany(company._id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
                      </span>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
//import CompanyRoutes from "../../../app/routes/company.routes.js";
import axios from "axios";

export default {
  data() {
    return {
       /* Companies: [
        { id: 40, name: 'Bobs Hardware', address: '123 Rose Boulevard', mailAddress: 'test1', city: 'Houston', county: 'county1', ein: '1234', email: 'bob@bobshardware.com', locationName: 'test1', phoneNumber: '(123) 333-2255', owned: true },
        { id: 21, name: 'Toms Computer', address: '345 Adair Lane', mailAddress: 'test1', city: 'Austin', county: 'county2', ein: '3456', email: 'tom@tomscomputer.com', locationName: 'test1', phoneNumber: '(321) 111-4488' },
        { id: 89, name: 'Willows Bookstore', address: '555 Pond Terrace', mailAddress: 'test1', city: 'Dallas', county: 'county3', ein: '5678', email: 'willow@willowsbookstore.com', locationName: 'test1', phoneNumber: '(111) 888-6677' },
        { id: 38, name: 'Jennas Salon', address: '777 Priscilla Loop', mailAddress: 'test1', city: 'San Antonio', county: 'county4', ein: '7890', email: 'jenna@jennassalon.com', locationName: 'test1', phoneNumber: '(222) 999-5544' },
        { id: 40, name: 'Bobs Hardware', address: '123 Rose Boulevard', mailAddress: 'test1', city: 'Houston', county: 'county1', ein: '1234', email: 'bob@bobshardware.com', locationName: 'test1', phoneNumber: '(123) 333-2255' },
        { id: 21, name: 'Toms Computer', address: '345 Adair Lane', mailAddress: 'test1', city: 'Austin', county: 'county2', ein: '3456', email: 'tom@tomscomputer.com', locationName: 'test1', phoneNumber: '(321) 111-4488' },
        { id: 89, name: 'Willows Bookstore', address: '555 Pond Terrace', mailAddress: 'test1', city: 'Dallas', county: 'county3', ein: '5678', email: 'willow@willowsbookstore.com', locationName: 'test1', phoneNumber: '(111) 888-6677' },
        { id: 38, name: 'Jennas Salon', address: '777 Priscilla Loop', mailAddress: 'test1', city: 'San Antonio', county: 'county4', ein: '7890', email: 'jenna@jennassalon.com', locationName: 'test1', phoneNumber: '(222) 999-5544' },
        { id: 40, name: 'Bobs Hardware', address: '123 Rose Boulevard', mailAddress: 'test1', city: 'Houston', county: 'county1', ein: '1234', email: 'bob@bobshardware.com', locationName: 'test1', phoneNumber: '(123) 333-2255' },
        { id: 21, name: 'Toms Computer', address: '345 Adair Lane', mailAddress: 'test1', city: 'Austin', county: 'county2', ein: '3456', email: 'tom@tomscomputer.com', locationName: 'test1', phoneNumber: '(321) 111-4488' },
        { id: 89, name: 'Willows Bookstore', address: '555 Pond Terrace', mailAddress: 'test1', city: 'Dallas', county: 'county3', ein: '5678', email: 'willow@willowsbookstore.com', locationName: 'test1', phoneNumber: '(111) 888-6677' },
        { id: 38, name: 'Jennas Salon', address: '777 Priscilla Loop', mailAddress: 'test1', city: 'San Antonio', county: 'county4', ein: '7890', email: 'jenna@jennassalon.com', locationName: 'test1', phoneNumber: '(222) 999-5544' }
      ]  */
      companies: []
    }
  },
  created() {
        let apiURL = 'http://localhost:8080/api/companies'
        axios.get(apiURL).then(res => {
          this.companies = res.data
        }).catch(error => {
            console.log(error)
        });
      }
   /*  methods: {
      retrieveCompanies() {
        CompanyRoutes.findAll()
      .then(response => {
        this.companies = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  }   */
}
</script>

<style>
  .table {
      text-align: center;
  }
  th.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  /*To not have transparent background.
  background-color: white;*/
  }
  .companyinfo {
      text-align: center;
  }
  .action-btn{
      margin: 5px;
      text-align: center;
      font-weight: 500;
  }
</style>