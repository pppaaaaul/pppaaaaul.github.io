import React, { useState } from 'react'

export const MenuBar = ({ pages , onClick }) => {

    const listItems = pages.map(page => {
        return <input 
            className='menuOption'
            key={page.id}
            type='button' 
            value={page.name}    
            onClick={() => {
                onClick(page.id)
            }}
        />
    });

    return (
        <div className='menuBar'>
            {listItems}
        </div>
    );
}