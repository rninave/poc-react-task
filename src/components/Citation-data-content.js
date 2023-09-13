import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cards from '../components/cards';
import { Button } from '@mui/material';



function CitationData() {
  return (
    <Box index={0}>
    {/* Overview of collection  */}
    <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
    <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs.</p>

    {/* Detailed Description  */}
    <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
    <Box className="border-grey-light p-16 w-50 border-radius-4px detailed-description" sx={{ mb: 3 }}>
      <Box className="mb-12 d-md-flex align-items-center">
        <Typography className="font-weight-600 w-50">
          Modality
        </Typography>
        <p><span className="d-md-none">:</span> CT, MRI, RTSTRUCT</p>
      </Box>
      <Box className="mb-12 d-md-flex align-items-center">
        <Typography className="font-weight-600 w-50">
          No of Subjects
        </Typography>
        <p><span className="d-md-none">:</span> 4072</p>
      </Box>
      <Box className="mb-12 d-md-flex align-items-center">
        <Typography className="font-weight-600 w-50">
          No of Studies
        </Typography>
        <p><span className="d-md-none">:</span> 4980</p>
      </Box>
      <Box className="mb-12 d-md-flex align-items-center">
        <Typography className="font-weight-600 w-50">
          No of Images
        </Typography>
        <p><span className="d-md-none">:</span> 7943</p>
      </Box>
      <Box className="d-md-flex align-items-center">
        <Typography className="font-weight-600 w-50">
          Total Image Size
        </Typography>
        <p><span className="d-md-none">:</span> 470 GB</p>
      </Box>

    </Box>

    {/* card  */}
    <Cards />

  </Box>
  );
}
export default CitationData;