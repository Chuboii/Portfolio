import { Routes,Route } from "react-router-dom";
import Tab1 from "../components/tabs/tab1/Tab1";
import Tab2 from "../components/tabs/tab2/Tab2";
import Tab3 from "../components/tabs/tab3/Tab3";
import LandingPage from "../pages/LandingPage";


export default function RenderRoutes() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage/> } />
                <Route path="/tab1" element={<Tab1 />} />
                <Route path="/tab2" element={<Tab2 />} />
                <Route path="/tab3" element={<Tab3/> } />
        </Routes>
            
        
        </>
    )
}