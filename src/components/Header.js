//include Name and Navigation component for all the pages
import React, { useState } from 'react'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

function Header() {
    const [page, navigator] = useState('About')

    // use switch statment to operate the navbar
    const renderPage = () => {
        switch (page) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Portfolio />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />

            default:
                return <About />
        }
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" rel="noreferrer" target="_blank" href="https://github.com/Fredbian?tab=repositories">
                        <span className="content is-large">Fred Bian</span>
                    </a>
                </div>
            </nav>
            {/* Pass the state value and the setter as props to NavTabs */}
            <Nav page={page} navigator={navigator} />
            {/* Call the renderPage function passing in the currentPage */}
            <section>
                <div>{renderPage(page)}</div>
            </section>
        </div>
    )

}

export default Header