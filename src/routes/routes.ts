import { LazyExoticComponent, lazy } from "react";
import LazyPage1 from "../01-lazyload/pages/LazyPage1";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  component:  LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/"../01-lazyload/pages/LazyPage2"));
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/"../01-lazyload/pages/LazyPage1"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/"../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "lazy-1",
    to: "/lazy-1",
    component: Lazy1,
    name: "Lazy-1",
  },
  {
    path: "lazy-2",
    to: "/lazy-2",
    component: Lazy2,
    name: "Lazy-2",
  },
  {
    path: "lazy-3",
    to: "/lazy-3",
    component: Lazy3,
    name: "Lazy-3",
  },
];
