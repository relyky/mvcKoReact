import React from 'react'
import TestWidget from '../../components/widget/TestWidget.jsx'

// 常數
const APP_FORM_TITLE = 'FormB02'

export default function AppForm() {
    return (
        <div>
            <h2>{APP_FORM_TITLE}</h2>
            <TestWidget
                title='Foo'
                onClick={(info) => alert(JSON.stringify(info))} />
        </div>
    )
}