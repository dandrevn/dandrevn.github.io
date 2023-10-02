//Main Content of Portfolio 
import {useState} from 'react';
import { Box, Container, Slide, Typography, useMediaQuery } from "@mui/material";
import profilePic from '../imgs/me.jpg';
import htmlLogo from '../imgs/html5.png';
import wpLogo from '../imgs/wpLogo.png';
import jsLogo from '../imgs/javascript.png';
import {Image} from 'mui-image';
import ScrollAnimation from 'react-animate-on-scroll';
import { useParallax } from 'react-scroll-parallax';
import Plx from 'react-plx';

const Main = () => {
    const desktop = useMediaQuery('(min-width: 1025px)');
    const tablet = useMediaQuery('(max-width: 1024px) and (min-width: 768px)');
    const mobileSM = useMediaQuery('(max-width: 767px)');
    const parallax = useParallax<HTMLDivElement>({ 
        rotate: [0, 360],
    });

    var variantType = '';
    if (desktop) {
        variantType = 'h2';
    }else if (tablet) {
        variantType = 'h3';
    }else if (mobileSM) {
        variantType = 'h4';
    }

    const textPlxData = [
        {
            start: "self",
            end: '.third-container',
            properties: [
              {
                startValue: 200,
                endValue: 0,
                unit: "px",
                property: "translateX",
              },
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          }
    ];

    const imgPlxData = [
        {
            start: 'self',
            end: '.third-container',
            properties: [
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ]
        }
    ];

    const aboutMe = [
        {
            start: 'self',
            end: '.greetings-text',
            properties: [
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ]
        }
    ];

    const greetings = [
        {
            start: 'self',
            end: '.main-content',
            properties: [
                {
                    startValue: 200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ] 
        }
    ];

    const maincontent = [
        {
            start: 'self',
            end: '.last-container',
            properties: [
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ] 
        }
    ];

    const logo1data = [
        {
            start: 'self',
            end: '.logo2',
            properties: [
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateY'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ]
        }
    ];

    const logo2data = [
        {
            start: 'self',
            end: '.logo3',
            properties: [
                {
                    startValue: 200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateY'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ]
        }
    ];

    const logo3data = [
        {
            start: 'self',
            end: '.fourth-container',
            properties: [
                {
                    startValue: -200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: 200,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateY'
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                },
            ]
        }
    ];
    return (
        <>
        <Container sx={{backgroundColor: 'lightgray', width: '100%', maxWidth: '100%!important'}}>
            <Container sx={{display: 'flex', width: '100%', maxWidth: '100%!important', padding: '20%'}}>
            </Container>
            <Container sx={{display: 'flex', width: '100%', maxWidth: '100%!important', padding: '5%'}}>
                <Box sx={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Plx parallaxData={imgPlxData}>
                        <Box
                        component='img'
                        src={profilePic}
                        sx={{width: '50%', borderRadius: '50%'}}
                        >
                        </Box>
                    </Plx>
                </Box>
                <Box sx={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <Plx parallaxData={textPlxData}>
                        <Typography variant={variantType} align='left'>
                          Hi! I'm DANDREV,
                        </Typography>
                        <Typography variant='h1' align='left'>
                            a WEB DEVELOPER.
                        </Typography>
                    </Plx>
                </Box>
            </Container>
            <Container className="third-container" sx={{display: 'flex', width: '100%', maxWidth: '100%!important', padding: '20%'}}>
            </Container>
            <Container sx={
                {
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: '20px',
                    width: '100%', 
                    maxWidth: '100%!important', 
                    padding: '20%', 
                    justifyContent: 'center'
                }
            }>
                <Plx parallaxData={logo1data}>
                   <Box
                        component='img'
                        src={wpLogo}
                        sx={{width: '300px', borderRadius: '50%', height: '300px'}}
                        >
                   </Box>
                </Plx>
                <Plx className='logo2' parallaxData={logo2data}>
                    <Box
                        component='img'
                        src={htmlLogo}
                        sx={{width: '200px', borderRadius: '50%', height: '200px'}}
                        >
                    </Box>
                </Plx>
                <Plx className='logo3' parallaxData={logo3data}>
                    <Box
                        component='img'
                        src={jsLogo}
                        sx={{width: '200px', borderRadius: '50%', height: '200px'}}
                        >
                    </Box>
                </Plx>
            </Container>
            <Container className="fourth-container" sx={
                {
                    display: 'flex', 
                    gap: '20px' ,
                    flexDirection: 'column' ,
                    width: '100%', 
                    padding: '5%',
                    border: '1px solid black',
                    borderRadius: '30px',
                    }
                }>
                <Plx parallaxData={aboutMe} className='aboutme-text'>
                    <Typography variant='h3' align='center'>
                        About Me
                    </Typography>
                </Plx>
                <Plx parallaxData={greetings} className='greetings-text'>
                    <Typography variant='h4' align='center'>
                        My name is Dandrev Nasi, it's nice meeting you. 
                    </Typography>   
                </Plx>
                <Plx parallaxData={maincontent} className='main-content'>
                    <Typography variant='h5' align='justify'>
                        I'm currently a WordPress Developer, developing and maintaining responsive WordPress websites for various brands. I also manage WooCommerce
                        for product management and sales tracking. I have been using Google Analytics together with Google Tag Manager in website activity tracking 
                        and management. Continuous growth is my main thing so I'm more into upskilling.
                    </Typography>
                </Plx>
            </Container> 
            <Container className='last-container' sx={{display: 'flex', width: '100%', maxWidth: '100%!important', padding: '20%'}}>
            </Container>  
        </Container>
        </>
    );
     
};


export default Main;