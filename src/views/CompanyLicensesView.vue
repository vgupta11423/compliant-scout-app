<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
                    <th class="sticky-header">License Status</th>
                    <th class="sticky-header">License Status Date</th>
                    <th class="sticky-header">License Info</th>
                    <th class="sticky-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="companylicenses" v-for="companyLicense in companyLicenses" :key="companyLicense._id">
                    <td>{{ companyLicense.licenseStatus }}</td>
                    <td>{{ companyLicense.licenseStatusDate }}</td>
                    <td><router-link :to="{name: 'licenses'}" class="btn btn-primary btn-sm action-btn">License Info</router-link></td>
                    <td>
                        <span>
                            <router-link :to="{name: 'edit'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                            <button @click.prevent="deletecompanyLicense(companyLicense._id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
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
                companyLicenses: [
                    { licenseStatus: 'Expired', licenseStatusDate: '2022/05/11' },
                    { licenseStatus: 'Expired', licenseStatusDate: '2022/05/11' }
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