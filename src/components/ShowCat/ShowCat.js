import React from 'react';
import './ShowCat.scss';


const ShowCat = ({children}) => {
    return (
            <section className="container-img">
                <h1>Gatites</h1>
                <figure className="shor-img-cat">
                    {children}
                </figure>
            </section>
      
    )
};

export default ShowCat;