import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './styles/reset.scss';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Todo from './pages/Todo';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Comments from './pages/Comments';
import Weather from './pages/Weather';
import Buttons from './pages/Buttons';

const routes = [
    { to: '/', el: <Home /> },
    { to: '/counter', el: <Counter /> },
    { to: '/todo', el: <Todo /> },
    { to: '/profile', el: <Profile /> },
    { to: '/products', el: <Products /> },
    { to: '/comments', el: <Comments /> },
    { to: '/Counter', el: <Counter /> },
    { to: '/weather', el: <Weather /> },
    { to: '/buttons', el: <Buttons /> },
];

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Routes>
                    {routes.map((item, index) => {
                        if (item.to == '/')
                            return <Route index key={index} path={item.to} element={item.el} />;
                        return <Route key={index} path={item.to} element={item.el} />;
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
