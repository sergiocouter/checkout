import React from 'react'

import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'

export function Delivery () {
    return(
        <Box p={4} sx={{ width: 500 }}>
            <Typography variant="body1" p={2}>
                    Escolha o método de entrega
            </Typography>
            <Select placeholder='Escolha o método de entrega' defaultValue={10}>
                <MenuItem value={10}>Escolha...</MenuItem>
                <MenuItem value={20}>Fedex</MenuItem>
                <MenuItem value={30}>Amazon</MenuItem>
                <MenuItem value={40}>Correios</MenuItem>
            </Select>
        </Box>    
    )
}