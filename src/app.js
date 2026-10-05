import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res)=>(
    res.status(200).json({
        mensaje: "API reservas CTPI funcionanso correctamente"
    })
))

// Crear ruta GET/ api/health
app.get('/api/health',(req, res)=>{
    res.status(200).json({
        status:'ok',
        servicio: 'sena-reservas-API',
    });
});


export default app;
