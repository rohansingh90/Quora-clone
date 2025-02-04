import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, storage } from "../../Firebase/Firebase";

const AddQuestion = ({ setaddqus, setpost }) => {
  const [quest, setquest] = useState();

  const questionRef = collection(storage, "questions");

  const AddQuestion = () => {
    addDoc(questionRef, {
      questions: quest,
      email: auth?.currentUser?.email,
    });
    setaddqus(false);
    refreshQuestions();
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md sm:max-w-lg">
          {/* Modal Content */}
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => {
                  setpost(false);
                  setaddqus(false);
                }}
                className="self-end text-gray-500 hover:text-gray-700 text-xl mb-6"
              >
                X
              </button>

              {/* Input Field */}
              <input
                onChange={(e) => setquest(e.target.value)}
                type="text"
                placeholder="Start your question with Why, What, How, etc."
                className="w-full p-3 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Add Question Button */}
              <button
                onClick={AddQuestion}
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full py-2 w-full sm:w-1/3 self-center"
              >
                Add Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;



