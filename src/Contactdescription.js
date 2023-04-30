import './App.css';
import Form from './Form';


function ContactDescription() {
  
//The main content inside Contact Page

  return (
<main className="servicecontainer">
<section className="description-text">
<h1>Contact Us for a free quote</h1>
<p>Give us a call on 01234 567 890 or 09876 543 210. </p>
<p>Or drop us a request by filling in the form below </p>
<Form/>  {/* Form inserted*/}
<h4>Anything else, please feel free to contact me on info@njshar.rocks </h4>
</section>

</main>
  );
}

export default ContactDescription;