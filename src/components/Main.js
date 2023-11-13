//Main Content of Portfolio 
import {useState} from 'react';
import { 
    Box, 
    Container, 
    Grid, 
    Paper, 
    Slide, 
    Typography, 
    useMediaQuery, 
    List, 
    ListItem, 
    ListItemText
} from "@mui/material";
import {
    Timeline, 
    TimelineItem,
    TimelineSeparator,
    TimelineConnector, 
    TimelineContent,
    TimelineOppositeContent, 
    TimelineDot
} from "@mui/lab";
import htmlLogo from '../imgs/html5.png';
import wpLogo from '../imgs/wpLogo.png';
import jsLogo from '../imgs/javascript.png';
import {Image} from 'mui-image';
import ScrollAnimation from 'react-animate-on-scroll';
import { useParallax } from 'react-scroll-parallax';
import Plx from 'react-plx';
import Intro from '../components/Intro';
import { Divider } from 'semantic-ui-react';

const Main = () => {
    const aboutMe = [
        {
            start: 'self',
            end: '.greetings-text',
            properties: [
                {
                    startValue: -100,
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
                    startValue: 100,
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
                    startValue: -100,
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
                    startValue: -100,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: -100,
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
                    startValue: 100,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: -100,
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
            end: '.third-container',
            properties: [
                {
                    startValue: -100,
                    endValue: 0,
                    unit: 'px',
                    property: 'translateX'
                },
                {
                    startValue: 100,
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

    const textContainer = [
        {
            start: 'self',
            end: '.last-container',
            properties: [
                {
                    startValue: -90,
                    endValue: 0,
                    property: 'rotate'
                },
            ]
        }
    ];

    const oppositeContentPlxToRight = [
        {
            start: 'self',
            startOffSet: '40vh',
            duration: 500,
            properties: [
                {
                    startValue: 0,
                    endValue: 100,
                    unit: '%',
                    property: 'width'
                }
            ]
        }
    ];
    const oppositeContentPlxToLeft = [
        {
            start: 'self',
            startOffSet: '40vh',
            duration: 500,
            properties: [
                {
                    startValue: 100,
                    endValue: 0,
                    unit: '%',
                    property: 'margin-left'
                }
            ]
        }
    ]
    return (
        <Container sx={{backgroundColor: '#4682B4', width: '100%', alignItems : 'center', display: 'flex', maxWidth: '100%!important', gap: '2%'}}>
        <Grid container sx={{backgroundColor: '#4682B4', width: '100%', alignItems : 'center', display: 'flex'}}>
            <Intro/>
            <Grid container sx={
                {
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: '20px',
                    width: '100%', 
                    maxWidth: '100%!important', 
                    padding: '20%', 
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }
            } className='sample-con'>
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
            </Grid>
            <Grid container sx={{display: 'flex'}}>
                <Plx parallaxData={textContainer}>
                    <Grid item sx={{display: 'flex'}}>
                        <List component='nav'>
                            <ListItem>
                                <ListItemText primary="Sample1">
                                </ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary="Sample1">
                                </ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary="Sample1">
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Container className="third-container" sx={
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
                    </Grid>
                </Plx>
            </Grid>
            <Grid container className='last-container' sx={{display: 'flex', width: '100%', maxWidth: '100%!important', padding: '20%'}}>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant='h3'>
                                2022
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Plx parallaxData={oppositeContentPlxToRight}>
                                <Container sx={{border: '1px solid black', padding: '50px'}}>
                                    Hello
                                    Hello
                                    Hello
                                    Hello
                                </Container>
                            </Plx>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant='h3'>
                                2016
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Plx parallaxData={oppositeContentPlxToLeft}>
                                <Container sx={{border: '1px solid black', padding: '50px'}}>
                                    Hello
                                    Hello
                                    Hello
                                    Hello
                                </Container>
                            </Plx>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>  
        </Grid>
        </Container>
    );
     
};


export default Main;