import { useState } from 'react';
import './App.css';
import data from './data/data';
import Product from './components/Product';

function App() {
  const [ menuData, setMenuData ] = useState(data);

  let uniqueItems = data.map( menu => menu.category );
  let menuItems = ['all', ...new Set(uniqueItems)];

  const menuHandler = (id) => {
    if(id === 'all'){
      return setMenuData(data);
    }
    const newMenu = data.filter( item => item.category === id )
    setMenuData(newMenu)
  }
  
  return (
    <div className='wrapper'>
      <h1>Menu</h1>
      <ul className='menu'>
        { 
          menuItems.map( (link) => 
          {
            return (
              <li key={link.id} onClick={ () => menuHandler(link) }>{ link }</li>
            ) 
          }
        )
        }
      </ul>
      <ul>
        {
          menuData.map(item => <Product item={item} />)
        }
      </ul>
    </div>
  );
}

export default App;
