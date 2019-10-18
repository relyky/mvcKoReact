import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
//import FormContainer from './js/components/container/FormContainer.jsx'

function App() {
    const [formId, setFormId] = useState('FormA01')
    const [appForms, setAppForms] = useState({})

    useEffect(() => {
        const appForms = {
            FormA01: lazy(() => import('./js/AppForm/FormA01/AppForm.jsx')),
            FormB02: lazy(() => import('./js/AppForm/FormB02/AppForm.jsx')),
            FormC03: lazy(() => import('./js/AppForm/FormC03/AppForm.jsx'))
        }
        setAppForms(appForms)
    },[]) // <--- 此[]將使useEffect只執行一次

    console.log('render')
    const AppForm = appForms[formId] // 取得顯示目標元件
    return (
        <div>
            <h1>MainFrame</h1>
            <p>{formId}</p>
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
