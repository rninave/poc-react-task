import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Card_img_1 from '../assets/images/card-img-1.png';
import Copy from '../assets/images/copy-icon.svg';

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
        // Add more slides as needed
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {carouselData.map((item, index) => (
                    <div key={index}><Grid>
                        <Card className="carousel-card">
                            <Image src={item.image} alt={item.title} />
                            <CardContent>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="body2">{item.description}</Typography>
                            </CardContent>
                            <CardActions className='p-0'>
                                <Button className='p-0' size="small">Open DICOM link
                                    <Image className='ml-8' src={Copy} />
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Carousel;