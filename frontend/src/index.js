import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './global.css';

// rotas
import routes from './routes';

// componentes
import HeaderGeral from './components/HeaderGeral';
import HeaderUser from './components/HeaderUser';
import Footer from './components/Footer';

// paginas
//geral
import HomeGeral from './pages/HomeGeral';
import HomeUser from './pages/HomeUser';
import About from './pages/About';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Services from './pages/Services';

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
                2: NotSet
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
                    2: NotSet
                  }}
                  exact
                ></PrivateRoute>
                
                <PrivateRoute
                  path={routes.productInfo}
                  components={{
                    0: ProductInfo,
                    1: ProductInfo,
                    2: NotSet
                  }}
                  exact
                ></PrivateRoute>
                
                <PrivateRoute
                  path={routes.services}
                  components={{
                    0: Services,
                    1: Services,
                    2: NotSet
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
