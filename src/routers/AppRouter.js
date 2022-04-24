
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path="hero-app/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                    } 
                />
                <Route path='hero-app/*' element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}
