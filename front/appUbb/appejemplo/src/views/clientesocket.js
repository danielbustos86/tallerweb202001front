import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {
    CardContent,
    CardActions,
    Grid,
    Button,
    CardHeader,
    Typography,
    makeStyles,
    CircularProgress,
    Card,
    TextField,
    Paper,
    Collapse
} from "@material-ui/core";

const ENDPOINT = "http://localhost:9000";

function Clientesocket() {
    const [response, setResponse] = useState([]);
    const [mensaje, setmensaje] = useState("");
    const socket = socketIOClient(ENDPOINT);
    useEffect(() => {



        socket.on("reproduce", (mensaje) => {
            setResponse(prev => [...prev, mensaje.mensaje]);

        });

    }, []);

    const enviar = () => {

        socket.emit("recibe", {
            mensaje: mensaje
        });
        alert("MENSAJE ENVIADO");
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item md={4}>
                    <TextField
                        multiline={true}
                        value={response}
                    />

                    
                </Grid>

                
                
            </Grid>

            <TextField
                onChange={(event) => setmensaje(event.target.value)}
                value={mensaje}
            />
            <button onClick={enviar}>ENVIAR</button>
        </div>
    );
}

export default Clientesocket;