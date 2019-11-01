import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
//import FormContainer from './js/components/container/FormContainer.jsx'

function App() {
    const [formId, setFormId] = useState('FormA01')
    const [appFormPool, setAppFormPool] = useState({})

    useEffect(() => {
        // 存此註冊AppForm
        const appFormPool = {
            FormContainer: lazy(() => import('./js/components/container/FormContainer.jsx')),
            FormA01: lazy(() => import('./js/AppForm/FormA01/AppForm.jsx')),
            FormB02: lazy(() => import('./js/AppForm/FormB02/AppForm.jsx')),
            FormC03: lazy(() => import('./js/AppForm/FormC03/AppForm.jsx')),
            FormD04: lazy(() => import('./js/AppForm/FormD04/AppForm.jsx'))
        }
        setAppFormPool(appFormPool)
    }, []) // <--- 此空[]將使useEffect只執行一次。等同componentDidMount

    // 取得顯示目標元件
    const AppForm = appFormPool[formId] || (() =>
        <div>
            Undefined AppForm: {formId}
        </div>)

    //console.log('render')
    return (
        <div>
            <h1>MainFrame JSX</h1>
            <p>Bread crumbs:> {formId}</p>
            <ul>
                <li onClick={() => setFormId('FormContainer')}>FormContainer</li>
                <li onClick={() => setFormId('FormA01')}>FormA01</li>
                <li onClick={() => setFormId('FormB02')}>FormB02</li>
                <li onClick={() => setFormId('FormC03')}>FormC03</li>
                <li onClick={() => setFormId('FormD04')}>FormD04</li>
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
