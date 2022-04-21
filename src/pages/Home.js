import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import Movie from '../components/Movie';

const Home = () => {
    return (
        <div className='main'>
        <header>
            <Header/>
        </header>
        <section>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum modi ut dolor voluptas similique, eaque qui asperiores molestiae, magni eum repellat facere! Incidunt explicabo quibusdam corrupti tenetur maiores, vero tempore debitis quos soluta exercitationem! Qui dignissimos soluta quisquam dolorem deserunt! Consequatur ea doloremque eos? Accusantium illum ex excepturi sunt fuga, expedita nisi in perferendis vero maiores eius quibusdam sequi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error voluptatum dolore deleniti, at iure rem impedit perferendis quia autem maiores ipsum obcaecati excepturi? Ea beatae ut accusamus magni dicta!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facilis amet, laboriosam cupiditate quam iusto dignissimos illum non dolorem, exercitationem labore? Nostrum, inventore pariatur, debitis quos aut aspernatur nihil tempore laborum, iusto quod totam cum reprehenderit quaerat fugit maiores velit.</p>
            </div>
        </section>
        <footer>
            <Footer/>
        </footer>
        </div>
    );
};

export default Home;