import { DefaultLayout, LayoutTest } from "~/components/layouts";

const publicLayouts = [
    {
        name: 'defaultLayout',
        path: '/',
        element: <DefaultLayout />
    },
    {
        name: 'testLayout',
        path: '/test',
        element: <LayoutTest />
    },
    {
        name: null,
    }
]

const privateLayout = [

]

export { publicLayouts, privateLayout }