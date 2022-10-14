import HomePage from '~/pages/Home'
import ContactPage from '~/pages/Contact'
import AboutPage from '~/pages/About'


const publicRoutes = [
    {
        path: '/',
        element: <HomePage />,
        layout: 'defaultLayout',
    },
    {
        path: 'contact',
        element: <ContactPage />,
        layout: 'testLayout'
    },
    {
        path: 'about',
        element: <AboutPage />,
        layout: null
    },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }