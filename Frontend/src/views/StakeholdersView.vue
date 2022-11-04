<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
                    <th class="sticky-header">ID</th>
                    <th class="sticky-header">First Name</th>
                    <th class="sticky-header">Last Name</th>
                    <th class="sticky-header">Title</th>
                    <th class="sticky-header">Date of Birth</th>
                    <th class="sticky-header">Place of Birth</th>
                    <th class="sticky-header">Address</th>
                    <th class="sticky-header">Email</th>
                    <!-- <th class="sticky-header">Percent Ownership</th> -->
                    <th class="sticky-header">Spouse First Name</th>
                    <th class="sticky-header">Spouse Last Name</th>
                    <!-- <th class="sticky-header">Loan Invested</th> -->
                    <th class="sticky-header">Personal Funds Invested</th>
                    <th class="sticky-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="stakeholders" v-for="stakeholder in stakeholders" :key="stakeholder._id">
                    <td>{{ stakeholder.s_id }}</td>
                    <td>{{ stakeholder.s_firstName }}</td>
                    <td>{{ stakeholder.s_lastName }}</td>
                    <td>{{ stakeholder.s_title }}</td>
                    <td>{{ stakeholder.s_dob }}</td>
                    <td>{{ stakeholder.s_place_of_birth }}</td>
                    <td>{{ stakeholder.s_address }}</td>
                    <td>{{ stakeholder.s_email }}</td>
                    <!-- <td>{{ stakeholder.percentOwnership }}</td> -->
                    <td>{{ stakeholder.s_spouse_firstName }}</td>
                    <td>{{ stakeholder.s_spouse_lastName }}</td>
                    <!-- <td>{{ stakeholder.loanInvested }}</td> -->
                    <td>{{ stakeholder.s_personal_funds_invested }}</td>
                    <td>
                        <span>
                            <router-link :to="{name: 'EditStakeholderComp'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                            <button @click.prevent="deleteStakeholder(stakeholder.s_id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                stakeholders: []
            }
        },
        created() {
            let apiURL = 'http://localhost:8080/api/stakeholders';
            axios.get(apiURL).then(res => {
                this.stakeholders = res.data;
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            deleteStakeholder(s_id) {
                let apiURL = `http://localhost:8080/api/stakeholders/${s_id}`
                let indexOfArrayItem = this.stakeholders.findIndex(i => i.s_id === s_id)

                if (window.confirm("Do you really want to delete?")) {
                    // Call to delete the stakeholder using the API
                    axios.delete(apiURL).then(() => {
                        this.stakeholders.splice(indexOfArrayItem, 1)
                    }).catch(error => {
                        console.log(error)
                    })
                }
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