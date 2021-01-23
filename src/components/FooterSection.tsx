import { media } from '@glitz/core'
import { styled } from '@glitz/react'
import React from 'react'

const FooterSection = () => {
    return (
        <>
            <Footer>
                <Container>
                    <Section css={{ maxWidth: '60%' }}>
                        <H2>About Us</H2>
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quia sint pariatur qui, cupiditate iusto eum rem quis inventore, ea et ut consectetur, sunt eveniet commodi voluptatibus facilis in adipisci?</P>
                        <SocialIcons>
                            <Li><A href=""><Fa className="fa fa-facebook" area-hidden="true"></Fa></A></Li>
                            <Li><A href=""><Fa className="fa fa-twitter" area-hidden="true"></Fa></A></Li>
                            <Li><A href=""><Fa className="fa fa-instagram" area-hidden="true"></Fa></A></Li>
                            <Li><A href=""><Fa className="fa fa-youtube" area-hidden="true"></Fa></A></Li>
                        </SocialIcons>
                    </Section>
                    <Section>
                        <H2>Quick Link</H2>
                        <ul>
                            <Li><A href="">Home</A></Li>
                            <Li><A href="">Home</A></Li>
                            <Li><A href="">Home</A></Li>
                            <Li><A href="">Home</A></Li>
                            <Li><A href="">Home</A></Li>
                        </ul>
                    </Section>
                    <Section>
                        <H2>Contact Info</H2>
                        <ul className="info">
                            <Li style={{ display: 'flex' }}>
                                <Span><i className="fa fa-map-marker" area-hidden="true"></i></Span>
                                <P>647 'Anda Street</P>
                            </Li>
                            <Li style={{ display: 'flex' }}>
                                <Span><i className="fa fa-phone" area-hidden="true"></i></Span>
                                <p><A href="tel: 12345678900">+1 234 567 8900</A></p>
                            </Li>
                            <Li style={{ display: 'flex' }}>
                                <Span><i className="fa fa-envelope" area-hidden="true"></i></Span>
                                <p><A href="mailto: john.doe@gmail.com">john.doe@gmail.com</A></p>
                            </Li>
                        </ul>
                    </Section>
                </Container>
            </Footer>
            <Copyright>
                <CopyrightP>Copyright ©2021 JOHN DOE. All Rights Reserved.</CopyrightP>
            </Copyright>
        </>
    )
}

export default FooterSection

const Footer = styled.footer({
    position: 'relative',
    height: 'auto',
    padding: {
        x: '100px',
        y: '50px',
    },
    backgroundColor: '#111',
    ...media('(max-width: 991px)',{
        padding: {
            x: '40px',
            y: '40px',
        },
    }),
})

const Container = styled.div({
    display: 'flex',
    justifyContent: 'space-evenly',
    flexFlow: 'row wrap',
    ...media('(max-width: 991px)',{
        flexDirection: 'column'
    }),
})

const Section = styled.div({
    ...media('(max-width: 991px)',{
        maxWidth: '100%',
        marginBottom: '30px',
    }),
})

const H2 = styled.h3({
    color: '#fff',
    fontWeight: 500,
    marginBottom: '10px',
})

const P = styled.p({
    color: '#999',
})

const SocialIcons = styled.ul({
    display: 'flex',
    marginTop: '20px',
})

const Li = styled.li({
   listStyle: 'none',
})

const Span = styled(P, {
    marginRight: '20px',
    marginLeft: '-15px',
    marginBottom: '10px'
});

const A = styled.a({
    textDecoration: 'none',
    color: '#999',
    ':hover':{
        color: '#fff'
    }
})

const Fa = styled.i({
    color: '#fff',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#222',
    ':hover':{
        backgroundColor: '#00bcd4'
    }
})

const Copyright = styled.div({
    color: '#999',
    backgroundColor: '#181818',
    textAlign: 'center',
    padding: {
        x: '100px',
        y: '8px',
    },
    ...media('(max-width: 991px)',{
        padding: {
            x: '40px',
            y: '8px',
        },
    }),
})

const CopyrightP = styled.p({
    margin: {
        x: 0,
        y: 0,
    },
    fontSize: '14px',
})
