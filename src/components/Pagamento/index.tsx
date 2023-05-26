import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"

export function Pagamento (){
    return(
        <Card sx={{margin:2, padding:2}}>
            <Container sx={{display: "flex", justifyContent: "center",}}>
                <Stack component="form" sx={{width: "50vw"}} spacing={2} noValidate autoComplete="off">
                    <TextField type="number" label="Número do cartão" variant="standard" />
                    <TextField label="Nome no cartão" variant="standard" />
                    <TextField label="Validade do cartão" variant="standard" />
                    <TextField type="number" label="CVV" variant="standard" />
                </Stack>
            </Container>
        </Card>
    )
}