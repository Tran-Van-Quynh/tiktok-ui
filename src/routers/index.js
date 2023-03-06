// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Follwing';
import profile from '~/Pages/profile';
import Upload from '~/Pages/Upload';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
