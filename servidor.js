import express from "express";
import morgan from "morgan";
import enrutadorCanes from "./ruta/rutas.js";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/can", enrutadorCanes);

servidor.get( function (req, res) {
    res.json({mensaje: "works!"})
})

export default servidor;