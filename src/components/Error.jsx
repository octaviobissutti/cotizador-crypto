import React from 'react'
import styled from '@emotion/styled'


const ErrorDiv = styled.div ` 
color: #FFF;
background-color: #B7322C;
padding: 15px;
border-radius: 10px;
text-transform: uppercase;
margin: auto;
font-family: 'Lato', sans-serif;
font-weight: 700;
text-align:center;
`

const Error = ({children}) => {
    return (
        <div>
            <ErrorDiv>{children}</ErrorDiv>
        </div>
    )
}

export default Error
