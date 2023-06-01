import { useState } from "react";

const Product = ({item}) => {
    const [ showInfo, setShowInfo ] = useState(true);

    const toggleShow = () => {
        setShowInfo(!showInfo);
    }

    return (
        <li className='card' key={item.id}>
            <span className='price'>Rs. {item.price}/-</span>
            <img src={item.img} alt={item.title} />
            <h3 className='title'>{ item.title }</h3>
            <span>{ item.category }</span>
            <p>
                { showInfo ? item.desc.substring(0, 75) : item.desc }...
                <button className='button-more' onClick={ toggleShow }>
                { showInfo ? "show more" : "show less"}
                </button>
            </p>
        </li>
    )
}

export default Product;