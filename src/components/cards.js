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
import Link from '@mui/material/Link';

// images 
import Card_img_1 from '../assets/images/card-img-1.png';
import Copy from '../assets/images/copy-icon.svg';
import Download_Blue from '../assets/images/download-blue.svg';


export default function Cards() {
  return (
    <Box className="mb-24">
      <Box className="d-md-flex align-items-center justify-content-between mb-16">
       <Box className="font-weight-600 font-20 mb-md-16">Overview of collection</Box>
       <Link href="#" className="d-flex align-items-center text-decoration-none btn btn-primary-link border-0">Download Sample
        <Image className="ml-8" src={Download_Blue} />
       </Link>
      </Box>
        <Grid container spacing={2}>
          <Grid md={4} sm={6} xs={12}>
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
                <Button className='p-0 btn btn-primary-link font-14 border-0' size="small">Open DICOM link
                  <Image className='ml-8' src={Copy} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid  md={4} sm={6} xs={12}>
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
          <Grid  md={4} sm={6} xs={12}>
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
    </Box>

  );
}
