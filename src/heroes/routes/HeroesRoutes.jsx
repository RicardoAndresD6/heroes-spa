import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DC, Heroe, Marvel, Search } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<DC />} />
                    <Route path="search" element={ <Search/> } />
                    <Route path="heroe/:id" element={ <Heroe/> }/>
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>

        </>
    )
}
