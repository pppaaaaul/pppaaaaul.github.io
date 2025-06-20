import React, { useState } from 'react';


export const Skills = () => {

    const [languages, setLanguages] = useState([
        {
            name : 'Java',
            points : [
                'Proficient with object oriented design in Java.',
                'Built backend applications using Spring Boot framwork, including implenting REST APIs.'
            ]
        }, {
            name : 'C',
            points : []
        }, {
            name : 'C++',
            points : []
        }, {
            name : 'Javascript',
            points : [
                'Built frontend applications using React framework.',
                'Built backend applications using NodeJS and Express frameworks.'
            ]
        }, {
            name : 'Python',
            points : []
        }, {
            name : 'SQL',
            points : [
                'Worked with Postgres and SQLite.'
            ]
        }
    ]); 

    const [otherSkills, setOtherSkills] = useState([
        {
            name : 'English',
            points : [
                'Proficient in reading and writing english.'
            ]
        }, {
            name : 'Mathematics',
            points : [
                'Strong foundation in calculus, linear algebra, statistics/probability and discrete math.'
            ]
        }
    ]);

    const programmingLanguagesList = languages.map(language => {
                        return <div className='language'>
                            <h3>{language.name}</h3>
                            <ul>{
                                language.points.map((point, index) => {
                                    return <li key={index}>{point}</li>
                                })}
                            </ul>
                        </div>
                    });

    const otherSkillsList = otherSkills.map(skill => {
                        return <div className='skill'> 
                            <h3>{skill.name}</h3>
                            <ul>
                                {skill.points.map((point, index) => {
                                    return <li key={index}>{point}</li>
                                })}
                            </ul>
                        </div>
                    });
                

    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className='section-box programmingLanguages'>
                <h2>Known Programming Languages</h2>
                <ul>{programmingLanguagesList}</ul>
                <img src='/images/java.jpeg' alt='Java programming language logo.' />
                <img src='/images/C.jpeg' alt='C programming language logo.' />
                <img src='/images/python.jpeg' alt='python programming language logo.' />
            </div>

            <div className='section-box otherSkills'>
                <h2>Other Skills</h2>
                <ul>{otherSkillsList}</ul>
                <img src='/images/integral.jpeg'alt='Definition of definite integral.' />
            </div>
        </div>

    );
}