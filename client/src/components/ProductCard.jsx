import {Box, Image, Text, Badge, Flex, IconButton, Skeleton, Icon} from '@chakra-ui/react';
import {BiExpand} from 'react-icons/bi';
import React from 'react'
import { scale } from 'framer-motion';

const ProductCard = ({product, loading}) => {
    return <Skeleton isLoaded={!loading} _hover={{size: 1.5}}>
        <Box
        _hover={{transform: 'scale(1.1)', transitionDuration: '0.5s'}}
        borderWidth={'1px'}
        overflow={'hidden'}
        p='4'
        shadow={'md'}>
            <Image />
            {product.stock < 5 ? (
                <Badge colorScheme='yellow'> Apenas {product.stock} itens disponibles</Badge>
            ) : product.stock < 1 ? (
                <Badge colorScheme='red'>Agotado</Badge>
            ) : (
                <Badge colorScheme='green'>Hay stock</Badge>
                )}
                {product.productIsNew && (
                    <Badge ml='2' colorScheme='purple'>
                        Nuevo
                    </Badge>
                )}
                <Text noOfLines={1} fontSize='xl' fontWeight='semibold' mt='2'>
                    {product.brand} {` `} {product.name}
                </Text>
                <Text noOfLines={1} fontSize='md' color='gray.500'>
                    {product.subtitle}
                </Text>
                <Flex justify='space-between' alignItems='center' mt='2'>
                    <Badge colorScheme='cyan'>{product.category}</Badge>
                    <Text fontSize='xl' fontWeight='semibold' color='cyan.500'>
                        AR${' '}{product.price}
                    </Text>
                </Flex>
                <IconButton icon={<BiExpand size='20'/>} colorScheme='cyan' size='sm' />
        </Box>
    </Skeleton>    
};

export default ProductCard;