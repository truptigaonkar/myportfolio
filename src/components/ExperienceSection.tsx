import React from 'react'
import { Experience } from "./Data/ExperienceData";
import { styled } from '@glitz/react';
import { media, pseudo } from '@glitz/core';

const ExperienceSection = () => {
    return (
        <Timeline>
            <Ul>
                {Experience.experienceData.map(data => (
                    <Li>
                        <TimelineContent>
                            <Span>{data.year}</Span>
                            <H4>{data.profession}</H4>
                            <p>{data.experience}</p>
                        </TimelineContent>
                    </Li>
                ))}
            </Ul>
        </Timeline>
    )
}

export default ExperienceSection

const Timeline = styled.div({
    margin: {
        x: 'auto',
        y: '10px',
    },
    ...media('(max-width: 960px)',{
        padding: {
            x: '5px',
            y: '5px',
        },  
    }),
})

const Ul = styled.ul({
    listStyle:'none',
    position:'relative',
    ':before':{
        content: '""',
        position: 'absolute',
        width: '2px',
        height: '100%',
        left:'50%',
        top:0,
        backgroundColor: '#fff',
    },
    ...media('(max-width: 960px)',{
        ':before':{
            width: 0,
        },
    }),
})

const Li = styled.li({
    marginBottom:'30px',
    display:'table',
    clear:'both',
    position:'relative',
    ':before':{
        content: '""',
        position: 'absolute',
        width: '25px',
        height: '25px',
        left:'50%',
        top:'50%',
        backgroundColor: '#00bcd4',
        transform:'translate(-50%,-50%)',
        borderRadius:'50%',
    },
    textAlign:'right',
    ...pseudo(':nth-child(even)',
    {
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign:'left',
    }),
    ...media('(max-width: 960px)', {
        ...pseudo(':nth-child(even)',
            {
                display: 'flex',
                justifyContent: 'flex-start',
                textAlign: 'left',
            }),
        ':before': {
            width: 0,
        },
    }),
})

const TimelineContent = styled.div({
    position: 'relative',
    width: '45%',
    padding: {
        x: '30px',
        y: '30px',
    },
    border:
    {
        xy:
        {
            width: 2,
            style: 'solid',
            color: '#00bcd4',
        }
    },
    ...media('(max-width: 960px)',{
        fontSize: '0.8em',
        padding: {
            x: 5,
            y: 5,
        },
        width: '100%',
        textAlign: 'center',
    }),
})

const Span = styled.span({
    color:'#00bcd4',
    fontWeight:'bold',
})

const H4 = styled.h4({
    margin: {
        top: '10px',
        right: 0,
        bottom: '20px',
        left: 0,
    },
    textTransform:'capitalize',
    fontSize:'25px',
    ...media('(max-width: 960px)',{
        fontSize: '15px',
    }),
})
