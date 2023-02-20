import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

var displayWV = '0094';

function ReturnSDOImage(){
    return(
    <img src={`https://sdo.gsfc.nasa.gov/assets/img/latest/latest_512_${displayWV}.jpg`} alt="Our Sun right now at 94 Å"/>
    )
}

function handleClick(value, wv, event) { 
    displayWV=wv; 
  }

export default function AIAButtonGroup(){

    const [radioValue, setRadioValue] = useState('1');

    // AIA channels
    // CHANNELS=( 0094 0131 0171 0193 0211 0304 0335 1600 1700 )

    const toggles = [
        { name: '94 Å' ,  value: '1', wavelength:'0094'},
        { name: '131 Å',  value: '2', wavelength:'0131'},
        { name: '171 Å',  value: '3', wavelength:'0171'},
        { name: '193 Å',  value: '4', wavelength:'0193'},
        { name: '211 Å',  value: '5', wavelength:'0211'},
        { name: '304 Å',  value: '6', wavelength:'0304'},
        { name: '335 Å',  value: '7', wavelength:'0335'},
        { name: '1600 Å', value: '8', wavelength:'1600'},
        { name: '1700 Å', value: '9', wavelength:'1700'},
    ];
    console.log("Logged during button creation")

    return (
        <>
        <div>
            <br />

            <ReturnSDOImage />
            
            <br /> <br />
        <ButtonGroup>
            {toggles.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant='outline-primary'
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={(e) => handleClick(radio.value, radio.wavelength, e)}
                // onClick={handleClick}
            >
                {radio.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
        <br /><br />
        </div>     
        </>
    );
}