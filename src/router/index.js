import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import CvPage from '../components/CvPage.vue'
import AssociationPage from '../components/AssociationPage.vue'
import ServicesPage from '../components/ServicesPage.vue'
import EsportPage from '../components/EsportPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/CV',
    name: 'CvPage',
    component: CvPage
  },
  {
    path: '/Association',
    name: 'AssociationPage',
    component: AssociationPage
  },
  {
    path: '/Services',
    name: 'ServicesPage',
    component: ServicesPage
  },
  {
    path: '/Esport',
    name: 'EsportPage',
    component: EsportPage
  }
  // Ajoutez d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

document.title = 'Maxime MOIROUD';

export default router