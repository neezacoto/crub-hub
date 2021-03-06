import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        overflow-x: hidden;
        background: ${({theme}) => theme.colors.pageColor}
        
    }
    body > div {
        color: ${({theme}) => theme.colors.accent}
    }

`

export default GlobalStyles