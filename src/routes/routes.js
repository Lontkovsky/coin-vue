
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import TableList from 'src/components/Dashboard/Views/TableList.vue'
import News from 'src/components/Dashboard/Views/News.vue'



const routes = [
  {
    path: '/',
    component: TableList,
  },
  {
    path: '/news',
    component: News,
  },

  { path: '*', component: NotFound }
]
export default routes
