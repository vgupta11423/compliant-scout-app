<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
                    <th class="sticky-header">License Name</th>
                    <th class="sticky-header">License Cost</th>
                    <th class="sticky-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="licenses" v-for="license in Licenses" :key="license._id">
                    <td>{{ license.licenseName }}</td>
                    <td>{{ license.licenseCost }}</td>
                    <td>
                        <span>
                            <router-link :to="{name: 'edit'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                            <button @click.prevent="deletelicense(license._id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
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
                Licenses: [
                    { licenseName: 'Tobacco Permit', licenseCost: 100 },
                    { licenseName: 'Alcohol Permit', licenseCost: 120 },
                    { licenseName: 'Tobacco Permit', licenseCost: 100 },
                    { licenseName: 'Tobacco Permit', licenseCost: 100 }
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