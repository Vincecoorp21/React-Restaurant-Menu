import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookForm.css';

const BookForm = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    date: '',
  });
  let usersInfo = JSON.parse(localStorage.getItem('USERS')) || [];

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState('');

  let navigate = useNavigate();

  const initialState = {
    username: '',
    email: '',
    date: '',
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

    if (data.username.length < 3) {
      setMessage('Name must be at least 3 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('se lanza el formulario', data);

    saveData();
    clearState();
    setMessage('formulario enviado con éxito');

    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const saveData = () => {
    usersInfo.push(data);
    localStorage.setItem('USERS', JSON.stringify(usersInfo));
  };

  return (
    <div>
      <h2 class='title-h2'>Booking a table?</h2>
      <section class='contact-flex'>
        <div className='contact-form'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='name'
              value={data.username}
              onChange={handleInputChange}
              name='username'
            />
            <input
              type='email'
              placeholder='email'
              value={data.email}
              onChange={handleInputChange}
              name='email'
            />
            <input
              type='date'
              placeholder='Book a table'
              value={data.date}
              onChange={handleInputChange}
              name='date'
            />

            <button className='boton' type='submit' disabled={btnDisabled}>
              Enviar
            </button>
            {message}
          </form>
        </div>
        <div class='contact-frame'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid'
            width='400'
            height='300'
            frameBorder='0'
            style={{ border: 0 }}
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          />
        </div>
      </section>
    </div>
  );
};

export default BookForm;
