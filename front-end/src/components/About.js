import React from "react";
import { AccountBalance, AutoAwesome, Diversity2, Savings } from "@mui/icons-material";
import { Typography,Grid, CssBaseline, Box, Container } from "@mui/material";

export default function About() {
    return(
        <Grid  container={true} spacing={1} marginTop={10} style={{ display: "inline", gap: "1rem" }}>       
           <React.Fragment>
                <CssBaseline />
                <Container  >
                    <Box sx={{ bgcolor: '#faf8e4', height: "100%", border: '2px solid #ffce03',
                        borderRadius: 4,
                        marginTop:3,
                        boxShadow: '0px 0px 5px #ccc', alignContent:"center", width:1200 }}>
                        <Grid   item alignItems="stretch" marginLeft={10} style={{ display: "flex"}}></Grid>
                            <Typography fontFamily={"Helvetica Neue"} variant="h1" align="center" ><AccountBalance fontSize="large"/>   About Amhara Bank</Typography>
                            <Typography fontFamily={"Helvetica Neue"} variant="body1" gutterBottom>
                                Amhara Bank aims to use the enabling conditions to provide an excellent service that appeals to the ever-diversifying and growing needs of customers that are demanding more from banks in the form of personalized and competitive banking services. 
                                The Bank intends to provide a secure, responsive, dynamic, and conducive banking atmosphere to customers with a commitment to values and unshaken confidence, deploying the best technology, standards, processes, and procedures where customer convenience is our significant importance to increase the stakeholders' value. 
                                The banking industry is considered as one of the most significant drivers in strengthening the soundness of an economy in terms of investment, job creation, facilitating the circulation of funds nationally and globally. Similarly, Amhara Bank will play its part in facilitating savings, investment, job creation, economic growth, and is also enthusiastic in discharging its Corporate Social Responsibilities.
                            </Typography>
                        <div>
                            <Typography fontFamily={"Helvetica Neue"} variant="h2" color={"primary"} ><Diversity2 fontSize="large"/>Ownership</Typography>
                            <Typography variant="body1" gutterBottom fontFamily={"Helvetica Neue"}>
                                Amhara Bank is a share company with more than 191,000 shareholders contributing birr 4.8 billion in paid-up capital and birr 7.9 billion in signed capital. The bank’s ability to work together to develop a successful business venture and commercial bank service is reflected in its diversified ownership.
                            </Typography>
                        </div>
                        <div>
                            <Typography fontFamily={"Helvetica Neue"} variant="h2"  color={"primary"} ><AutoAwesome fontSize="large"/>Vision</Typography>
                            <Typography variant="body1" gutterBottom fontFamily={"Helvetica Neue"}>
                                To be a leading and game changing bank in Africa.
                            </Typography>
                        </div>
                        <div>
                            <Typography fontFamily={"Helvetica Neue"} variant="h2"  color={"primary"} ><Savings fontSize="large"/>Mission</Typography>
                            <Typography variant="body1" gutterBottom fontFamily={"Helvetica Neue"}>
                                To provide a wide-ranging, accessible, reliable and innovative financial and non financial solutions through state of the art technology by competent and ethical professionals in a socially responsible manner with a client oriented culture.
                            </Typography>
                        </div>
                    </Box>
                </Container>
            </React.Fragment>
        </Grid>
)}
