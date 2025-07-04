import { setProducts, setLoading, setError, setPagination } from "../slices/product";
import axios from 'axios';


export const getProducts = (page, favouriteToggle) => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await axios.get(`/api/products`);
        const {products, pagination} = data;
        dispatch(setProducts(products))
        dispatch(setPagination(pagination));
    } catch (error) {
        dispatch(setError(
            error.response && error.response.data.message 
            ? error.response.data.message
            :error.message 
            ? error.message
            : 'Ha pasado un error inesperado. Por favor, intente luego (PRODUCT ACTIONS.JS)'
            )
        );
    }
};