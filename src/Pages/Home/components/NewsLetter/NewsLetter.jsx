// NewsletterComponent.js
import { Button, TextField } from '@mui/material';
import  { useState } from 'react';
import SectionHeader from '../../../../components/shared/SectionHeader';


const NewsletterComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubscribe = () => {
    // Implement your subscription logic here
    console.log(`Subscribed with email: ${email}`);
    // You can make an API call or handle the subscription in your preferred way
  };

  return (
    <div className=' w-[40vw] mx-auto my-48' >
        <SectionHeader header={"Newsletter"}></SectionHeader>
        <TextField sx={{color:"red",backgroundColor:"white"}}
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField sx={{color:"red",backgroundColor:"white"}}
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField sx={{color:"red",backgroundColor:"white"}}
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubscribe}>
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterComponent;
