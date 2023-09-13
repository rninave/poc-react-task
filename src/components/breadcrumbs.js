import * as React from 'react';
import Image from 'next/image';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function HomeBreadcrumbs() {
    return (
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
                    <Link className="text-body-color" underline="none" href="#">
                        Pulmonary Tuberculosis
                    </Link>
                </Breadcrumbs>
            </Container>
        </Box>
    );
}


