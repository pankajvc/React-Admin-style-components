import React from 'react'
import { Item } from './style'

export default function Items({ children }) {
    return (
        <Item>
            {children}
        </Item>
    )
}
