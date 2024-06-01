import plantillasCanes from "../plantillas/plantillasCanes.js";

const controladorCanes = {
    crearCan: async (solicitud, respuesta) => {
        try {
            if (solicitud.body.foto === "") throw new Error("Falta la foto");
            if (solicitud.body.tipo === "") throw new Error("Falta el tipo");
            if (solicitud.body.nombre === "") throw new Error("Falta el nombre");
            if (solicitud.body.nombreCientifico === "") throw new Error("Falta el nombre cientifico");
            if (solicitud.body.paisDeOrigen === "") throw new Error("Falta el pais de origen");
            if (solicitud.body.fechaAproxDescubrimiento === "") throw new Error("Falta la fecha de descubrimiento");
            if (solicitud.body.caracter === "") throw new Error("Falta el caracter");
            if (solicitud.body.tipoDePelaje === "") throw new Error("Falta el tipo de pelaje");
            if (solicitud.body.tamanio === "") throw new Error("Falta el tamaño");
            if (solicitud.body.peso === "") throw new Error("Falta el peso");
           
           const nuevoCan = new plantillasCanes(solicitud.body);
           const canCreado = await nuevoCan.save();
            if (canCreado._id) {
            respuesta.json ({
               resultado: "bien",
               mensaje: "Can creado",
               datos: canCreado._id
            });
            }
            } catch (error) {
            respuesta.json ({
                resultado: "mal",
                mensaje: "Ocurrio un error al crear el can",
                datos: canCreado._id
            });
        }
    },
leerCan: async (solicitud, respuesta) => {
    try {
        const canEncontrado = await plantillasCanes.findById(solicitud.params.id)
        console.log(canEncontrado);
        if (canEncontrado._id)
        respuesta.json ({
            resultado: "bien",
            mensaje: "can leído",
            datos: canEncontrado
         });
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al leer el can",
            datos: error
        });
    }
    },
leerCanes: async (solicitud, respuesta) => {
    try {
        const todosLosCanes = await plantillasCanes.find();
            respuesta.json ({
            resultado: "bien",
            mensaje: "canes leídos",
            datos: todosLosCanes,
         });
        
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al leer todos los canes",
            datos: error,
        });
    }
},
actualizarCan: async (solicitud, respuesta) => {
    try {
        const canActualizado = await plantillasCanes.findByIdAndUpdate(solicitud.params.id, solicitud.body);
        console.log(canActualizado);
        if (canActualizado._id);
        respuesta.json ({
            resultado: "bien",
            mensaje: "can actualizado",
            datos: canActualizado._id,
         });
                
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al actualizar el can",
            datos: error,
        });
    }
},
eliminarCan: async (solicitud, respuesta) => {
    try {
        const canEliminado = await plantillasCanes.findByIdAndDelete(solicitud.params.id)
        if (canEliminado._id)
        respuesta.json ({
            resultado: "bien",
            mensaje: "can eliminado",
            datos: null
         });
    } catch (error) {
        respuesta.json ({
            resultado: "mal",
            mensaje: "Ocurrio un error al eliminar el can",
            datos: error
        });
}}
};

export default controladorCanes;
