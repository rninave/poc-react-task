// import React from "react";
"use client"
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Header from '../components/header'
import TabComp from '../components/TabComp'
import MyTable from '@/components/MyTable';


export default function Homepage() {
  return (
    <Box className="padding-top-80">
     
        <Header />
       
      <Box sx={{ mb: 3 }}>
        <Container>
          <Breadcrumbs className="home-breadcrumbs" aria-label="breadcrumb">
            <Link underline="none" href="#">
              Home page
            </Link>
            <Link underline="none" href="#">
              Access data catalog
            </Link>
            <Link underline="none" href="#">
              Tuberculosis data collections
            </Link>
            <Link underline="none" href="#">
              Pulmonary Tuberculosis
            </Link>
          </Breadcrumbs>
        </Container>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Container>
          <Grid container spacing={2} className="border-bottom-grey-light pb-16">
            <Grid xs={8}>
              <Box className="h1" sx={{ fontWeight: '400', mb: 3 }}>Pulmonary Tuberculosis</Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex' }}>
                  <Box className="text-secondary" sx={{ fontWeight: 600, mr: 1 }}>Downloads</Box>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" transform="translate(0 0.00100708)" fill="white" />
                    <path d="M16.25 15.001V17.501H3.75V15.001H2.5V17.501C2.5 17.8325 2.6317 18.1505 2.86612 18.3849C3.10054 18.6193 3.41848 18.751 3.75 18.751H16.25C16.5815 18.751 16.8995 18.6193 17.1339 18.3849C17.3683 18.1505 17.5 17.8325 17.5 17.501V15.001H16.25Z" fill="#101010" />
                    <path d="M16.25 8.75101L15.3687 7.86976L10.625 12.6073V1.25101H9.375V12.6073L4.63125 7.86976L3.75 8.75101L10 15.001L16.25 8.75101Z" fill="#101010" />
                  </svg>
                  <Box sx={{ mx: 1, pr: 1, borderRight: '1px solid #DBDADA' }}>1032</Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box className="text-secondary" sx={{ fontWeight: 600, mr: 1 }}>Downloads</Box>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" transform="translate(0 0.00100708)" fill="white" />
                    <path d="M16.25 15.001V17.501H3.75V15.001H2.5V17.501C2.5 17.8325 2.6317 18.1505 2.86612 18.3849C3.10054 18.6193 3.41848 18.751 3.75 18.751H16.25C16.5815 18.751 16.8995 18.6193 17.1339 18.3849C17.3683 18.1505 17.5 17.8325 17.5 17.501V15.001H16.25Z" fill="#101010" />
                    <path d="M16.25 8.75101L15.3687 7.86976L10.625 12.6073V1.25101H9.375V12.6073L4.63125 7.86976L3.75 8.75101L10 15.001L16.25 8.75101Z" fill="#101010" />
                  </svg>
                  <Box sx={{ mx: 1, pr: 1, borderRight: '1px solid #DBDADA' }}>1032</Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box className="text-secondary" sx={{ fontWeight: 600, mr: 1 }}>Downloads</Box>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" transform="translate(0 0.00100708)" fill="white" />
                    <path d="M16.25 15.001V17.501H3.75V15.001H2.5V17.501C2.5 17.8325 2.6317 18.1505 2.86612 18.3849C3.10054 18.6193 3.41848 18.751 3.75 18.751H16.25C16.5815 18.751 16.8995 18.6193 17.1339 18.3849C17.3683 18.1505 17.5 17.8325 17.5 17.501V15.001H16.25Z" fill="#101010" />
                    <path d="M16.25 8.75101L15.3687 7.86976L10.625 12.6073V1.25101H9.375V12.6073L4.63125 7.86976L3.75 8.75101L10 15.001L16.25 8.75101Z" fill="#101010" />
                  </svg>
                  <Box sx={{ ml: 1 }}>1032</Box>
                </Box>
              </Box>

            </Grid>
            <Grid xs={2}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* tab  */}
      <Box sx={{ width: '100%' }}>
        <Container>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            {/* <Tabs aria-label="basic tabs example">
              <Tab label="Overview" />
              <Tab label="Guidelines" />
              <Tab label="Citation & data usage policy" />
              <Tab label="Acknowledgements" />
              <Tab label="Advisory board" />
            </Tabs> */}
            <TabComp/>
          </Box>

          {/* Overview of collection  */}
          <Box index={0}>
            <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
            <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body such as the kidney, spine, and brain. Not everyone infected with TB bacteria becomes sick.</p>

            {/* Detailed Description  */}
            <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
            <Box className="border-grey-light p-16 w-50 border-radius-4px">
              <Box className="mb-12 d-flex align-items-center">
                <Typography className="font-weight-600 w-50">
                  Modality
                </Typography>
                <p>: CT, MRI, RTSTRUCT</p>
              </Box>
              <Box className="mb-12 d-flex align-items-center">
                <Typography className="font-weight-600 w-50">
                  No of Subjects
                </Typography>
                <p>: 4072</p>
              </Box>
              <Box className="mb-12 d-flex align-items-center">
                <Typography className="font-weight-600 w-50">
                  No of Studies
                </Typography>
                <p>: 4980</p>
              </Box>
              <Box className="mb-12 d-flex align-items-center">
                <Typography className="font-weight-600 w-50">
                  No of Images
                </Typography>
                <p>: 7943</p>
              </Box>
              <Box className="d-flex align-items-center">
                <Typography className="font-weight-600 w-50">
                  Total Image Size
                </Typography>
                <p>: 470 GB</p>
              </Box>

            </Box>
          </Box>

        </Container>
      </Box>

     <MyTable/>

    </Box>
  );
}

