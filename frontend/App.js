import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Review from "./components/Review";
import NewReview from "./components/NewReview";
import Games from "./components/Games";
import { useState, useEffect } from "react";
import axios from "axios";

////////////////////// COMPONENT FUNCTION //////////////
function App() {
  
  const [reviews, setReviews] = useState({
    name: "",
    review: "",
  })

  useEffect(() => {
    async function getReviews() {
      try {
        let res = await axios.get(`http://localhost:3001/reviews`);
        setReviews(res.data);
        // console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();

    
  }, []);


//////////////// FUNCTION FOR INPUT ////////////////////
  const addNewReview = async (e) => {
    e.preventDefault();
    const currentReviews = reviews;
    const createdReview = {
      ...newReview,
      name: newReview.name,
      review: newReview.review,
      rating: newReview.rating,
    };

    let response = await axios.post("http://localhost:3001/reviews",createdReview);
    currentReviews.push(response.data);
    setReviews(currentReviews);
    setNewReview({ name: "", review: "", rating: "" });
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1 className="upperHeader"> Let it Go!</h1>
      <Nav />
      <main>
        <Routes>
          <Route path="/reviews" element={<Review reviews={reviews} />} />
          <Route
            path="/reviews"
            element={
              <Review
                review={reviews}
                handleChange={handleChange}
                addNewReview={addNewReview}
              />
            }
          />
          
        </Routes>
      </main>
     
    </div>
  );
}

export default App;