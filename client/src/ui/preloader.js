import Loader from 'react-loader-spinner';
import React from 'react';
 export default function Preloader() {
     return (
          <div className="preloader">
               <Loader className='preloder' type="Circles" color="#FF5733" height={100} width={100}  timeout={3000}/>
          </div>
     );
   }
   