import React, { Component } from 'react';
import styles from './App.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <header className={styles.Header}>

            <h1 >VANNA OH!</h1>

            <nav >
              <NavLink to="/" exact activeClassName={styles.Selected} className={styles.NavLink}>HOME</NavLink>
              <NavLink to="/bio" exact activeClassName={styles.Selected} className={styles.NavLink}>BIO</NavLink>
              <NavLink to="/music" exact activeClassName={styles.Selected} className={styles.NavLink}>MUSIC</NavLink>
            </nav>
          </header>
          <div className={styles.PageArea}>
            <Route path="/bio" exact render={()=>(<h1>BIO</h1>)}></Route>
            <Route path="/music" exact render={()=>(
              <div>MUSIC</div>
            )}></Route>
            <Route path="/" exact render={(props)=>(
              <div>HOME STUFF</div>
            )}></Route>

          </div>
        </div>

      </BrowserRouter>

    );

  }

}

export default App;
