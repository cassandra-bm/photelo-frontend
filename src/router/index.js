import { createRouter, createWebHistory } from 'vue-router'

import GalleryView from '../views/GalleryView.vue'
import Ping from '@/components/Ping.vue'
import SubmissionView from '@/views/SubmissionView.vue'
import VotingView from '@/views/VotingView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ping',
      name: 'ping',
      component: Ping
    },
    {path: '/gallery',
      name: 'galleryview',
      component: GalleryView
    },
    {path: '/submission',
      name: 'submissionview',
      component: SubmissionView
    },
    {path: '/voting',
      name: 'votingview',
      component: VotingView
    }
  ],
})

export default router
