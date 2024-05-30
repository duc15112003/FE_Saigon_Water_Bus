import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Route/route.js';
import { DefaultLayout } from "./components/DefaulLayout/index.js";
import {AuthLayout} from "./components/Auth/auth";
function App() {
    return (
        <Router>
            <div className="">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout =route.path==='/login' || route.path==='/dang-ky'? AuthLayout: DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
