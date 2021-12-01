import React from 'react';
import { PageArea } from './style'

import { PageContainer, PageTile } from '../../components/MainComponents';
const Page = () => {
    return (
        <PageContainer>
            <PageTile>Login</PageTile>
            <PageArea>
                <form>
                    <label className="area">
                        <div className="area-title">Email</div>
                        <div className="area-input"> <input type="email" /></div>
                    </label>
                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input"> <input type="password" /></div>
                    </label>
                    <label className="area">
                        <div className="area-title">Lembrar Senha</div>
                        <div className="area-input"> <input type="checkbox" /></div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input"> <button  >Fazer Login</button></div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page