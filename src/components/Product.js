import { Heading, Card, CardBody, CardFooter, Image, Stack, Text, Button } from '@chakra-ui/react';
import { useState } from "react";

const Product = ({item}) => {
    const [ showInfo, setShowInfo ] = useState(true);

    const toggleShow = () => {
        setShowInfo(!showInfo);
    }

    return (
        <Card>
            <CardBody>
                <Image src={item.img} alt={item.title} 
                h='100px'
                w='100%'
                objectFit='cover' mb='20px' />

                <Stack mt='6' spacing='3'>
                    <Heading size='md' textTransform='capitalize'> { item.title } </Heading>
                    <Text>
                        { showInfo ? item.desc.substring(0, 75) : item.desc }...
                        <Button variant='link' colorScheme='blue' onClick={ toggleShow }>
                            { showInfo ? "show more" : "show less"}
                        </Button>  
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter pt='0' display='flex' alignItems='center' justifyContent='space-between'>
                <Text textTransform='capitalize'>{ item.category }</Text>
                <Text>
                    <strong>Price:</strong> { item.price }/-
                </Text>
            </CardFooter>
        </Card>
    )
}

export default Product;