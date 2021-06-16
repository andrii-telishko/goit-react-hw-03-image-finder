import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Button({loadMoreImages, isLoading}) {
    return (
        <div className='button-conteiner'>
            <button type='button' className='Button'
                onClick={loadMoreImages}>
                {isLoading && <Loader
                                  type="Puff"
                                  color="#00BFFF"
                                  height={25}
                                  width={25}
                                  className='loader'
                                  //timeout={3000} //3 secs
                               />}
                Load more</button>
        </div>
       
    );
};