import config from '~/config';

import { SidebarOnly } from '../Layouts';

import Home from './../pages/Home';
import Property from '../pages/Property';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '~/pages/Register';

import Upload from './../pages/Upload';
import Search from './../pages/Search';
//import Search from "./components/pages/Search";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.property, component: Property, layout: SidebarOnly },
    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },

    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },

    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
