import React from "react";
import { Nav } from "./styled";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

export default function Header() {
    return (
        <Nav>
            <a>
                <FaHome size={24} />
            </a>
            <a>
                <FaSignInAlt size={24} />
            </a>
            <a>
                <FaUserAlt size={24} />
            </a>
        </Nav>
    );
}