import { mercadopagoService } from "../services/payments/mercadopago.service.js";


export const createPayment = async(req, res, next) => {
    try {
        const { cart } = req.body;
        const preferenceResult = await mercadopagoService(cart);
        console.log(preferenceResult)

        res.status(200).json({
            message: "Preferencia de compra creada con éxito",
            statusCode: 200,
            data: preferenceResult
        });
    } catch (error) {
        next(error);
    }
};

