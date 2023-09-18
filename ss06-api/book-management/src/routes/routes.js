import config from "../config";
import Create from "../pages/Create";
import List from "../pages/List";
import Update from "../pages/Update";

const publicRoutes = [
    {
        path: config.routes.list,
        component: List,
    },
    {
        path: config.routes.create,
        component: Create,
    },
    {
        path: config.routes.update,
        component: Update,
    },
];

export { publicRoutes };
