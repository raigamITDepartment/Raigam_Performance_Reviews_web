import { lazy } from 'react'
import authRoute from './authRoute'

import MasterRoute from './MasterRoute'

import dashboardsRoute from './dashboardsRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [




    
    ...dashboardsRoute,

    ... MasterRoute,
  


  
  
]
