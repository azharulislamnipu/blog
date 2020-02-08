import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
export default class Header extends Component {
    render() {
        return (
            <header className='header-area'>
           <Box color="text.primary" clone>
           <Button variant="contained" color="primary">
            Primary
            </Button>
            </Box>

            </header>
        )
    }
}
