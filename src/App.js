import React, { Component } from 'react';
import styles from './App.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <header className={styles.Header}>

            <h1 >VANNA OH!</h1>

            <nav >
              <NavLink 
                to="/" 
                exact 
                activeClassName={styles.Selected} 
                className={styles.NavLink}>HOME</NavLink>
              <NavLink 
                to="/bio" 
                exact 
                activeClassName={styles.Selected} 
                className={styles.NavLink}>BIO</NavLink>
              <NavLink 
                to="/music" 
                exact 
                activeClassName={styles.Selected} 
                className={styles.NavLink}>MUSIC</NavLink>
            </nav>
          </header>
          <div className={styles.PageArea}>
            <Route 
              path="/bio" 
              exact 
              render={()=>(<div>BIO</div>)}></Route>

            <Route 
              path="/music" 
              exact 
              render={()=>(
              <div>MUSIC</div>
            )}></Route>

            <Route 
              path="/" 
              exact 
              render={(props)=>(
              <HomePage/>
            )}></Route>
          </div>
        </div>

      </BrowserRouter>

    );

  }

}

export default App;
