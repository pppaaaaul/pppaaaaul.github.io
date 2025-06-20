import React from 'react';

export const About = () => {
    return (
        <div className='about'>
            <h1 className='name'>Paul Huang</h1>
            <section className='description'>
                <h3>About Me: </h3>
                <ul>
                    <li>I am currently a computer science student at <a href='https://www.sfu.ca/' target='_blank'>Simon Fraser University</a> in British Comlumbia, Canada. </li>
                    <li>I am an aspiring computer scientist who is interested in the field of artificial intelligence, more specifically, machine learning.</li>
                    <li>Along with computer science, I am also very interested in math and stats, especially when it is applied to CS.</li>
                    <li>Outside of school, I enjoy gaming and playing basketball with friends.</li>
                </ul>
            </section>

        <section className='education'>
            <h3>Education :</h3>
            <div className='education-content'>
                <ul>
                    <li>(BSc) <a href='https://www.sfu.ca/students/calendar/2025/summer/programs/mathematics-and-computing-science/joint-major/bachelor-of-science.html' target='_blank'>Mathematics and Computing Science Joint Major</a>, Simon Fraser University - <i>in progress</i></li>
                </ul>
                <img src='/images/sfu.jpeg' alt='SFU building' />
            </div>
        </section>
        </div>
    );
}