import styled from 'styled-components'

export const StyledNavContainer = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500&family=Righteous&display=swap');

body {
    overflow-x: hidden;
    color: ${ ({ theme }) => theme.colors.pageColor};
}

.page-color {
    color: ${ ({ theme }) => theme.colors.pageColor};
}

.accent-color {
    color: ${ ({ theme }) => theme.colors.accent};
}

.main-color {
    color: ${ ({ theme}) => theme.colors.primary};
}

.navbar-container {
    font-family: 'Fredoka', sans-serif;
    border-bottom: .4em solid ${ ({ theme}) => theme.colors.primary};
    box-shadow: 0 -5px 20px 1px rgb(56, 56, 56);

}

.menu-icon {
    display: none;
}

.flex {
    display: flex;
    gap: var(--gap, 1rem);
}

.settings {
    color: ${ ({ theme}) => theme.colors.accent};
    display: flex;
    font-size: 1.9rem;
    padding: 0 1rem 0 0;
    margin: 0;
    padding: auto 2rem 2rem 2rem;
}

.settings svg ,.mobile-settings svg{
    cursor: pointer;
    transition: transform 350ms;
}

.settings svg:hover,.mobile-settings svg:hover{
    transform: rotate(90deg);

}

.right-nav-side {
    align-items: center;
    justify-content: center;
}

.logo-container {
    margin: 1.1rem;
    text-decoration: none;
    color: ${ ({ theme }) => theme.colors.accent};
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    gap: 5px;

}

.logo-icon {
    color: ${ ({ theme}) => theme.colors.primary}
}

.navbar-container {
    align-items: center;
    justify-content: space-between
}

.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0;

}

.nav-links {

    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.4rem;
    color: ${ ({ theme }) => theme.colors.accent};


    box-shadow: inset 0 -3px 0 -1px ${ ({ theme}) => theme.colors.primary};
    transition: box-shadow 150ms ease-in-out, color 80ms;
    padding: 100% 2rem 2rem 2rem;

}

.nav-links:hover {
    box-shadow: inset 0 -100px 0 -1px ${ ({ theme}) => theme.colors.primary};
    color: ${ ({ theme }) => theme.colors.pageColor};
}

.mobile-settings {
    display: none;
}

.full-settings {
    z-index: 9998;
    color: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: flex-start;
    justify-content: flex-start;
    top:0;
    padding-top: 2rem;
    padding-left: 3rem;

    background: ${ ({ theme }) => theme.colors.settingsColor};
    height: 100vh;
    width: 100vw;
    transform: translateX(100%);
    transition: transform 250ms;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.full-settings[data-visible="true"] {
    transform: translateX(0);
}

.full-settings label {
    display: flex;
    gap: .5em;
    align-items: center;
}

.full-settings h1 {

    border-bottom: 2px solid ${ ({ theme }) => theme.colors.settingsText};
    font-size: 4.5em;
    color: ${ ({ theme }) => theme.colors.settingsText};
    

}

.full-settings h2 {
    font-size: 3em;
    color: ${ ({ theme }) => theme.colors.settingsText};
}

.full-settings label {
    padding-top: 10px;
    font-size: 1.5em;
}

.settings-x {
    color: white;
   cursor: pointer;
    position: absolute;
    z-index: 9999;
    right: 2rem;
    font-size: 2.3rem;
    transition: transform 200ms ease-out;
}

.menu-x {
    transition: transform 200ms ease-out;
}

.settings-x:hover, .menu-x:hover {
    transform: rotate(90deg);
}

.full-settings ul {
    padding: 1.2em 0 0 0;
    list-style: none;
    text-align: center;
}

@media (min-width: 45em) and (max-width: 70em) {

    .nav-links {
        font-size: 1.3rem;
        padding: 100% 1rem 2rem 1rem;
    }
}

/* mobile view*/
@media (max-width: 45em) {

    /* what I could end up doing is having two separte gears that open a settings menu, and then the settings
    menu has it's own x button */

    .settings {
        display: none;
    }

    .mobile-settings {
        color: ${ ({ theme }) => theme.colors.pageColor};
        font-size: 2rem;
        display: block;
        transition: transform 300ms ease-out;
    }

    .nav-links {
        color: ${ ({ theme }) => theme.colors.pageColor};
        padding: 0;


    }

    .nav-list {

        gap: 2em;
        font-size: 1.8rem;
        font-weight: bold;
        z-index: 1000;

        position: fixed;
        inset: 0 0 0 30%;

        flex-direction: column;
        padding: min(20vh, 10rem) 2em;

        background: ${ ({ theme}) => theme.colors.primary};
        transform: translateX(100%);

        transition: transform 250ms ease-out;

    }

    .nav-list[data-visible="true"] {
        transform: translateX(0);
    }


    .menu-icon {
        cursor: pointer;
        display: block;
        color: ${ ({ theme }) => theme.colors.primary};
        position: absolute;
        z-index: 9998;
        font-size: 2.5rem;
        top: 1.5rem;
        right: 2rem;

    }

    .menu-icon.active {
        display: block;
        color: ${ ({ theme }) => theme.colors.pageColor};
        position: absolute;
        z-index: 9997;
        font-size: 2.5rem;
        top: 2rem;
        right: 2rem;

    }



}

`