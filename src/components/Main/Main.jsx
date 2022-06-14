import React from 'react';
import '../Main/Main';
import './Main.css';
// import pic from '../../assets/restaurant.jpeg';
import pic2 from '../../assets/BechResto.jpeg';

const Main = () => {
  return (
    <div className='cap'>
      <h1>About Us</h1>
      <section id='bio'>
        <ul>
          <li className='table-bio'>
            <div>
              <p className='text'>
                Reethi Beach Resort is located on the beautiful and lush
                Fonimagoodhoo Island, surrounded by a beautiful lagoon and
                white, sandy beach. It offers a fitness center, a massage parlor
                and a spa and wellness center. It features 5 restaurants and 5
                bars.
              </p>
            </div>
            <img
              src={pic2}
              alt='Vince Picture'
              width='300'
              height='300'
              className='pictureBio'
            />
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Main;
