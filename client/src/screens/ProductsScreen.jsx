import { Box, Center, Wrap, WrapItem } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productActions'


const ProductsScreen = () => {
    const dispatch = useDispatch();
    const {loading, error, products, pagination} = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);




    return (
        <> 
            {products.length > 1 && (
                <Box>
                    <Wrap spacing='30px' justify='center' minHeight='80vh' mx={{base: '12', md: '20', lg: '32'}}>
                        {/*NO ES UNA BUENA PRÁCTICA EXHIBIR EL PRODUCTO COMO ABAJO: UN PRODUCTO A LA VEZ*/}
                        {/* <ProductCard product={data[0]} loading= {false}/>*/}
                        {/* LA BUENA PRÁCTICA ES EXHIBIR A TODOS AL MISMO TIEMPO*/}
                        {products.map((product) => (
                            <WrapItem key={product._id}>
                                <Center w='250px' h='450px'>
                                    <ProductCard product={product} loading= {loading}/>
                                </Center>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            )}
        </>
    );
};

export default ProductsScreen;