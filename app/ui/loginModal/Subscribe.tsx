import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Subscribe() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/register')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result);
  //     });
  // }, []);
  // console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      // const response = await fetch('http://localhost:3000/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      const response = await axios.post('http://localhost:3000/api/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);

      if (response) {
        console.log('Signup succesfull');
      } else {
        console.error('Error during signup');
      }
    } catch (error) {
      console.error('Error while sending data', error);
    }
  };

  return (
    <>
      <h3 className="font-bold text-2xl mb-2 text-center">S'inscrire</h3>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Nom" name="name" required />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Prenom" name="firstname" required />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" className="grow" placeholder="Email" name="email" required />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow" placeholder="Password" name="password" required />
        </label>
        <select className="select select-bordered w-full" name="role_id" required>
          <option defaultValue="Etes vous une association?">Etes vous une association?</option>
          <option>Oui</option>
          <option>Non</option>
        </select>
        <button type="submit" className="btn bg-primary-color hover:bg-secondary-color w-full">
          S'inscrire
        </button>
      </form>
    </>
  );
}
