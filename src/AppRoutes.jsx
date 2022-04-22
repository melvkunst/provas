import{ BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage  from './pages/loginPage';
import ProfPage  from './pages/profPage';
import AlunoPage from "./pages/alunoPage";

import AuthProvider from "./contexts/auth";


const AppRoutes = () =>{
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<LoginPage/>} />
                    <Route exact path="/aluno" element={<AlunoPage/>} />
                    <Route exact path="/prof" element={<ProfPage/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;