import React from 'react';

function PageTitle({name, title}){

    return(

        <div className="col-md-10 text-center my-5">
            <h3>{name} <strong>{title}</strong></h3>
        </div>
       
    )
}   

export default PageTitle;