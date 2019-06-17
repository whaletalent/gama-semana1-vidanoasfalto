import React, { Component } from 'react'
import Form from '../components/Form.js'
import './Feed.css'

class Feed extends Component {
    render(){
        return (
            <article key="articles">
                <header>
                    <section id="article-list">
                        <div className="article-info">
                            <span>Título do artigo</span>
                        </div>
                    </section>
                </header>
                <div className="article-content">
                    <p>Lorem ipsum dolor 
                        sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>
                </div>
            </article>
        )
    }
}

export default Feed