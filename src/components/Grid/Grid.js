import styled, { css } from "styled-components";
import { device } from "../../config/Theme/BreakPoints";


const Grid = styled.div`
  ${(props) =>
        props.container &&
        css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      flex-direction: ${props.direction};
      justify-content: ${props.justify};
      align-items: ${props.alignItems};
      flex-wrap: ${props.wrap};
    `};
  ${(props) =>
        props.container &&
        props.spacing &&
        css`
      width: calc(100% + ${8 * props.spacing}px);
      margin: -${8 * props.spacing}px;
      > div {
        padding: ${8 * props.spacing}px;
      }
    `};
  ${(props) =>
        props.container &&
        props.order &&
        css`
      order: 0;
      order: ${props.order};
    `};
  ${(props) =>
        props.item &&
        css`
      margin: 0;
      box-sizing: border-box;
      ${'' /* background-color: floralwhite; */}
    `};
  ${(props) =>
        props.xs &&
        css`
      @media ${device.xs} {
        ${'' /* background-color: aliceblue; */}
        flex-grow: 0;
        max-width: ${(props.xs * 100) / 12}%;
        flex-basis: ${(props.xs * 100) / 12}%;
      }
    `};
  ${(props) =>
        props.sm &&
        css`
      @media ${device.sm} {
        ${'' /* background-color: aquamarine; */}
        flex-grow: 0;
        max-width: ${(props.sm * 100) / 12}%;
        flex-basis: ${(props.sm * 100) / 12}%;
      }
    `};
  ${(props) =>
        props.md &&
        css`
      @media ${device.md} {
        ${'' /* background-color: cadetblue; */}
        flex-grow: 0;
        max-width: ${(props.md * 100) / 12}%;
        flex-basis: ${(props.md * 100) / 12}%;
      }
    `};
  ${(props) =>
        props.lg &&
        css`
      @media ${device.lg} {
        ${'' /* background-color: darkkhaki; */}
        flex-grow: 0;
        max-width: ${(props.lg * 100) / 12}%;
        flex-basis: ${(props.lg * 100) / 12}%;
      }
    `};
  ${(props) =>
        props.xl &&
        css`
      @media ${device.xl} {
        ${'' /* background-color: darkorchid; */}
        flex-grow: 0;
        max-width: ${(props.xl * 100) / 12}%;
        flex-basis: ${(props.xl * 100) / 12}%;
      }
    `};
`;

Grid.defaultProps = {
    direction: "row",
    // justify: "center",
    alignItems: "center",
    wrap: "wrap",
};

export default Grid;
