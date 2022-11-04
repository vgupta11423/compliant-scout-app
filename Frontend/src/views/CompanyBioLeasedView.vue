<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
                    <th class="sticky-header">First Date Op</th>
                    <th class="sticky-header">Purchase Price</th>
                    <th class="sticky-header">Purchase Date</th>
                    <th class="sticky-header">Lease Exp Date</th>
                    <th class="sticky-header">Rent</th>
                    <th class="sticky-header">Property Owner Company</th>
                    <th class="sticky-header">Property Owner EIN</th>
                    <th class="sticky-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="companybio" v-for="companyBio in companyBios" :key="companyBio._id">
                    <td>{{ companyBio.first_date_op }}</td>
                    <td>{{ companyBio.purchase_price }}</td>
                    <td>{{ companyBio.purchase_date }}</td>
                    <td>{{ companyBio.lease_exp_date }}</td>
                    <td>{{ companyBio.rent }}</td>
                    <td>{{ companyBio.property_owner_company }}</td>
                    <td>{{ companyBio.property_owner_ein }}</td>
                    <td>
                        <span>
                            <router-link :to="{name: 'EditCompanyBio'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                            <button @click.prevent="deletecompanyBio(companyBio._id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data() {
            return {
                 /*companyBios: [
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                    { firstDateOp: '2022/01/17', purchasePrice: 50, purchaseDate: '2022/05/25', leaseExpDate: '2022/06/23', rent: 1099, propertyOwnerCompany: 'Owner Company Test', propertyOwnerEIN: 1234 },
                ] */
                companyBios: []
            }
        },
        created() {
          let apiURL = `http://localhost:8080/api/company_bios/${this.$route.params.id}`;
          axios.get(apiURL).then(res => {
            this.companyBios = res.data
            //console.log(this.companyBios)
          }).catch(error => {
              console.log(error)
          });
        }
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