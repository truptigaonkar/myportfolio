import { styled } from '@glitz/react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Copyright>
                <CopyrightP>Copyright ©2021 JOHN DOE. All Rights Reserved.</CopyrightP>
            </Copyright>
        </div>
    )
}

export default Footer

const Copyright = styled.div({
    color: '#fff',
    backgroundColor: '#111',
    textAlign: 'center',
    padding: {
        x: '10px',
        y: '10px',
    },
})

const CopyrightP = styled.p({
    margin: {
        x: 0,
        y: 0,
    },
    fontSize: '16px',
})
