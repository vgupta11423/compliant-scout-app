import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/LoginView.vue'
import CompanyView from '../views/CompanyView.vue'
import CompanyBioLeasedView from '../views/CompanyBioLeasedView.vue'
import CompanyBioOwnedView from '../views/CompanyBioOwnedView.vue'
import CompanyLicensesView from '../views/CompanyLicensesView.vue'
import StakeholdersView from '../views/StakeholdersView.vue'
import LicensesView from '../views/LicensesView.vue'

import EditCompanyComp from '../components/EditCompanyComp.vue'
import EditStakeholderComp from '../components/EditStakeholderComp.vue'
import EditCompanyLicensesComp from '../components/EditCompanyLicensesComp.vue'
import EditLicenseComp from '../components/EditLicenseComp.vue'
import EditCompanyBioComp from '../components/EditCompanyBioComp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/login',
        name: 'login',
        component: Login
      }, 
      {
        path: '/companies',
        name: 'companyview',
        component: CompanyView
      },
      {
        path: '/CompanyBioLeasedView',
        name: 'CompanyBioLeasedView',
        component: CompanyBioLeasedView
      },
      {
        path: '/CompanyBioOwnedView',
        name: 'CompanyBioOwnedView',
        component: CompanyBioOwnedView
      },
      {
        path: '/CompanyLicensesView',
        name: 'CompanyLicensesView',
        component: CompanyLicensesView
      },
      {
        path: '/StakeholdersView/:c_id',
        name: 'StakeholdersView',
        component: StakeholdersView
      },
      {
        path: '/LicensesView',
        name: 'LicensesView',
        component: LicensesView
      },
      {
        path: '/EditCompany',
        name: 'EditCompanyComp',
        component: EditCompanyComp
      },
      {
        path: '/EditStakeholder/:s_id',
        name: 'edit-stakeholder',
        component: EditStakeholderComp
      },
      {
        path: '/EditCompanyLicenses',
        name: 'EditCompanyLicensesComp',
        component: EditCompanyLicensesComp
      },
      {
        path: '/EditLicense',
        name: 'EditLicenseComp',
        component: EditLicenseComp
      },
      {
        path: '/EditCompanyBio',
        name: 'EditCompanyBio',
        component: EditCompanyBioComp
      }

    ]
  })

export default router