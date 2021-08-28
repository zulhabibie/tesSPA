import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    const className = ['button'];
    if(props.isPrimary){
        className.push('button-primary');
    }
    if(props.isWidthMobile){
        className.push('button-width-mobile');
    }
    if(props.isSmall){
        className.push('button-sm');
    }
    return (
        <div>
            <button className={className.join(" ")}>{props.children}</button>
        </div>
    )
}

Button.propTypes = {
 isPrimary : PropTypes.bool,
 isWidthMobile : PropTypes.bool,
 isSmall : PropTypes.bool,

};