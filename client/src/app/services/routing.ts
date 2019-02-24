import createHistory from 'history/createBrowserHistory';

interface IRoutes {
  Root: string;
  signUp: string;
  signIn: string;
  dashboard: string;
}

export const routes: IRoutes = {
  Root: '/',
  signUp: '/signUp',
  signIn: '/signIn',
  dashboard: '/dashboard',
};

export const history = createHistory();
