import React, { Component } from 'react'
import './Bio.css'

export class Bio extends Component {
    render() {
        return (
            <main id='bio'>
                <img id='mountains' src={require('../../images/mountains.jpg')} alt='Mountains in Superior, Arizona'/>
                <p>
                    Growing up in the mountainous small town of Superior, AZ with big aspirations to being able to call 
                    myself a father and web developer has been quite a journey. It all 
                    started with going to math camp. Well... it was more of a math and science 
                    honors program that high school students attended during their summer 
                    break. That’s what sparked my interest in the STEM field. My first 
                    experience with this new found passion was becoming the head programmer 
                    for my high school robotics team. I would continue to hold that title for the next 3 years.
                    From there, I continued to take Computer Science college courses while 
                    raising and providing for my son. Any free time I had was 
                    spent either going on runs or playing video games on my custom built 
                    computer. After spending years in customer service related jobs and now 
                    that my boy is becoming more independent, I finally found the time and 
                    opportunity to rekindle my passion for coding. For the past few months, I've been working
                    closely with my fellow cohort members of the Thinkful Engineering Program and an
                    experienced mentor to develop websites on both the frontend and backend. Cannot wait
                    to continue this journey with a team at a company that I admire.
                </p>
                <div id='img_container'>
                    <img src={require('../../images/Julius&I.jpg')} />
                    <img src={require('../../images/usb.jpg')} />
                    <img src={require('../../images/superman.jpg')} />
                    <img src={require('../../images/lake.jpg')} />
                    <img src={require('../../images/run.jpeg')} />
                    <img src={require('../../images/robotics_team.jpg')} />
                </div>
            </main>
        )
    }
}

export default Bio
