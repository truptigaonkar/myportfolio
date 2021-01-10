import React from 'react'
import { Experience } from "./Data/ExperienceData";
import { styled } from '@glitz/react';
import { pseudo } from '@glitz/core';

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
    width:'1200px',
    margin: {
        x: 'auto',
        y: '10px',
    },
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
    }
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
})
