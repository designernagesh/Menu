import { useState } from 'react';
import data from './data/data';
import Product from './components/Product';
import { Container, SimpleGrid, Box, Heading, Flex } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';

function App() {
  const [ menuData, setMenuData ] = useState(data);
  const [ searchItem, setSearchItem ] = useState("");

  let uniqueItems = data.map( menu => menu.category );
  let menuItems = ['all', ...new Set(uniqueItems)];

  const menuHandler = (id) => {
    if(id === 'all'){
      return setMenuData(data);
    }
    const newMenu = data.filter( item => item.category === id )
    setMenuData(newMenu)
  }
  
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    let newMenuData = menuData.filter( x => x.title.toLowerCase().includes(searchItem.toLocaleLowerCase()))
    setMenuData(newMenuData);
  }

  return (
    <Container maxW='5xl' mt='30px'>
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>Restaurant Menu</Heading>
        <Flex mb='10px'>
          <Navigation menuItems={menuItems} menuHandler={menuHandler} />
          <SearchBar searchItem={searchItem} searchHandler={searchHandler} />
        </Flex>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {
            menuData.map(item => <Product item={item} />)
          }
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default App;
