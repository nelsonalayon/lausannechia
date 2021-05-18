import styled from 'styled-components'

export const ColorWrappper = styled.div`
background: var(--darkGray);
`

export const NavigationContainer = styled.div`

display:flex;
justify-content: space-between;
max-width:1440px;
margin: 0 auto;
`

export const LogoContainer = styled.div`
padding: 20px 20px 10px 20px;
`

export const ItemsNavigation = styled.ul`
display:flex;
align-items:flex-end;
& li: hover {
    border-left: 1px solid var(--yellowLight);
    border-right: 1px solid var(--yellowLight);
}
`