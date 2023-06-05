import { InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({searchItem, searchHandler}) => {
    return (
        <form style={{ width: "100%" }}>
            <InputGroup>
            <Input type='search' value={searchItem} placeholder='Search Item by Title' borderColor='blue.500' onChange={ searchHandler }  />
            <InputRightElement>
                <FaSearch color='green.500' />
            </InputRightElement>
            </InputGroup>
        </form>
    )
}

export default SearchBar;