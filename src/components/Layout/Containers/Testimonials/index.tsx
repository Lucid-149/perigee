const reviews = [
  {
    title: "Fantastic tour!",
    rating: 5,
    comment: "This tour exceeded my expectations. Our guide was knowledgeable and friendly, and the sights were breathtaking. I would highly recommend this tour to anyone visiting the area.",
  },
  {
    title: "Average experience",
    rating: 3.5,
    comment: "The tour was okay, but nothing special. Our guide was friendly enough, but didn't provide much in-depth information about the sights. It was an average experience overall.",
  },
  {
    title: "Unforgettable custom tour",
    rating: 5,
    comment: " We booked a custom tour with this company and it was the highlight of our trip. They took us to off-the-beaten-path places and created a personalized experience for us. Our guide was fantastic and we learned so much. Highly recommend!",
  },
  {
    title: "Disappointing tour",
    rating: 2,
    comment: "Unfortunately, this tour didn't live up to our expectations. The sights were overcrowded and our guide didn't seem very enthusiastic. We were hoping for a more immersive experience, but it fell short.",
  },
  {
    title: "Great value for money",
    rating: 4,
    comment: "This tour was a great value for the price. Our guide was informative and the sights were beautiful. The only downside was that it felt a bit rushed, but overall a good experience.",
  },
];

import React from "react";
import Rating from "../../../util/rating";
export default function Testimonials() {
  const [currentReview, setCurrentReview] = React.useState(0);
  const [currentReviewTitle, setCurrentReviewTitle] = React.useState( "");
  const [currentReviewRating, setCurrentReviewRating] = React.useState(0);
  const [currentReviewComment, setCurrentReviewComment] = React.useState( "");

  const nextReview = () => {
    if (currentReview === reviews.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };

  function prevReview() {
    if (currentReview === 0) {
      setCurrentReview(reviews.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  }

  function setReview(index: number) {
    setCurrentReview(index);
  }

  function setReviewTitle(title: string) {
    setCurrentReviewTitle(title);
  }

  function setReviewRating(rating: number) {
    setCurrentReviewRating(rating);
  }

  function setReviewComment(comment: string) {
    setCurrentReviewComment(comment);
  }

  React.useEffect(() => {
    setReviewTitle(reviews[currentReview].title);
    setReviewRating(reviews[currentReview].rating);
    setReviewComment(reviews[currentReview].comment);
  }, [currentReview]);
  

  return (
    <div
      className={` h-screen w-screen overflow-hidden flex flex-col justify-center items-center px-3 $`}
    >
      <div className="flex flex-col justify-center items-center glass p-5 bg-inherit rounded-xl w-full max-w-3xl">
        <h3 className="font-bold text-center text-5xl">What our customers say</h3>
        <p className="text-center">
          We are proud of our customers and their feedback
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-1 glass max-w-3xl p-5 rounded-xl bg-inherit h-2/3">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center backdrop-blur-sm p-5 w-full rounded-xl">
            <h4 className=" font-bold text-center">
              {currentReviewTitle}
            </h4>
            <Rating rating={currentReviewRating} />
          </div>
          <p className="text-center h-2/3 pt-10">{currentReviewComment}</p>
        </div>
        <div className="flex flex-row justify-center items-center mt-10">
          <button
            className="px-4 py-2 text-lg font-bold text-center glass rounded-l-xl hover:scale-105"
            onClick={prevReview}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 text-lg font-bold text-center glass rounded-r-xl hover:scale-105"
            onClick={nextReview}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-10">
        {reviews.map((review, index) => (
          <button
            className="px-4 py-2 text-lg font-bold text-center rounded-xl hover:scale-105"
            onClick={() => setReview(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

// Path: clientApp/src/components/Layouts/Containers/Testimonials/utils.module.cs
