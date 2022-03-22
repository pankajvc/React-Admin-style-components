import React from 'react'
import { Item } from './style'

export default function Items({ children, isSidebar }) {
    return (
        <Item isSidebar={isSidebar}>
            {children}
        </Item>
    )
}
