import React from 'react';
const avatar =  require("./../assets/avatar.jpg")
const About = () => {
    return (
            <div className="container">
                <div className="first">
                    <img src={avatar} alt="" />
                    <p>
                            Prénom/Nom : Lionel AREL <br />
                            Email : <a href="mailto: lionel.arel@outlook.fr">lionel.arel@outlook.fr</a> <br />
                            Numéro de téléphone : <a href="tel:+33763506615">0763506615</a> <br />
                            Adresse : 74 Avenue de la Liberté<br />
                            Entreprise : TATATITITOTO. <br />
                            S.I.R.E.N : 912 398 120 000 10<br />
                    </p>
                </div>
                <p id='txtFinal'>
                    Mes règles d'or : Efficacité. Qualité. Rapidité.
                </p>
            </div>
    );
};

export default About;