import React, { useState } from 'react';
import { PageArea } from './style'
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'

import { PageContainer, PageTile, ErrorMessage } from '../../components/MainComponents';
const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState('')

    const api = useApi()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisable(true)
        setError('')
        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/';
        }
        setDisable(false)

    }
    return (
        <PageContainer>
            <PageTile>Login</PageTile>
            <PageArea>
                {error && <ErrorMessage >{error}</ErrorMessage>}
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Email</div>
                        <div className="area-input"> <input type="email" disable={disable} value={email} onChange={e => setEmail(e.target.value)} required /></div>
                    </label>
                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input"> <input type="password" disable={disable} value={password} onChange={e => setPassword(e.target.value)} required /></div>
                    </label>
                    <label className="area">
                        <div className="area-title">Lembrar Senha</div>
                        <div className="area-input"> <input type="checkbox" disable={disable} checked={rememberPassword} onChange={() => setRememberPassword((rememberPassword) => !rememberPassword)} /></div>
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