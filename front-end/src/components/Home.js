import "./Home.css";
import Home_section from './images/Home_section.jpg'
import FooterP from './Footer';
import Navbar from './Navbar';
import { Typography } from '@mui/material';

function Home() {
    return(
        <>
            <Navbar/>
            <div className="Yellow"></div>
            <Typography variant="h2" align="center" fontFamily={"Helvetica Neue"}>
                Welcome To Amhara Bank
            </Typography>
            <div style={{display:'flex', justifyContent:'stretch'}}>
                <img src={Home_section } alt=''/>
            </div>
            <div className="open"><a href='./MultiStep'>Click Here to Open Amhara Bank Account</a></div>
            <FooterP/>
        </>
    );
};
export default Home;