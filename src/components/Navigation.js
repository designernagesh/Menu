import { SimpleGrid, Button } from '@chakra-ui/react';

const Navigation = ({menuItems, menuHandler}) => {
    return (
        <SimpleGrid w='70%' spacing={4} mr='15px' templateColumns='repeat(4, 1fr)'>
            { 
            menuItems.map( (link) => {
                    return (
                        <Button key={link.id} textTransform='capitalize' onClick={ () => menuHandler(link) } colorScheme='blue'>{ link }</Button>
                    )
                })
            }
        </SimpleGrid>
    )
}

export default Navigation;