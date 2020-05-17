import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <Link classname='home-link' to='/nasaphoto'>
                Explore the galaxy!
            </Link>
        </div>
    );
}

export default Home;
