import React from 'react'

export default function InputText({ name, value, onChange }) {
    return (
        <div className='form-group'>
            <label>{name}</label>
            <input type='text'
                className='form-control'
                value={value}
                onChange={(e) => onChange(e.target.value, name)}
            />
        </div>
    )
}
