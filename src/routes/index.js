import HomePage from "../views/pages/HomePage"
import UploadPage from "../views/pages/UploadPage"

const routes = [
    {
        path: 'upload',
        component: <UploadPage />
    },
    {
        path: '/',
        component: <HomePage />
    }
]

export default routes