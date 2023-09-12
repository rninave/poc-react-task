import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function BasicTabs() {

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs aria-label="basic tabs example">
        <Tab label="Overview" />
        <Tab label="Guidelines" />
        <Tab label="Citation & data usage policy" />
        <Tab label="Acknowledgements" />
        <Tab label="Advisory board" />
      </Tabs>
    </Box>
  );
}
