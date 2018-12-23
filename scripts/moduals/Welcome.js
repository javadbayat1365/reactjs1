import React, { Component } from 'react';


export default class Welcome extends Component{
    render(){
        return (
            <div>
                <h3 className="Header-title">{ this.props.title }</h3>
                <p id="Header-Description">lorem hjsf lsj dfjs jadjf s f; fas jdfjasdfkj;sjaf jlasdjflasfksdfjoauoiru wkfdsfsajd'fkjas'ofij asfhd;kash fashdfkj ;khf  asdfdhas;fh askdhfdhasfhasd</p>
            </div>
        )
    }
}
