import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

export function Produtos(){

    return(
        <Box p={4}>
            <Paper elevation={3}>
                <Typography variant="body1" p={2}>
                    Playstation 5
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="body1" mt={2} p={2}>
                    Notebook Asus
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="body1" mt={2} p={2}>
                    Cadeira Gamer
                </Typography>
            </Paper>
        </Box>
    )
    
}