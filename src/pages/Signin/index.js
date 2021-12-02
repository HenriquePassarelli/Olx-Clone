import React, { useState } from 'react';
import { PageArea } from './style'
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'

import { PageContainer, PageTile } from '../../components/MainComponents';
const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState('')

    const api = useApi()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisable(true)

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
        }
    }
    return (
        <PageContainer>
            <PageTile>Login</PageTile>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Email</div>
                        <div className="area-input"> <input type="email" disable={disable} /></div>
                    </label>
                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input"> <input type="password" disable={disable} /></div>
                    </label>
                    <label className="area">
                        <div className="area-title">Lembrar Senha</div>
                        <div className="area-input"> <input type="checkbox" disable={disable} /></div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input"> <button disable={disable} >Fazer Login</button></div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page