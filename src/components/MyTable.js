
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Img from '../assets/images/download.svg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const MyTable = () => {
  const rows = [
    { id: 1, name: 'Radiation Therapy', size: "23 GB" },
    { id: 2, name: 'Scan & images', size: "112 GB" },
    { id: 3, name: 'Clinical Trial', size: "45 GB" },
    { id: 4, name: 'Research', size: "77 GB " },
  ];

  return (
    <Box className="home-table">
        <TableContainer component={Paper}>
          <Table className="deta-set-table">
            <TableHead>
              <TableRow>
                <TableCell className="min-w-200px font-weight-600 bg-primary-light font-16" >Dataset type</TableCell>
                <TableCell className="min-w-180px font-weight-600 bg-primary-light font-16">size</TableCell>
                <TableCell className="min-w-180px font-weight-600 bg-primary-light font-16 text-align-center">Download Dataset</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell className="min-w-200px"> <Link className="btn text-decoration-none btn-primary-link" href="#">{row.name}</Link></TableCell>
                  <TableCell className="min-w-180px font-16">{row.size}</TableCell>
                  <TableCell className="min-w-180px text-align-center"> <Link href="#"><Image src={Img} alt='myimg' /></Link> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Box>

  );
}

export default MyTable;


