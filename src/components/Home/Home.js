import { logDOM } from '@testing-library/react';
import React from 'react';


const Home = () => {
    return (
        <div>
            <section className='header-area grid grid-cols-2 gap-4" m-20'>
                    <div className='text-area'>
                        <h2 className='text-2xl font-bold mb-5'>
                            Lets talk about  <br /> <span className='text-5xl text-blue-500'>Delicious Food!!!!</span>
                        </h2>
                        <p>
                            Eating a healthy dite is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love.Reaher , it's about feeling great, having more energy, improving your health, and boosting your mood. Healthy eating doesn't have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and dite advice out there , you're not aline.
                        </p>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5'>See Reviews</button>
                    </div>
                    <div className='img-area ml-7'>
                        <h2>
                            Lets talk about some delicious food!!!!
                        </h2>
                    </div>
            </section>
            <section>
                <div >
                    <h2 className='text-5xl text-center mb-5'>Customer reviews</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;