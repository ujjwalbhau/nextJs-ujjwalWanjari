
import { useForm } from 'react-hook-form';
import School from '../models/School';
import { useState } from 'react';

export default function AddSchool() {
  const { register, handleSubmit, errors } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
   
    if (image) {
      const imagePath = `/schoolImages/${image.name}`; 
      data.image = imagePath;
    }

    // Create a new school in the database
    const schoolId = await School.create(data);
    console.log('School created with ID:', schoolId);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        School Name:
        <input type="text" name="name" ref={register({ required: 'School name is required' })} />
      </label>
      {errors.name && <p>{errors.name.message}</p>}

      <label>
        Address:
        <input type="text" name="address" ref={register({ required: 'Address is required' })} />
      </label>
      {errors.address && <p>{errors.address.message}</p>}

      <label>
        City:
        <input type="text" name="city" ref={register({ required: 'City is required' })} />
      </label>
      {errors.city && <p>{errors.city.message}</p>}

      <label>
        State:
        <input type="text" name="state" ref={register} />
      </label>

      <label>
        Contact Number:
        <input
          type="tel"
          name="contact"
          ref={register({ pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' } })}
        />
      </label>
      {errors.contact && <p>{errors.contact.message}</p>}

      <label>
        Email:
        <input
          type="email"
          name="email_id"
          ref={register({ pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })}
        />
      </label>
      {errors.email_id && <p>{errors.email_id.message}</p>}

      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
