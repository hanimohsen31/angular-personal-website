import "./Contact.css";
export const Contact = () => {
  return (
    <>
    <div className="Contact container col-6">
    <form>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="mb-3">
            <label for="username" class="form-label" >Full Name</label>
            <input type="text" class="form-control" id="username" required/>
        </div>

        <div class="mb-3">
            <label for="textArea" class="form-label" >Tell Us whatever you want</label>
            <textarea type="password" class="form-control" id="textArea" required/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    </div>
    </>
  );
};
