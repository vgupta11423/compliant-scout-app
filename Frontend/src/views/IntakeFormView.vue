<template>
    <div class="row justify-content-center">
        <div class="col-md-7">
        <h3 class="text-center">Client Intake Form</h3>
            <form @submit.prevent="handleSubmitForm">
                <form class="row g-3">
                    <!-- Basic Information of the Business Section -->
                    <div class="formsection">
                        <h4>Basic Information</h4>
                    </div>
                    <div class="form-group required">
                        <label><strong>Company Name</strong></label>
                        <input type="text" class="form-control" required>
                    </div>
                    <br>
                    <div class="form-group required">
                        <label><strong>Location Name(DBA)</strong></label>
                        <input type="text" class="form-control" required>
                    </div>
                    <br>
                    <div class="form-group required">
                        <label><strong>Business Email Address</strong></label>
                        <input type="text" class="form-control" required>
                    </div>
                    <br>
                    <div class="col-12">
                        <div class="form-group required">
                            <label><strong>Location Address</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group required">
                            <label><strong>Location City</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group required">
                            <label><strong>Location County</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="form-group required">
                        <label><strong>Mailing Address</strong></label>
                        <input type="text" class="form-control" required>
                    </div>
                    <br>
                    <div class="col-md-6">
                        <div class="form-group required">
                            <label><strong>Business Phone Number</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-6">
                        <div class="form-group required">
                            <label><strong>Alcohol Permit</strong></label>
                            <select class="form-select" required>
                                <option selected disabled value="">Select Alcohol Permit Type</option>
                                <option>P</option>
                                <option>Q</option>
                                <option>BQ</option>
                                <option>BG</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <!-- Stakeholder Section -->
                    <div class="formsection">
                        <h4>Stakeholder Information</h4>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group required">
                            <label><strong>First Name</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-5">
                        <div class="form-group required">
                            <label><strong>Last Name</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-2">
                        <div class="form-group required">
                            <label><strong>Title</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-8">
                        <div class="form-group required">
                            <label><strong>Place of Birth</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-4">
                        <div class="form-group required">
                            <label><strong>Date of Birth</strong></label>
                            <input type="date" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="form-group required">
                        <label><strong>Address</strong></label>
                        <input type="text" class="form-control" required>
                    </div>
                    <br>
                    <div class="col-md-8">
                        <div class="form-group required">
                            <label><strong>Email</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-4">
                        <div class="form-group required">
                            <label><strong>Percentage Ownership</strong></label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <div class="col-md-6">
                        <div class="form-group required">
                            <label><strong>Spouse First Name</strong></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <br>
                    <div class="col-md-6">
                        <div class="form-group required">
                            <label><strong>Spouse Last Name</strong></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <br>
                    <!-- Adding More Stakeholders -->
                    <div class="col-12">
                        <button @click="addStakeholder" class="btn btn-primary">Add Stakeholder</button>
                        <div class="previous"
                            v-for="(stakeholder, counter) in stakeholders"
                            v-bind:key="counter">
                            
                            <span @click="deleteStakeholder(counter)">x</span>
                            <div class="row g-3">
                            <div class="col-md-5">
                                <div class="form-group required">
                                    <label><strong>First Name</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-5">
                                <div class="form-group required">
                                    <label><strong>Last Name</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-2">
                                <div class="form-group required">
                                    <label><strong>Title</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-8">
                                <div class="form-group required">
                                    <label><strong>Place of Birth</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-4">
                                <div class="form-group required">
                                    <label><strong>Date of Birth</strong></label>
                                    <input type="date" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="form-group required">
                                <label><strong>Address</strong></label>
                                <input type="text" class="form-control" required>
                            </div>
                            <br>
                            <div class="col-md-8">
                                <div class="form-group required">
                                    <label><strong>Email</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-4">
                                <div class="form-group required">
                                    <label><strong>Percentage Ownership</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label><strong>Spouse First Name</strong></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label><strong>Spouse Last Name</strong></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <!-- Business Information Section -->
                    <div class="formsection">
                        <h4>Business Information</h4>
                    </div>
                    <div class="form-group required">
                        <label><strong>First Date of Operation</strong></label>
                        <input type="date" class="form-control" required>
                    </div>
                    <br>
                    <div class="form-group required">
                        <label><strong>Lease</strong></label>
                        <select v-model="leaseOption" class="form-select" required>
                            <option :value="null" selected disabled>Operating Under a Lease?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div v-show="leaseOption === 'yes'">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-group required">
                                    <label><strong>Lease Expiration Date</strong></label>
                                    <input type="date" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="col-md-6">
                                <div class="form-group required">
                                    <label><strong>Monthly Rent Amount</strong></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="col-md-8">
                                <div class="form-group required">
                                    <label><strong>Property Owner Company Name</strong></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="col-md-4">
                                <div class="form-group required">
                                    <label><strong>Property Owner EIN</strong></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="leaseOption === 'no'">
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div class="form-group required">
                                    <label><strong>EIN</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-4">
                                <div class="form-group required">
                                    <label><strong>Purchase Price of Business</strong></label>
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>
                            <br>
                            <div class="col-md-4">
                                <div class="form-group required">
                                    <label><strong>Purchase Date of Business</strong></label>
                                    <input type="date" class="form-control" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-success mt-3">Submit</button>
                    </div>
                </form>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                leaseOption: null,
                stakeholders: []
            }
        },
        methods : {
            addStakeholder(){
                this.stakeholders.push({
                })
            },
            deleteStakeholder(counter){
                this.stakeholders.splice(counter,1);
            }
        }
    }
</script>

<style>
    .formsection {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 2px;
    }
    .col-md-7 {
        border: 2px solid;
        border-radius: 10px;
        border-spacing: 1em 0.5em;
        padding: 1em 0 1.5em 0;
    }
    span {
        width: 30px;
        float: right;
        cursor: pointer;
        text-align: right;
        padding-right: 7px;
    }
    span:hover {
        color: brown;
    }
    .previous {
        border: 1.5px solid rgba(35, 35, 35, 0.5);
        border-radius: 4px;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>
