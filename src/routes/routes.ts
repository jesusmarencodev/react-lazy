import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
interface Route {
    to:string;
    path:string;
    name:string;
    component :  () => JSX.Element;
}

export const routes:Route[] = [
    {
        path: 'lazy-1',
        to:"/lazy-1",
        component: LazyPage1,
        name : 'Lazy-1' 
    },
    {
        path: 'lazy-2',
        to:"/lazy-2",
        component: LazyPage2,
        name : 'Lazy-2' 
    },
    {
        path: 'lazy-3',
        to:"/lazy-3",
        component: LazyPage3,
        name : 'Lazy-3' 
    },
]