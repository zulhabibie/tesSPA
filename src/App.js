import logo from './logo.svg';
import 'assets/css/style.css';
import Homepage from 'scenes/Homepage';
import React, {Component} from 'react';
import {BrowserRouter, Switch , Route, Link} from 'react-router-dom';

function Home(){
    return(
        <h2>Home</h2>
    )
}

function ListView(){
    return(
        <React.Fragment>
            {/* reack fragment berguna untuk membut return yang tanpa butuh div */}
            <h2>Semua User</h2>
                <ul>
                    <Link to='/user/hilman'>Hilman</Link>
                    <br/>
                    <Link to='/user/gudi'>Gudi</Link>

                </ul>
        </React.Fragment>
    )
}

function DetailView({match}){
    return(
    <h2>Ini adalah halaman {match.params.name}</h2>
    )
}

function NoMacth(){
    return(
        <h2>404, Halaman Tidak Ada</h2>
    )
}


class App extends Component{


  render(){
  return (
    <BrowserRouter>
        <div className="App">
            <div className="container mt-2">
                <nav>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/user'>User</Link></li>
                </nav>

                <main>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/user' exact component={ListView}/>
                        <Route path='/user/:name' exact component={DetailView}/>
                        <Route component={NoMacth}/>
                    </Switch>
                </main>
            </div>
        </div>
    </BrowserRouter>
  );
}
}

export default App;
