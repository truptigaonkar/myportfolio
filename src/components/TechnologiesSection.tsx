import { styled } from '@glitz/react'
import React from 'react'
import { Technology } from './Data/TechnologyData'

const TechnologiesSection = () => {
    return (
        <Content>
            {Technology.technologyData.map(data => (
                <ServicesBx>
                    <TechnologyImg src={data.img} alt="" />
                    <H2>{data.heading}</H2>
                    <P>{data.content}</P>
                </ServicesBx>
            ))}
        </Content>
    )
}

export default TechnologiesSection

const Content = styled.div({
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
})

const ServicesBx = styled.div({
    padding: {
        x: '10px',
        y: '20px',
    },
    maxWidth: '250px',
    margin: {
        x: '20px',
        y: '20px',
    },
    transitionProperty: '0.5s',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    ':hover': {
        filter: 'invert(1)',
    },
})

const TechnologyImg = styled.img({
    maxWidth: '80px',
    transitionProperty: '0.5s',
})

const H2 = styled.h2({
    marginTop: '20px',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 600,
    transitionProperty: '0.5s',
})

const P = styled.p({
    margin: {
        x: 0,
        y: 0,
    },
    transitionProperty: '0.5s',
})