import {useState} from "react";

import Box from "@mui/material/Box"
import Steper from "@mui/material/Stepper"
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"

import { Produtos } from "../Produtos";
import { Delivery } from "../Delivery";
import { Pagamento } from "../Pagamento";


export function Etapas(){

    const [etapas, setEtapas] = useState(0);

    function proximo () {
        setEtapas(etapas + 1); 
    }

    function voltar () {
        setEtapas(etapas - 1);
    }

    return(
        <Box p={4} sx={{ width: 980, backgroundColor: '#ECF8F9' }}>
            <Steper alternativeLabel activeStep={etapas}>
                <Step>
                    <StepLabel>Produtos do carrinho</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Método de entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pagamento</StepLabel>
                </Step>
            </Steper>

            {etapas === 0 && <Produtos />}
            {etapas === 1 && <Delivery />}
            {etapas === 2 && <Pagamento />}

            {etapas === 3 ? 
            (<Alert severity="success">Compra efetuada com sucesso!! Check seu e-mail.</Alert>)
            : (
                <>
                    <Button onClick={voltar}>Voltar</Button>
                    <Button onClick={proximo}>Próximo</Button>
                </>
            )}
    
        </Box>
    )

}