import React from 'react';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';


export default function Login() {
    return (
        <Container>
            <Title isRed>
                Login
                <small> teste</small>
            </Title>
            <p>Lorem ipsum</p>
            <button type='button'>Enviar</button>
        </Container>
    );
}