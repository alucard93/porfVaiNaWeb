import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 64px;
  background-color: blue;

  .title-h1 {
    white-space: nowrap;
  }

  .wrapper-header {
    width: 100%;
    max-width: 320px;
  }

  .container-itens-personal {
    display: flex;
    justify-content: end;

    width: 100%;
    list-style-type: none;
  }

  .items-personal {
  }
`
