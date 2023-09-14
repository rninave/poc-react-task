import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, CardActions, Button, Grid, Box, CardMedia } from '@mui/material';
import Image from 'next/image';
import Card_img_1 from '../assets/images/card-img-1.png';
import Copy from '../assets/images/copy-icon.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow: <ArrowBackIcon />,
        nextArrow: <ArrowForwardIcon />,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const carouselData = [
        {
            title: 'Subject ID : RDDC342',
            image: Card_img_1,
            description: ' CT Scan of Pulmonary tuberculosis',
        },
        {
            title: ' Subject ID : RDDC342',
            image: Card_img_1,
            description: ' CT Scan of Pulmonary tuberculosis',
        },
        {
            title: ' Subject ID : RDDC342',
            image: Card_img_1,
            description: ' CT Scan of Pulmonary tuberculosis',
        },
        {
            title: ' Subject ID : RDDC342',
            image: Card_img_1,
            description: ' CT Scan of Pulmonary tuberculosis',
        },
    ];

    return (

        <Container>
                <Box sx={{ mb: 4 }} className="sub-carousel">
                <Slider {...settings} >
                    {carouselData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} >
                            <Card className="card sub-card " >
                                <CardMedia className='mb-16'>
                                    <Image className='sub-card-img' src={item.image} alt={item.title} />
                                </CardMedia>
                                <CardContent className='p-0 mb-8'>
                                    <Typography variant="font-14" >{item.title}</Typography>
                                    <Typography variant="font-14">{item.description}</Typography>
                                </CardContent>
                                <CardActions className='p-0'>
                                    <Button className='p-0' size="small">Open DICOM link
                                        <Image className='ml-8' src={Copy} />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Slider>
        </Box>
            </Container>
    );
}

export default Carousel;
