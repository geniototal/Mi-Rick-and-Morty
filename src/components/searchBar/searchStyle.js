import styled from 'styled-components'

export const DivSearch = styled.div`
padding: 1em;
display: flex;
justify-content: center;
`

export const Btn = styled.button`
    border-radius: 0.5em;
    margin-left: 9.7em;
    margin-top: 0.35em;
    padding: 0.3em;
    border: none;
    color: rgb(12, 20, 69);
    font-family:'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 1em;
    transform-style: preserve-3d;
    transform: translateZ(-20px) rotateX(20deg);
    position:absolute;
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
  `;

 export const Input = styled.input`
    border-radius: 0.5em;
    background-color:#ececec;
    margin-left: 0.5em;
    padding: 0.5em;
    border: solid rgb(12, 20, 69);
    color: #370617;
    font-weight: 700;
    font-size: 1em;
    position:relative;
    transform-style: preserve-3d;
    transform: translateZ(-10px) rotateX(10deg);
    &:hover {
      background-color: rgb(12, 20, 69);
      color:#ececec;
    }
  `;