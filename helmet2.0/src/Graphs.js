import React from "react";

function Graphs({value}){
    // console.log(value);
    


    return(
        <div className="col-6">
            <iframe src={value}></iframe>
            
        </div>
    )
};

export default Graphs;