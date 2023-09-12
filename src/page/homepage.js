// import React from "react";
"use client"
import * as React from 'react';
import Image from 'next/image';
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
import Cards from '../components/cards';



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
                  <Box className="text-grey" sx={{ mx: 1, pr: 1, borderRight: '1px solid #DBDADA' }}>1032</Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box className="text-secondary" sx={{ fontWeight: 600, mr: 1 }}>Downloads</Box>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" transform="translate(0 0.00100708)" fill="white" />
                    <path d="M13.75 16.251C14.4404 16.251 15 15.6914 15 15.001C15 14.3107 14.4404 13.751 13.75 13.751C13.0596 13.751 12.5 14.3107 12.5 15.001C12.5 15.6914 13.0596 16.251 13.75 16.251Z" fill="#636262" />
                    <path d="M18.6106 14.6751C18.2243 13.6913 17.5579 12.8425 16.6939 12.2339C15.83 11.6252 14.8064 11.2835 13.75 11.251C12.6936 11.2835 11.67 11.6252 10.8061 12.2339C9.94206 12.8425 9.27566 13.6913 8.88944 14.6751L8.75 15.001L8.88944 15.3269C9.27566 16.3107 9.94206 17.1595 10.8061 17.7681C11.67 18.3768 12.6936 18.7185 13.75 18.751C14.8064 18.7185 15.83 18.3768 16.6939 17.7681C17.5579 17.1595 18.2243 16.3107 18.6106 15.3269L18.75 15.001L18.6106 14.6751ZM13.75 17.501C13.2555 17.501 12.7722 17.3544 12.3611 17.0797C11.95 16.805 11.6295 16.4145 11.4403 15.9577C11.2511 15.5009 11.2016 14.9982 11.298 14.5133C11.3945 14.0283 11.6326 13.5829 11.9822 13.2332C12.3319 12.8836 12.7773 12.6455 13.2623 12.549C13.7472 12.4526 14.2499 12.5021 14.7067 12.6913C15.1635 12.8805 15.554 13.201 15.8287 13.6121C16.1034 14.0232 16.25 14.5066 16.25 15.001C16.2493 15.6638 15.9856 16.2993 15.5169 16.768C15.0483 17.2366 14.4128 17.5003 13.75 17.501Z" fill="#636262" />
                    <path d="M7.5 10.626H4.375V11.876H7.5V10.626Z" fill="#636262" />
                    <path d="M11.875 7.50101H4.375V8.75101H11.875V7.50101Z" fill="#636262" />
                    <path d="M11.875 4.37601H4.375V5.62601H11.875V4.37601Z" fill="#636262" />
                    <path d="M13.75 1.25101H2.5C2.16877 1.25196 1.85139 1.38397 1.61717 1.61818C1.38296 1.85239 1.25096 2.16978 1.25 2.50101V17.501C1.25096 17.8322 1.38296 18.1496 1.61717 18.3838C1.85139 18.618 2.16877 18.7501 2.5 18.751H7.5V17.501H2.5V2.50101H13.75V9.37601H15V2.50101C14.999 2.16978 14.867 1.85239 14.6328 1.61818C14.3986 1.38397 14.0812 1.25196 13.75 1.25101Z" fill="#636262" />
                  </svg>

                  <Box className="text-grey" sx={{ mx: 1, pr: 1, borderRight: '1px solid #DBDADA' }}>1032</Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.12601C20 3.82913 19.4414 4.47757 18.5 5.00101C17.3633 5.62991 15.668 6.07523 13.7227 6.20804C13.5781 6.13773 13.4336 6.07132 13.2812 6.01273C11.7422 5.36819 9.69531 5.00101 7.5 5.00101C7.17578 5.00101 6.85938 5.00882 6.54297 5.02444L6.5 5.00101C5.55859 4.47757 5 3.82913 5 3.12601C5 1.39944 8.35938 0.00100708 12.5 0.00100708C16.6406 0.00100708 20 1.39944 20 3.12601ZM6.27734 6.29398C6.67578 6.26663 7.08594 6.25101 7.5 6.25101C9.92969 6.25101 12.0859 6.73148 13.457 7.47757C14.4258 8.00491 15 8.66116 15 9.37601C15 9.53226 14.9727 9.6846 14.918 9.83304C14.7383 10.3487 14.2539 10.8213 13.5508 11.2198C13.5469 11.2237 13.5391 11.2237 13.5352 11.2276C13.5234 11.2354 13.5117 11.2393 13.5 11.2471C12.1328 12.0049 9.95312 12.4971 7.5 12.4971C5.17188 12.4971 3.08984 12.0557 1.71094 11.3604C1.63672 11.3252 1.56641 11.2862 1.49609 11.2471C0.558594 10.7276 0 10.0791 0 9.37601C0 8.01663 2.08594 6.85648 5 6.43069C5.41016 6.3721 5.83594 6.32523 6.27734 6.29398ZM16.25 9.37601C16.25 8.52054 15.8359 7.81741 15.3086 7.29007C16.4141 7.11819 17.4258 6.84476 18.2852 6.48929C18.9219 6.22366 19.5156 5.89554 20 5.49319V6.87601C20 7.62991 19.3555 8.32523 18.2891 8.86429C17.7188 9.15335 17.0234 9.39944 16.2422 9.58694C16.2461 9.51663 16.25 9.45023 16.25 9.37991V9.37601ZM15 13.126C15 13.8291 14.4414 14.4776 13.5 15.001C13.4297 15.0401 13.3594 15.0752 13.2852 15.1143C11.9102 15.8096 9.82812 16.251 7.5 16.251C5.04688 16.251 2.86719 15.7588 1.5 15.001C0.558594 14.4776 0 13.8291 0 13.126V11.7432C0.488281 12.1455 1.07813 12.4737 1.71484 12.7393C3.25781 13.3838 5.30469 13.751 7.5 13.751C9.69531 13.751 11.7422 13.3838 13.2852 12.7393C13.5898 12.6143 13.8828 12.4698 14.1602 12.3135C14.3984 12.1807 14.6211 12.0323 14.832 11.876C14.8906 11.833 14.9453 11.7862 15 11.7432V13.126ZM16.25 13.126V10.8643C16.9922 10.7002 17.6758 10.4932 18.2852 10.2393C18.9219 9.97366 19.5156 9.64554 20 9.24319V10.626C20 11.0362 19.8047 11.4463 19.418 11.833C18.7812 12.4698 17.6602 12.9932 16.2422 13.333C16.2461 13.2666 16.25 13.1963 16.25 13.126ZM7.5 17.501C9.69531 17.501 11.7422 17.1338 13.2852 16.4893C13.9219 16.2237 14.5156 15.8955 15 15.4932V16.876C15 18.6026 11.6406 20.001 7.5 20.001C3.35938 20.001 0 18.6026 0 16.876V15.4932C0.488281 15.8955 1.07813 16.2237 1.71484 16.4893C3.25781 17.1338 5.30469 17.501 7.5 17.501Z" fill="#FFC700" />
                  </svg>

                  <Box className="text-grey" sx={{ ml: 1 }}>Gold Standard 10.0</Box>
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

            <TabComp />
          </Box>

          {/* Overview of collection  */}
          <Box index={0}>
            <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
            <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body such as the kidney, spine, and brain. Not everyone infected with TB bacteria becomes sick.</p>

            {/* Detailed Description  */}
            <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
            <Box className="border-grey-light p-16 w-50 border-radius-4px" sx={{ mb: 3 }}>
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

      {/* card slider */}
      <Cards />

      <MyTable />


    </Box>
  );
}

