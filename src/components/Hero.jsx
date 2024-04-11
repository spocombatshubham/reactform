import { MdCall, MdMessage } from "react-icons/md";

export default function Hero() {
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const text = formData.get('text');
    console.log(name, email, text);
  };

  return (
    <div className="herosection">
      <div className="form-container">
        <div className="form-topButtons">
          <button className="b1"><MdMessage /> VIA SUPPORT CHAT</button>
          <button className="b2"><MdCall /> CALL US</button>
          <button className="b3"><MdMessage /> VIA EMAIL FORM</button>
        </div>
      </div>
      <div className="actualForm">
        <form onSubmit={onSubmit}>
          <div className="formcontrol">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" />
            <div>
              
            </div>
            <br />
            <button type="submit" className="b2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
