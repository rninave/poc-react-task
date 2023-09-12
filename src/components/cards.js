import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

// images 
import Card_img_1 from '../assets/images/card-img-1.png';
import Copy from '../assets/images/copy-icon.svg';


export default function Cards() {
  return (
    <Box className="mb-24">
      <Container>
        <Grid container spacing={2} className="border-bottom-grey-light pb-16">
          <Grid xs={4}>
            <Card className='card sub-card' sx={{ maxWidth: 345 }}>
              <CardMedia className='mb-16'>
                <Image className='sub-card-img' src={Card_img_1} />
              </CardMedia>
              <CardContent className='p-0 mb-8'>
                <Typography gutterBottom variant="font-14" component="div">
                  Subject ID : RDDC342
                </Typography>
                <Typography className="font-14">
                  CT Scan of Pulmonary tuberculosis
                </Typography>
              </CardContent>
              <CardActions className='p-0'>
                <Button className='p-0' size="small">Open DICOM link
                  <Image className='ml-8' src={Copy} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card className='card sub-card' sx={{ maxWidth: 345 }}>
              <CardMedia className='mb-16'>
                <Image className='sub-card-img' src={Card_img_1} />
              </CardMedia>
              <CardContent className='p-0 mb-8'>
                <Typography gutterBottom variant="font-14" component="div">
                  Subject ID : RDDC342
                </Typography>
                <Typography className="font-14">
                  CT Scan of Pulmonary tuberculosis
                </Typography>
              </CardContent>
              <CardActions className='p-0'>
                <Button className='p-0' size="small">Open DICOM link
                  <Image className='ml-8' src={Copy} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card className='card sub-card' sx={{ maxWidth: 345 }}>
              <CardMedia className='mb-16'>
                <Image className='sub-card-img' src={Card_img_1} />
              </CardMedia>
              <CardContent className='p-0 mb-8'>
                <Typography gutterBottom variant="font-14" component="div">
                  Subject ID : RDDC342
                </Typography>
                <Typography className="font-14">
                  CT Scan of Pulmonary tuberculosis
                </Typography>
              </CardContent>
              <CardActions className='p-0'>
                <Button className='p-0' size="small">Open DICOM link
                  <Image className='ml-8' src={Copy} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>

  );
}
