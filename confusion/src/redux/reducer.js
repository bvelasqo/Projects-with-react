import { PLATOS } from "../shared/platos";
import { LIDERES } from "../shared/lideres";
import { PROMOCIONES } from "../shared/promociones";
import { COMENTARIOS } from "../shared/comentarios";

export const initialState = {
    platos: PLATOS,
    comentarios: COMENTARIOS,
    lideres: LIDERES,
    promociones: PROMOCIONES
};
export const Reducer = (state = initialState, action) => {
    return state;
};