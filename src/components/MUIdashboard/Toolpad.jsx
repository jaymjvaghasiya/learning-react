import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { Box, createTheme, styled } from '@mui/material';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';

import { useDemoRouter } from '../../hooks/DemoRouter';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { Integrations } from './Integrations';
import { Orders } from './Orders';
import { Sales } from './Sales';
import { Traffic } from './Traffic';

export const Toolpad = (props) => {

    const NAVIGATION = [
        {
            kind: 'header',
            title: 'Main items',
        },
        {
            segment: 'dashboard',
            title: 'Dashboard',
            icon: <DashboardIcon />,
        },
        {
            segment: 'dashboard/orders',
            title: 'Orders',
            icon: <ShoppingCartIcon />,
        },
        {
            kind: 'divider',
        },
        {
            kind: 'header',
            title: 'Analytics',
        },
        {
            segment: 'dashboard/reports',
            title: 'Reports',
            icon: <BarChartIcon />,
            children: [
                {
                    segment: 'sales',
                    title: 'Sales',
                    icon: <DescriptionIcon />,
                },
                {
                    segment: 'traffic',
                    title: 'Traffic',
                    icon: <DescriptionIcon />,
                },
            ],
        },
        {
            segment: 'dashboard/integrations',
            title: 'Integrations',
            icon: <LayersIcon />,
        },
    ]

    const demoTheme = createTheme({
        colorSchemes: { light: true, dark: true },
        cssVariables: {
            colorSchemeSelector: 'class',
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 600,
                lg: 1200,
                xl: 1536,
            },
        },
    })

    // const router = useDemoRouter('/dashboard');
    const navigate = useNavigate();

    const router = {
        navigate: (to) => navigate(to),
    };

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
        >
            <Box sx={{ width: '100vw', overflowX: 'hidden' }}>
                <DashboardLayout>
                    <PageContainer>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/reports/sales' element={<Sales />} />
                            <Route path='/reports/traffic' element={<Traffic />} />
                            <Route path='/integrations' element={<Integrations />} />
                        </Routes>
                    </PageContainer>
                </DashboardLayout>
            </Box>
        </AppProvider>
    )
}
