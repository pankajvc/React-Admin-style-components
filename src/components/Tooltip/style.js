import styled from "styled-components"

export const ToolTipMain = styled.div`
position:relative ;
display:inline-block; ;
/* position: absolute;
z-index: 999; */
[data-tooltip]::before & {
    content: attr(data-tooltip);
}
`