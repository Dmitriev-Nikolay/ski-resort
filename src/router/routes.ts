import { Home, Instructors, Login, SkiPasses, Visitors } from "../components/pages";

export type RouteProps = {
  path?: string,
  component: React.ComponentType,
  exact?: boolean,
  isProtected?: boolean,
  children?: React.ReactNode,
};

export const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    isProtected: true,
  },
  {
    path: '/coach',
    component: Instructors,
    exact: true,
    isProtected: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    isProtected: false,
  },
  {
    path: '/skipass',
    component: SkiPasses,
    exact: true,
    isProtected: true,
  },
  {
    path: '/visitor',
    component: Visitors,
    exact: true,
    isProtected: true,
  },
  // {
  //   path: '',
  //   component: NotFound,
  // },
];