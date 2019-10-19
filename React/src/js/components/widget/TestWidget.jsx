import React, { useState } from "react"
import InputText from '../presentational/InputText.jsx'

export default function TestWidget({ title, onClick }) {
    const [color, setColor] = useState('red')
    const [text, setText] = useState('say hi')

    return (
        <>
            <h4>{title}</h4>
            <InputText name="color" value={color} onChange={setColor} />
            <InputText name="text" value={text} onChange={setText} />
            <button style={{ color: color }} onClick={() => onClick({ color, text })}>
                {text}
            </button>
        </>
    )
}
