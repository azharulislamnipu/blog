import React from 'react';

const lazyload = (filepatha) => ( 
     React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve,3000)).then(
          () => filepatha
        );
      })
  );
  
  export default lazyload;  