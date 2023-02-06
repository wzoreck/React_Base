import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        
        dispatch(exampleActions.clicaBotao());
    }
    
    return (
        <Container>
            <Title isRed>
                Login
                <small> teste</small>
            </Title>
            <p>Lorem ipsum</p>
            <button type='button' onClick={handleClick}>Enviar</button>
        </Container>
    );
}