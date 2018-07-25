import React from 'react';
import { LoginLayout } from '@opensanca/burro-react';

export const Login = () => (
    <LoginLayout
        user='' userLabel='E-mail' userOnChange={() => false}
        pass='' passLabel='Senha' passOnChange={() => false}
        buttonChildren='Entrar' onSubmit={() => false}
    />
)

export default Login;