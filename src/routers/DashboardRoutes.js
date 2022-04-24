
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { HeroesHome } from '../components/hero/HeroesHome'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/hero/:heroId" element={<HeroScreen />} />

                    <Route path="/" element={<HeroesHome />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Routes>
            </div>
        </>
    )
}
