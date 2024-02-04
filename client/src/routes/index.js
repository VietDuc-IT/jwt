import config from '~/config';

import { SidebarOnly } from '../Layouts';

import Home from '~/pages/Public/Home';
import Property from '~/pages/Public/Property';
import About from '~/pages/Public/About';
import Contact from '~/pages/Public/Contact';
import Login from '../pages/Public/Login';
import Register from '~/pages/Public/Register';

import HomeAdmin from '~/pages/System/Home';

//import Upload from './../pages/Upload';
import Search from '~/pages/Public/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.property, component: Property, layout: SidebarOnly },
    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },

    { path: config.routes.homeAdmin, component: HomeAdmin },

    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },

    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
