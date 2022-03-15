import React from 'react'
import { MenuWrapper } from './style'

export default function Menu({ children,isOpen }) {
    return (
        <MenuWrapper isOpen={isOpen}>
            {children}
        </MenuWrapper>
    )
}
