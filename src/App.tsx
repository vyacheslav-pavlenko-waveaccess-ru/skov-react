import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import { MainComponent } from './components/main/main.component';
import './index.css';

function App(): JSX.Element {
    return (
        <>
            <div className={`${styles.app} center`}>App component</div>
            <Router>
                <Switch>
                    <Route path="/">
                        <MainComponent />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
