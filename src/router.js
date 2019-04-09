import React from 'react'
import { HashRouter ,Route ,Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Common from './common'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/ui/nomatch'
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabes from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import LoginForm from './pages/form/login';
import RegisterForm from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order';
export default class Router extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notification}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route path="/admin/ui/tabs" component={Tabes}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                <Route path="/admin/form/login" component={LoginForm}></Route>
                                <Route path="/admin/form/reg" component={RegisterForm}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/city" component={City}></Route>
                                <Route path="/admin/order" component={Order}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                            
                        </Admin>                        
                        }/>
                    <Route path="/common" render={()=>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={Login}/>
                        </Common>  
                    }/>
                </App>
            </HashRouter>
        )
    }
}


