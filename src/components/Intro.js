//Introduction component for Main Content
import Plx from "react-plx";
import { 
    Container, 
    Box, 
    Typography, 
    useMediaQuery, 
    Grid, 
    Slide, 
    ThemeProvider, 
    createTheme,
    responsiveFontSizes
} from "@mui/material";
import profilePic from '../imgs/me.jpg';

let theme = createTheme();

// [theme.typography.h1, theme.typography.h2, theme.typography.h3,theme.typography.h4,theme.typography.h5,theme.typography.h6]= {
//     fontSize: '1.2rem',
//     '@media (min-width: 600px)' : {
//         fontSize: '1.5rem',
//     },
//     [theme.breakpoints.up('md')]: {
//         fontSize: '2.4rem',
//     },
//  };

theme = responsiveFontSizes(theme);


const Intro = () => {
    const desktop = useMediaQuery('(min-width: 1025px)');
    const tabletMD = useMediaQuery('(max-width: 1024px) and (min-width: 901px)');
    const tabletSM = useMediaQuery('(max-width: 900px) and (min-width: 769px)');
    const mobileSM = useMediaQuery('(max-width: 768px)');
    
    // var variantType = '';
    var alignment = '';
    if (desktop) {
        alignment = 'left';
    }else if (tabletMD) {
        alignment = 'left'
    }else if (tabletSM) {
        alignment = 'center';
    }else if (mobileSM) {
        alignment = 'center';
    }

    const textPlxData = [
        {
            start: "self",
            end: '.third-container',
            properties: [
              {
                startValue: 100,
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
            start: '.third-container',
            end: '.sample-con',
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
    return (
        <>
        <ThemeProvider theme={theme} sx={{height : '100vh'}}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '50%'}}>
                <Slide in direction="right" timeout={700}>
                        <Box component='img' src={profilePic}
                            sx={{
                                width: 'inherit',
                                borderRadius: '50%',
                            }}
                            />
                </Slide>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Slide in direction="left" timeout={700}>
                            <Typography variant="h4" align={alignment} >
                                Hi! My name is Dandrev,
                            </Typography>
                    </Slide> 
                    <Slide in direction="left" timeout={700}>
                            <Typography variant='h2' align={alignment}>
                                a &lt;WEB DEVELOPER/&gt;
                            </Typography>
                    </Slide>
                </Grid>
            </Grid>
        </ThemeProvider>
        </>
    );
};

export default Intro;