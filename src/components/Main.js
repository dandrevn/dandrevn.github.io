//Main Content of Portfolio 
import { Box, Container, Slide, Typography } from "@mui/material";
import profilePic from '../imgs/me.jpg';
import {Image} from 'mui-image';
const Main = () => {
    return (
        <Container sx={{display: 'flex', width: '100%', maxWidth: 0}}>
        <Box sx={{width: '50%'}}>
            <Image src={profilePic}/>
        </Box>
        <Box sx={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Typography variant="h3">
                Hi, I'm Dandrev Nasi, a WordPress Developer. Let us work together!
            </Typography>
        </Box>
     </Container>
    );
     
};


export default Main;