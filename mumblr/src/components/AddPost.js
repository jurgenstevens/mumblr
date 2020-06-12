// S64 Use rfce to set up the AddPost component. For S65 switch to App.js
import React from "react";
// S67: Copy and paste the forms code from the Bootstrap website. Change class attribute to className, the for's to htmlFor and add slashes at the ends of inputs.
const AddPost = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="authorname">Author Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Author Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" placeholder="Title" />
        </div>
        <div class="form-group">
          <label htmlFor="post">Post</label>
          <textarea class="form-control" rows="2"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
