import View from './../pages/View'
import Upload from './../pages/Upload'

export default [
    {
        path: '/',
        component: View,
        exact: true
    },
    {
        path: '/Upload',
        component: Upload
    },
   
]