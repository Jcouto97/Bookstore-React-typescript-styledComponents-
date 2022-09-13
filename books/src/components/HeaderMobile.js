import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { StyledHeader, Nav, Slogan } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import bookLogo from '../assets/book-logo.png';
import { Hamburguer } from './styles/Hamburguer.styled';
import hamburguer from './../assets/menu-hamburger.png';
import arrowDown from './../assets/arrow-down.png';


function HeaderMobile() {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
    }


    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Link to='/'>
                        <Slogan>
                            <h1>BookStore</h1>
                            <img src={bookLogo} alt="book-logo" />
                        </Slogan>
                    </Link>
                    <Hamburguer>
                        {isClicked ?
                            <img src={arrowDown} alt="arrowDown " onClick={handleClick} /> :
                            <img src={hamburguer} alt="hamburguer menu" onClick={handleClick} />
                        }
                        {isClicked ?
                            (
                                <div>
                                    <Link to='/bookspage'>
                                        All Books
                                    </Link>
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                    <Link to='/register'>
                                        Register
                                    </Link>
                                </div>) : (null)}
                    </Hamburguer>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

export default HeaderMobile