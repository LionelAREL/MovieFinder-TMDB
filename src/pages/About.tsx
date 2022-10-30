import React from 'react';
const avatar =  require("./../assets/avatar.png")
const About = () => {
    return (
            <div className="container">
                <div className="first">
                    <img src={avatar} alt="" />
                    <p>
                            Name : Lionel AREL <br />
                            Mail : <a href="mailto: lionel.arel@outlook.fr">lionel.arel@outlook.fr</a> <br />
                            Personal phone number : <a href="tel:+33763506615">0763506615</a> <br />
                            Adresse : 74 Avenue de la Liberté<br />
                            S.I.R.E.N : 912 398 120 000 10<br />
                    </p>
                </div>
                <p id='txtFinal'>
                    My golden rules: Efficiency. Quality. Speed.
                </p>
            </div>
    );
};

export default About;