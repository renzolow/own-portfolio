import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                Hello, my name is Renzo. I'm a software engineer with experiance in Java, MySQL, Spring, AWS, Google Firebase,
                Javascript and React. Currently I working on improving my React skill set so that I can become a professional React developer.
                I constantly learning new things, for example React.
                By learning React, I able to create 3 projects. First is the website you are currently looking at, which is my own portfolio website created by React.
                Second is the burger builder app, and following with Corona Virus Tracker. These 2 project's demo can be found at my portfolio home page.
                I have a dream, to able to start my own business and become an entrepreneur. I'm a car guy, car have a special place for me. I wish my future own business will be related to cars.
                Currently I've started a small business to sell some car accessories. 
            </Content>
        </div>
    );
}

export default AboutPage;