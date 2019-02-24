import styled from 'styled-components'

const Cursor = styled.div`
  position: relative;

  i {
    position: absolute;
    width: 4px;
    height: 35%;
    background-color: #ffef37;
    left: 10px;
    top: 13%;
    animation-name: blink;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    opacity: 1;
  }
  input:focus + i {
    display: none;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`


export {
  Cursor
}
