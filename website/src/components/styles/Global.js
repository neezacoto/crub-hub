import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        overflow-x: hidden;
        background: ${({theme}) => theme.colors.pageColor}
    }

`

export default GlobalStyles