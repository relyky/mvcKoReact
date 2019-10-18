import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
//import FormContainer from './js/components/container/FormContainer.jsx'

function App() {
    const [formId, setFormId] = useState('FormA01')

    console.log('appForms')
    const appForms = {
        FormA01: lazy(() => import('./js/AppForm/FormA01/AppForm.jsx')),
        FormB02: lazy(() => import('./js/AppForm/FormB02/AppForm.jsx')),
        FormC03: lazy(() => import('./js/AppForm/FormC03/AppForm.jsx'))
    }
    const AppForm = appForms[formId]

    console.log('render')
    return (
        <div>
            <h1>{formId}</h1>
            <ul>
                <li onClick={() => setFormId('FormA01')}>FormA01</li>
                <li onClick={() => setFormId('FormB02')}>FormB02</li>
                <li onClick={() => setFormId('FormC03')}>FormC03</li>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
                {AppForm && <AppForm />}
            </Suspense>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)
