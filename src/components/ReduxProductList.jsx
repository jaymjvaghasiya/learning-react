import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Container
} from '@mui/material'

export const ReduxProductList = () => {
    const projectTheme = useSelector((state) => state.theme.theme)

    const theme = createTheme({
        palette: {
            mode: projectTheme,
        },
    })

    const dispatch = useDispatch()

    const [data, setData] = useState([
        { id: 101, name: "TV", price: 1200, description: "128 GB" },
        { id: 102, name: "FRIDGE", price: 800, description: "500 GB" },
        { id: 103, name: "MONITOR", price: 3000, description: "256 GB" }
    ])

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>Product Display</Typography>
                <Grid container spacing={3}>
                    {data.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body2">{product.description}</Typography>
                                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                                        <strong>Price:</strong> ${product.price}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{ mt: 2 }}
                                        onClick={() => dispatch(addToCart(product))}
                                    >
                                        ADD TO CART
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
