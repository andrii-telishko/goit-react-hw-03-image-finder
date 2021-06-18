import React from 'react';
import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className='spinner-conteiner'>
            <Loader
             type="Puff"
             color="#00BFFF"
             height={100}
            width={100} />
        </div>
    );
};

export default Spinner;