import emailjs from "emailjs-com";
import "./Contact.css";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_418rhh9",
        "template_2fqmuf7",
        e.target,
        "user_m0JLrArxjn3mElbvi39fd"
      )
      .then((response) => {
        // console.log(response);
        alert('We have Recieved your Message');
        document.querySelector('#exampleInputEmail1').value = '';
        document.querySelector('#username').value = '';
        document.querySelector('#textArea').value = '';
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="Contact container col-11 col-md-8 col-lg-6 wow fadeInDown">
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label for="username" className="form-label">
              Full Name
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              required
            />
          </div>

          <div className="mb-3">
            <label for="textArea" className="form-label">
              Tell Us whatever you want
            </label>
            <textarea
              name="textArea"
              type="text"
              className="form-control"
              id="textArea"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
