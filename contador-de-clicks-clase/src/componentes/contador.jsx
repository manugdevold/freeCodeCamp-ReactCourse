import React from "react";
import "../hojas-de-estilo/contador.css"

class Contador extends React.Component{
   render(){
        return(
            <div className="contador">
                {this.props.numClicks}
            </div>
        );
   }
}


export default Contador;