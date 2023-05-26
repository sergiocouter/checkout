import './App.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import {Etapas} from "./components/Etapas"

function App() {

  return (
    
    
    <Box m={10}>
      <Typography variant="h2" p={2} sx={{display: "flex", justifyContent: "center", fontWeight: 700, color: "#FFFFFF"}}>
          Sistema de Checkout
      </Typography>
      <Etapas />
    </Box>
  )
}

export default App
