import { Box, Grid, styled } from '@mui/material'
import React from 'react'

export const Dashboard = () => {

  const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Your content */}

      <Grid container spacing={1}>
        <Grid size={6}>
          <Skeleton height={400}>CHART</Skeleton>
        </Grid>
        <Grid size={6}>
          <Skeleton height={400}>TABLE</Skeleton>
        </Grid>
      </Grid>
    </Box>
  )
}
