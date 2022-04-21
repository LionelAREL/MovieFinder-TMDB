import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import Movie from '../components/Movie';
import avatar from "./../assets/avatar.jpg";

const About = () => {
    return (
        <div className='main'>
        <header>
            <Header/>
        </header>
        <section>
            <div className="container">
                <div className="first">
                    <img src={avatar} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quia laboriosam quidem, exercitationem tempora quasi nobis, impedit excepturi fugit facere asperiores vero natus neque aperiam reiciendis sapiente? Tenetur odio voluptas enim, sed ullam consectetur facilis nulla quae sapiente maxime dolores at earum recusandae tempora similique quod consequatur iste fugit praesentium dicta quam! Harum eaque vero eius, distinctio similique expedita modi?</p>
                </div>
                <p id='txtFinal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, architecto.
                </p>
            </div>
        </section>
        <footer>
            <Footer/>
        </footer>
        </div>
    );
};

export default About;