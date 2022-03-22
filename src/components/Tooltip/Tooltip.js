import React from 'react'
import { ToolTipMain } from './style'

export default function Tooltip({ children }) {
  return (
      <ToolTipMain data-tooltip="Right Tip">{children}</ToolTipMain>
  )
}
