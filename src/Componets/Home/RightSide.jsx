
import React, { useEffect, useState } from "react";
import { auth, storage } from "../../Firebase/Firebase";
import Avatar from "react-avatar";
import { BsQuestionSquare } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { LuPencilLine } from "react-icons/lu";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import AddQuestion from "../Question/AddQuestion";

const RightSide = ({ search, menu }) => {
  const questionRef = collection(storage, "questions");
  const [questiondata, setquestiondata] = useState([]);
  const [commentToggle, setcommentToggle] = useState(false);
  const [questionID, setquestionID] = useState();
  const [answers, setanswers] = useState("");
  const [post, setpost] = useState(false);

  // Fetch all questions from Firestore
  const getquestion = async () => {
    try {
      const data = await getDocs(questionRef);
      const filterdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setquestiondata(filterdata);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getquestion(); // Load questions on component mount
  }, []);

  // Add an answer to Firestore
  const addanswers = async () => {
    try {
      const answeDoc = doc(storage, "questions", questionID);
      const answerRef = collection(answeDoc, "answers");
      await addDoc(answerRef, {
        ans: answers,
      });
      setanswers("");
      setcommentToggle(false);
    } catch (error) {
      console.error("Error adding answer:", error);
    }
  };

  // Filter questions based on search or menu
  const filteredQuestions = questiondata.filter((data) => {
    if (search) {
      return data?.questions?.toLowerCase().includes(search.toLowerCase());
    }
    if (menu) {
      return data?.questions?.toLowerCase().includes(menu.toLowerCase());
    }
    return true; // Show all questions if no search or menu is provided
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Ask or Share Input */}
      <div className="mt-5 border w-70 border-gray-200 bg-white sm:w-full rounded-lg shadow-sm pb-4 p-4">
        <div className="flex items-center gap-4 ">
          {auth?.currentUser ? (
            <Avatar
              name={auth?.currentUser?.displayName || "User"}
              size="35"
              round={true}
              src={auth?.currentUser?.photoURL}
            />
          ) : (
            <Avatar name="User" size="35" round={true} />
          )}
          <input
            onClick={() => setpost(true)}
            placeholder="What do you want to ask or share?"
            type="text"
            className="flex-grow p-3 bg-gray-100 h-10 rounded-full outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-8 justify-around mt-4">
          <div
            onClick={() => setpost(true)}
            className=" sm:flex items-center gap-2 cursor-pointer text-sm"
          >
            <BsQuestionSquare size={20} className=""/>
            <span>Ask</span>
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <HiOutlinePencilAlt size={20} />
            <span>Answer</span>
          </div>
          <div className="text-gray-400">|</div>
          <div
            onClick={() => setpost(true)}
            className="flex items-center gap-2 cursor-pointer text-sm"
          >
            <LuPencilLine size={20} className=""/>
            <span>Post</span>
          </div>
        </div>
      </div>

      {/* Question Cards */}
      {filteredQuestions.map((data) => (
        <div
          key={data.id}
          className="w-full bg-white mt-4 rounded-lg p-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <Avatar
              name={data?.email}
              size="35"
              round={true}
              src={data?.email}
            />
            <h1 className="text-sm font-medium">
              {data?.email?.substring(0, data?.email?.indexOf("@"))}
            </h1>
          </div>
          <div className="mt-4">
            <p className="font-bold text-sm">{data?.questions}</p>
            <hr className="mt-3" />
            <div className="flex items-center gap-4 mt-2">
              <FaRegComment
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  setquestionID(data?.id);
                  setcommentToggle(true);
                }}
              />
              <Link to={"/answer"} state={{ id: data?.id }}>
                <button className="px-4 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100">
                  Answer
                </button>
              </Link>
            </div>

            {/* Comment Input */}
            {commentToggle && questionID === data.id && (
              <div className="flex items-center gap-4 mt-4">
                <Avatar
                  name={auth?.currentUser?.email}
                  size="35"
                  round={true}
                />
                <input
                  onChange={(e) => setanswers(e.target.value)}
                  value={answers}
                  type="text"
                  placeholder="Add a comment"
                  className="flex-grow p-2 bg-gray-100 border rounded-full outline-none"
                />
                <button
                  onClick={addanswers}
                  className="px-4 py-2 text-sm text-white bg-blue-500 rounded-full"
                >
                  Add Comment
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Add Question Modal */}
      {post && <AddQuestion setpost={setpost} refreshQuestions={getquestion} />}
    </div>
  );
};

export default RightSide;












