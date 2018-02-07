import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import TableList from 'src/components/Dashboard/Views/TableList.vue'

const routes = [
  {
    path: '/',
    component: TableList,
  },
  { path: '*', component: NotFound }
]
export default routes
