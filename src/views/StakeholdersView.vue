<template>
    <div class="row justify-content-center">
        <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="table-dark">
                    <th class="sticky-header">First Name</th>
                    <th class="sticky-header">Last Name</th>
                    <th class="sticky-header">Title</th>
                    <th class="sticky-header">Date of Birth</th>
                    <th class="sticky-header">Place of Birth</th>
                    <th class="sticky-header">Address</th>
                    <th class="sticky-header">Email</th>
                    <th class="sticky-header">Percent Ownership</th>
                    <th class="sticky-header">Spouse First Name</th>
                    <th class="sticky-header">Spouse Last Name</th>
                    <th class="sticky-header">Loan Invested</th>
                    <th class="sticky-header">Personal Funds Invested</th>
                    <th class="sticky-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="stakeholders" v-for="stakeholder in stakeholders" :key="stakeholder._id">
                    <td>{{ stakeholder.firstName }}</td>
                    <td>{{ stakeholder.lastName }}</td>
                    <td>{{ stakeholder.title }}</td>
                    <td>{{ stakeholder.dob }}</td>
                    <td>{{ stakeholder.placeOfBirth }}</td>
                    <td>{{ stakeholder.address }}</td>
                    <td>{{ stakeholder.email }}</td>
                    <td>{{ stakeholder.percentOwnership }}</td>
                    <td>{{ stakeholder.spouseFirstName }}</td>
                    <td>{{ stakeholder.spouseLastName }}</td>
                    <td>{{ stakeholder.loanInvested }}</td>
                    <td>{{ stakeholder.personalFundsInvested }}</td>
                    <td>
                        <span>
                            <router-link :to="{name: 'edit'}" class="btn btn-warning btn-sm action-btn">Edit</router-link>
                            <button @click.prevent="deletestakeholder(stakeholder._id)" class="btn btn-danger mx-2 btn-sm action-btn">Delete</button>
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
                stakeholders: [
                    { firstName: 'John', lastName: 'Doe', title: 'Sr. Manager', dob: '1988/04/19', placeOfBirth: 'Texas, USA', address: '5454 River Lane', email: 'john@johndoe.com', percentOwnership: '9%', spouseFirstName: 'Jane', spouseLastName: 'Doe', loanInvested: 1000, personalFundsInvested: 500 }
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