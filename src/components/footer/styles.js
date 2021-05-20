import styled from 'styled-components'

export const Footer = styled.footer`

display:flex;
justify-content: center;
align-items: flex-start;
height:500px;
max-width:1440px;
margin: 60px auto;
flex-wrap:wrap;

`

export const ColumnFlex = styled.div`
width:25%;
min-width:200px;
padding:20px;
height:100%;
text-align:center;
border-left: 1px solid var(--yellowLight);
height:100%;
& h5 {
    margin: 0;
    padding: 10px;
}
`
export const ColumnFlex2 = styled(ColumnFlex)`
text-align:left;
` 

export const SocialMedia = styled.li`

display:flex;

align-items:center;
`

export const ContainerFooter = styled.div`
background: var(--darkGray);
@media (max-width: 800px) {
    height:1000px;
  }
`