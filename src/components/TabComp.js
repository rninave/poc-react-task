import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Overview from '@/components/Overview-content';
import Guidelines from '@/components/Guidelines-content';
import CitationData from '@/components/Citation-data-content';
import Acknowledgements from '@/components/Acknowledgements-content';
import AdvisoryBoard from '@/components/Advisory-board-content';


function TabComp() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="home-tabs">
      <Tabs value={value} onChange={handleChange} aria-label="Tabs">
        <Tab label="Overview" />
        <Tab label="Guidelines" />
        <Tab label="Citation & data usage policy" />
        <Tab label="Acknowledgements" />
        <Tab label="Advisory board" />
      </Tabs>

      <TabPanel className="test" value={value} index={0}>
        <Overview />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Guidelines />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <CitationData />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Acknowledgements />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <AdvisoryBoard />
      </TabPanel>
    </Box>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default TabComp;