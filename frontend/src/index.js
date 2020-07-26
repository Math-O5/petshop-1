import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import axios from 'axios';

// styles
import './global.css';

// rotas
import routes from './routes';

// componentes
import HeaderGeral from './components/HeaderGeral';
import HeaderUser from './components/HeaderUser';
import HeaderAdmin from './components/HeaderAdmin';
import Footer from './components/Footer';

// paginas
//geral
import HomeGeral from './pages/HomeGeral';
import HomeUser from './pages/HomeUser';
import About from './pages/About';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Services from './pages/Services';
import ServiceInfo from './pages/ServiceInfo';
import Profile from './pages/Profile';
import Pets from './pages/Pets';
import Cart from './pages/Cart';
//admin
import AdminAdmins from './pages/AdminAdmins';
import AdminAdminsInfo from './pages/AdminAdminsInfo';
import AdminClients from './pages/AdminClients';
import AdminClientsInfo from './pages/AdminClientsInfo';
import AdminProducts from './pages/AdminProducts';
import AdminProductsInfo from './pages/AdminProductsInfo';
import AdminProfit from './pages/AdminProfit';
import AdminServices from './pages/AdminServices';
import AdminServicesInfo from './pages/AdminServicesInfo';


const baseURL = 'http://localhost:3000';

axios.defaults.baseURL = baseURL;

// axios.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Do something with response error
//     if (
//       error.response &&
//       error.response.status &&
//       error.response.status === 401
//     ) {
//       Auth.logOut(true);
//       window.location.href = '/login';
//     }

//     return Promise.reject(error);
//   }
// );

export const PrivateRoute = ({ indicator, components, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        // const userData = Auth.isAuthenticated();
        const indicator = parseInt(1); // mudar dps
        // if (!userData || !components[indicator]) {
        //   return (
        //     <Redirect
        //       to={{ pathname: '/login', state: { from: props.location } }}
        //     />
        //   );
        // }
  
        const Component = components[indicator];
        return <Component {...props} />;
      }}
    />
);

const NotSet = () => <></>;

// Geral -> indicator = 0
// Customer / User -> indicator = 1
// Admin -> indicator = 2

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <PrivateRoute
                path={[
                  routes.home,
                  routes.about
                ]}
                components={{
                0: HeaderGeral,
                1: HeaderUser,
                2: HeaderAdmin
                }}
            ></PrivateRoute>

            <Switch>
                <PrivateRoute
                  path={routes.home}
                  components={{
                    0: HomeGeral,
                    1: HomeUser,
                    2: NotSet
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.about}
                  components={{
                    0: About,
                    1: About,
                    2: About
                  }}
                  exact
                ></PrivateRoute>
                
                <PrivateRoute
                  path={routes.products}
                  components={{
                    0: Products,
                    1: Products,
                    2: AdminProducts
                  }}
                  exact
                ></PrivateRoute>
                
                <PrivateRoute
                  path={routes.productInfo}
                  components={{
                    0: ProductInfo,
                    1: ProductInfo,
                    2: AdminProductsInfo
                  }}
                  exact
                ></PrivateRoute>
                
                <PrivateRoute
                  path={routes.services}
                  components={{
                    0: Services,
                    1: Services,
                    2: AdminServices
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.servicesInfo}
                  components={{
                    0: ServiceInfo,
                    1: ServiceInfo,
                    2: AdminServicesInfo
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.profile}
                  components={{
                    0: NotSet,
                    1: Profile,
                    2: NotSet
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.pets}
                  components={{
                    0: NotSet,
                    1: Pets,
                    2: NotSet
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.cart}
                  components={{
                    0: NotSet,
                    1: Cart,
                    2: NotSet
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.clients}
                  components={{
                    0: NotSet,
                    1: NotSet,
                    2: AdminClients
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.clientsInfo}
                  components={{
                    0: NotSet,
                    1: NotSet,
                    2: AdminClientsInfo
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.admins}
                  components={{
                    0: NotSet,
                    1: NotSet,
                    2: AdminAdmins
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.adminsInfo}
                  components={{
                    0: NotSet,
                    1: NotSet,
                    2: AdminAdminsInfo
                  }}
                  exact
                ></PrivateRoute>

                <PrivateRoute
                  path={routes.profit}
                  components={{
                    0: NotSet,
                    1: NotSet,
                    2: AdminProfit
                  }}
                  exact
                ></PrivateRoute>

            </Switch>

            <PrivateRoute
                path={[
                  routes.home,
                  routes.about
                ]}
                components={{
                  0: Footer,
                  1: Footer,
                  2: Footer
                }}
            ></PrivateRoute>
        </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
