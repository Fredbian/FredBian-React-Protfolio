import React from 'react'
import { Route, Routes, Redirect, HashRouter } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

//include Name and Navigation component for all the pages
function Header() {
    return (
        <HashRouter>
            <div className="nav">
                <Navigation />
            </div>
            <Routes>
                <Route exact path="/" render={() => (<Redirect to="/about" />)} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </Routes>
        </HashRouter>
    )

}

export default Header