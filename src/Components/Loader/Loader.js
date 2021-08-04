import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function LoaderOfImages () {
    return (
       <Loader
       type="Rings"
       color="#00BFFF"
       height={80}
       width={80}
       /> 
    );
}