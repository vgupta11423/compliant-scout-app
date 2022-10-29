<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
                    <th class="sticky-header">First Date Op</th>
                    <th class="sticky-header">Purchase Price</th>
                    <th class="sticky-header">Purchase Date</th>
                    <th class="sticky-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="companybio" v-for="companyBio in companyBios" :key="companyBio._id">
                    <td>{{ companyBio.firstDateOp }}</td>
                    <td>{{ companyBio.purchasePrice }}</td>
                    <td>{{ companyBio.purchaseDate }}</td>
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
    export default {
        data() {
            return {
                companyBios: [
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
                ]
            }
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