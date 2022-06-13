import React from 'react';
import '../Home/Home.css';
//import logo from '../../assets/goku.jpg';

const Home = props => {
  const dish = props.dishes.map(dish => {
    return (
      <section className='projects'>
        <div key={dish.id} className='card'>
          {/* <li>
          <img src={dish.image}></img>
        </li> */}
          <div className='container'>
            <img src={dish.image} alt='ok'></img>
            <h2>{dish.name}</h2>
            <br />
            <p>{dish.description}</p>
            <br />
            <p>{dish.price}$</p>
          </div>
        </div>
      </section>
    );
  });

  return (
    <div>
      <p>{dish}</p>
    </div>
  );
};

export default Home;
