import express from 'express';
import Product from '../models/Product.js';

const productRoutes = express.Router()

const getProducts = async (req, res) => {
    /* parseInt ---> convierte string en numero entero, parametro es la página */
    const page = parseInt(req.params.page) //cantidad de páginas
    const perPage = parseInt(req.params.perPage) //cantidad de itens por página



    const products = await Product.find({});

    if(page && perPage) {
        /* Math.ceil --> retorna el entero mayor, 2.6 es 3 */
        const totalPages = Math.ceil(products.length / perPage);
        const startIndex = (page -1) * perPage;
        const endIndex = startIndex + perPage;
        const paginatedProducts = products.slice(startIndex, endIndex);
        res.json({products: paginatedProducts, pagination: { currentPage: page, totalPages} });
    } else {
        res.json({ products, pagination: {} });

    }

}

productRoutes.route('/:page/:perPage').get(getProducts);
productRoutes.route('/').get(getProducts);

export default productRoutes;