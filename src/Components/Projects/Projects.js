import React, { Component } from 'react'
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <main id='projects'>
                <section id='mfj'>
                    <a href='https://my-fit-journal.now.sh/' target='_blank' className='project_title'> My Fit Journal </a>
                    <img className='project_screenshot' src={require('../../images/mfj.jpg')} alt='' />
                    <div className='repo_links'>
                        <a href='https://github.com/cfloyd252/My-Fit-Journal-Client' target='_blank' className='repo_link'> Client Repo </a> || <a href='https://github.com/cfloyd252/my-fit-journal-api' target='_blank' className='repo_link'> API Repo </a>
                    </div>
                    <p className='description'>
                        My Fit Journal is a web application that allows the the user to track their fitness progress by logging entries of different types 
                        of fitness data. Currently there are logs for water consumption, user's weight, and exercises completed. In future updates, the user will 
                        also be able to log meals and create a list of custom exercise names.

                    </p>
                    <div className='tech_used'>
                        <img src={require('../../images/icons/html.png')} alt='HTML 5 logo'/>
                        <img src={require('../../images/icons/js.png')} alt='Javascript logo'/>
                        <img src={require('../../images/icons/css.png')} alt='CSS 5 logo'/>
                        <img src={require('../../images/icons/postgresql.png')} alt='Postgres logo'/>
                        <img src={require('../../images/icons/node.png')} alt='Node logo'/>
                    </div>
                </section>
                <section id='habla'>
                    <a href='https://spaced-repitition-app.now.sh/' target='_blank' className='project_title'> Habla </a>
                    <img className='project_screenshot' src={require('../../images/habla.jpg')} alt='' />
                    <div className='repo_links'>
                        <a href='https://github.com/thinkful-ei-leopard/spaced-repitition-jose-christopher-client' target='_blank' className='repo_link'> Client Repo </a> || <a href='https://github.com/JozyL27/spaced-repetition-api' target='_blank' className='repo_link'> API Repo </a>
                    </div>
                    <p className='description'>
                        Habla is an application that assists the user in learning spanish. This is done by having a list of spanish words the user 
                        translates into English using the spaced repetition technique. Meaning words that are harder to translate appear more often in
                        the front of the list. Finally, the user can keep track of the amount of times they answered a word correctly or incorrectly.
                    </p>
                    <div className='tech_used'>
                        <img src={require('../../images/icons/html.png')} alt='HTML 5 logo'/>
                        <img src={require('../../images/icons/js.png')} alt='Javascript logo'/>
                        <img src={require('../../images/icons/css.png')} alt='CSS 5 logo'/>
                        <img src={require('../../images/icons/postgresql.png')} alt='Postgres logo'/>
                        <img src={require('../../images/icons/node.png')} alt='Node logo'/>
                    </div>    
                </section>
                <section id='cos'>
                    <a href='https://cup-of-sugar.pengin-san.now.sh/' target='_blank' className='project_title'> Cup of Sugar </a>
                    <img className='project_screenshot' src={require('../../images/cos.jpg')} alt='' />
                    <div className='repo_links'>
                        <a href='' target='_blank' className='repo_link'> Client Repo </a> || <a href='' target='_blank' className='repo_link'> API Repo </a>
                    </div>
                    <p className='description'>
                        Cup of Sugar is a localized, community-oriented application that aims to bring neighbors closer together by fostering connections 
                        based on mutual aid. Users can post offers and requests to a public bulletin board, where other users can respond by post comments 
                        or messaging other users privately.
                    </p>
                    <div className='tech_used'>
                        <img src={require('../../images/icons/html.png')} alt='HTML 5 logo'/>
                        <img src={require('../../images/icons/js.png')} alt='Javascript logo'/>
                        <img src={require('../../images/icons/css.png')} alt='CSS 5 logo'/>
                        <img src={require('../../images/icons/postgresql.png')} alt='Postgres logo'/>
                        <img src={require('../../images/icons/node.png')} alt='Node logo'/>
                        <img src={require('../../images/icons/sass.png')} alt='Sass logo'/>
                    </div>    
                </section>
            </main>
        )
    }
}

export default Projects
