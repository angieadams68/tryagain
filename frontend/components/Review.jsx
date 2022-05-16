import { useNavigate } from "react-router-dom";


////////////////////// COMPONENT FUNCTION //////////////
const Review = (props) => {
  let navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    props.addNewReview(e);
    navigate("/reviews");
  };

  return (
    <div id="newDiv">
      <div className="leaveAReview">Leave a Review</div>
      <form className="form" onSubmit={submitData}>
        <input
          className="formName formInput"
          type="text"
          value={props.newReview.name}
          onChange={props.handleChange}
          name={"name"}
          placeholder={"your name"}
        />
        <input
          className="formReview formInput"
          type="text-area"
          value={props.newReview.review}
          onChange={props.handleChange}
          name={"review"}
          placeholder={"your review"}
        />
        <input
          className="formRating formInput"
          type="text"
          value={props.newReview.rating}
          onChange={props.handleChange}
          name={"rating"}
          placeholder={"1-10"}
        />
        <button className="formButton">Submit</button>
      </form>
    </div>
  );
};

export default Review;