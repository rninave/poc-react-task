import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cards from '../components/cards';
import { Button } from '@mui/material';
import MyTable from '@/components/MyTable';


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
        <Box index={0}>
          {/* Overview of collection  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
          <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body such as the kidney, spine, and brain. Not everyone infected with TB bacteria becomes sick.</p>

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

          {/* Request access  */}
          <Box className="d-md-flex align-items-center justify-content-between border-grey-light p-16 border-radius-4px mb-16">
                <Box className="font-weight-600 mb-md-16">Request Access to the Owner of the dataset to view/download the contents</Box>
                <Box className="min-w-200px text-align-md-end">
                   <Button className="btn btn-primary">Request access</Button>
                </Box>
              </Box>

              {/* table  */}
              <MyTable />

        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box index={0}>
          {/* Overview of collection  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
          <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body such as the kidney, spine, and brain. Not everyone infected with TB bacteria becomes sick.</p>

          {/* Detailed Description  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
          <Box className="border-grey-light p-16 w-50 border-radius-4px detailed-description" sx={{ mb: 3 }}>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Modality
              </Typography>
              <p><span className="d-md-none">:</span> CT, MRI, RTSTRUCT</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Subjects
              </Typography>
              <p><span className="d-md-none">:</span> 4072</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Studies
              </Typography>
              <p><span className="d-md-none">:</span> 4980</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Images
              </Typography>
              <p><span className="d-md-none">:</span> 7943</p>
            </Box>
            <Box className="d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Total Image Size
              </Typography>
              <p><span className="d-md-none">:</span> 470 GB</p>
            </Box>

          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box index={0}>
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
          <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs,</p>

          {/* Detailed Description  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
          <Box className="border-grey-light p-16 w-50 border-radius-4px detailed-description" sx={{ mb: 3 }}>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Modality
              </Typography>
              <p><span className="d-md-none">:</span> CT, MRI, RTSTRUCT</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Subjects
              </Typography>
              <p><span className="d-md-none">:</span> 4072</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Studies
              </Typography>
              <p><span className="d-md-none">:</span> 4980</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Images
              </Typography>
              <p><span className="d-md-none">:</span> 7943</p>
            </Box>
            <Box className="d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Total Image Size
              </Typography>
              <p><span className="d-md-none">:</span> 470 GB</p>
            </Box>

          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box index={0}>
          {/* Overview of collection  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
          <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body such as the kidney, spine, and brain. Not everyone infected with TB bacteria becomes sick.</p>

          {/* Detailed Description  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
          <Box className="border-grey-light p-16 w-50 border-radius-4px detailed-description" sx={{ mb: 3 }}>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Modality
              </Typography>
              <p><span className="d-md-none">:</span> CT, MRI, RTSTRUCT</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Subjects
              </Typography>
              <p><span className="d-md-none">:</span> 4072</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Studies
              </Typography>
              <p><span className="d-md-none">:</span> 4980</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Images
              </Typography>
              <p><span className="d-md-none">:</span> 7943</p>
            </Box>
            <Box className="d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Total Image Size
              </Typography>
              <p><span className="d-md-none">:</span> 470 GB</p>
            </Box>

          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box index={0}>
          {/* Overview of collection  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Overview of collection</Box>
          <p className='mb-24'>Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body such as the kidney, spine, and brain. Not everyone infected with TB bacteria becomes sick.</p>

          {/* Detailed Description  */}
          <Box className="font-weight-600 font-20" sx={{ mb: 2 }}>Detailed Description</Box>
          <Box className="border-grey-light p-16 w-50 border-radius-4px detailed-description" sx={{ mb: 3 }}>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Modality
              </Typography>
              <p><span className="d-md-none">:</span> CT, MRI, RTSTRUCT</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Subjects
              </Typography>
              <p><span className="d-md-none">:</span> 4072</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Studies
              </Typography>
              <p><span className="d-md-none">:</span> 4980</p>
            </Box>
            <Box className="mb-12 d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                No of Images
              </Typography>
              <p><span className="d-md-none">:</span> 7943</p>
            </Box>
            <Box className="d-flex align-items-center">
              <Typography className="font-weight-600 w-50">
                Total Image Size
              </Typography>
              <p><span className="d-md-none">:</span> 470 GB</p>
            </Box>

          </Box>
        </Box>
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