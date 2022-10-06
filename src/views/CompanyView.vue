<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
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
                <tr class="companyinfo" v-for="companyInfo in companyInfos" :key="companyInfo._id">
                    <td>{{ companyInfo.name }}</td>
                    <td>{{ companyInfo.address }}</td>
                    <td>{{ companyInfo.mailAddress }}</td>
                    <td>{{ companyInfo.city }}</td>
                    <td>{{ companyInfo.county }}</td>
                    <td>{{ companyInfo.ein }}</td>
                    <td>{{ companyInfo.email }}</td>
                    <td>{{ companyInfo.locationName }}</td>
                    <td>{{ companyInfo.phoneNumber }}</td>
                    <td><router-link :to="{name: 'companybio'}" class="btn btn-primary btn-sm action-btn">Company Bio</router-link></td>
                    <td><router-link :to="{name: 'companylicenses'}" class="btn btn-primary btn-sm action-btn">Company Licenses</router-link></td>
                    <td><router-link :to="{name: 'companystakeholders'}" class="btn btn-primary btn-sm action-btn">Company Stakeholders</router-link></td>
                    <td>
                        <span>
                            <router-link :to="{name: 'edit'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                            <button @click.prevent="deletecompany(companyInfo._id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
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
                companyInfos: [
                    { name: 'Bobs Hardware', address: '123 Rose Boulevard', mailAddress: 'test1', city: 'Houston', county: 'county1', ein: '1234', email: 'bob@bobshardware.com', locationName: 'test1', phoneNumber: '(123) 333-2255' },
                    { name: 'Toms Computer', address: '345 Adair Lane', mailAddress: 'test1', city: 'Austin', county: 'county2', ein: '3456', email: 'tom@tomscomputer.com', locationName: 'test1', phoneNumber: '(321) 111-4488' },
                    { name: 'Willows Bookstore', address: '555 Pond Terrace', mailAddress: 'test1', city: 'Dallas', county: 'county3', ein: '5678', email: 'willow@willowsbookstore.com', locationName: 'test1', phoneNumber: '(111) 888-6677' },
                    { name: 'Jennas Salon', address: '777 Priscilla Loop', mailAddress: 'test1', city: 'San Antonio', county: 'county4', ein: '7890', email: 'jenna@jennassalon.com', locationName: 'test1', phoneNumber: '(222) 999-5544' },
                    { name: 'Bobs Hardware', address: '123 Rose Boulevard', mailAddress: 'test1', city: 'Houston', county: 'county1', ein: '1234', email: 'bob@bobshardware.com', locationName: 'test1', phoneNumber: '(123) 333-2255' },
                    { name: 'Toms Computer', address: '345 Adair Lane', mailAddress: 'test1', city: 'Austin', county: 'county2', ein: '3456', email: 'tom@tomscomputer.com', locationName: 'test1', phoneNumber: '(321) 111-4488' },
                    { name: 'Willows Bookstore', address: '555 Pond Terrace', mailAddress: 'test1', city: 'Dallas', county: 'county3', ein: '5678', email: 'willow@willowsbookstore.com', locationName: 'test1', phoneNumber: '(111) 888-6677' },
                    { name: 'Jennas Salon', address: '777 Priscilla Loop', mailAddress: 'test1', city: 'San Antonio', county: 'county4', ein: '7890', email: 'jenna@jennassalon.com', locationName: 'test1', phoneNumber: '(222) 999-5544' },
                    { name: 'Bobs Hardware', address: '123 Rose Boulevard', mailAddress: 'test1', city: 'Houston', county: 'county1', ein: '1234', email: 'bob@bobshardware.com', locationName: 'test1', phoneNumber: '(123) 333-2255' },
                    { name: 'Toms Computer', address: '345 Adair Lane', mailAddress: 'test1', city: 'Austin', county: 'county2', ein: '3456', email: 'tom@tomscomputer.com', locationName: 'test1', phoneNumber: '(321) 111-4488' },
                    { name: 'Willows Bookstore', address: '555 Pond Terrace', mailAddress: 'test1', city: 'Dallas', county: 'county3', ein: '5678', email: 'willow@willowsbookstore.com', locationName: 'test1', phoneNumber: '(111) 888-6677' },
                    { name: 'Jennas Salon', address: '777 Priscilla Loop', mailAddress: 'test1', city: 'San Antonio', county: 'county4', ein: '7890', email: 'jenna@jennassalon.com', locationName: 'test1', phoneNumber: '(222) 999-5544' }
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