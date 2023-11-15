import React, { useState }  from 'react'
import './Card.css'
 




function Card(props) {
  const shopcard = [
    {   img: './img/14.jpeg',

    product: 'iPhone 14 pro',
      price: '$211',
    },
    {img:'./img/14.jpeg',
      product: 'iPhone 14 max',
      price: '$222',
    },
    {img:'./img/20.jpeg',
      product: 'samsung Galaxy Note 20',
      price: '$112',
    },
    {img:'./img/s21..jpeg',
      product: 'Samsung Galaxy S21',
      price: '$212',
    },
    {img:'./img/one1.jpeg',
      product: 'OnePlus 10 Pro',
      price: '$200',
    },
    {img:'./img/11.jpeg',
      product: 'OnePlus 11 Pro',
      price: '$122',
    },
    {img:'./img/12.jpeg',
      product: 'OnePlus 12',
      price: '$222',
    },
    {img:'./img/12.jpeg',
      product: 'OnePlus 10 Pro 5G',
      price: '$122',
    },
    {   img: './img/14.jpeg',

    product: 'iPhone 14 pro',
      price: '$222',
    },
    
    
  ];

  const [Added, setAdded] = useState(Array(shopcard.length).fill(false));
  const [count, setCount] = useState(0);

  const handleAddToCart = (index) => {
    const updatedAdded = [...Added];
    updatedAdded[index] = !updatedAdded[index];
    setAdded(updatedAdded);
    setCount((count) => count + 1);
     const data =  count + 1
    props.ondata(data);
  };

  const handleRemoveFromCart = (index) => {
    const updatedAdded = [...Added];
    updatedAdded[index] = false;
    setAdded(updatedAdded);
    setCount((count) => count - 1);
    const data =  count - 1
    props.ondata(data);
  };

  return (
    <div className='container'>
    {shopcard.map((item, index) => (
      <div key={index} className="card">
        <div>
          <img src={item.img} alt={item.product} /> {/* Display the image */}
        </div>
        
        <div className='itames'>
          Product: {item.product}
        </div>
       
        <div className='itames'>
          Price: {item.price}
        </div>
        <div className='itames'>
        {Added[index] ? (
          <button onClick={() => handleRemoveFromCart(index)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => handleAddToCart(index)}>
            Add to Cart
          </button>
        )}
        </div>
      </div>
    ))}
  </div>
  );
}

export default Card;