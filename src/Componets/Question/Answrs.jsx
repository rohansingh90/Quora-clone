import React, { useEffect, useState } from "react";
import { auth, storage } from "../../Firebase/Firebase";
import Avatar from "react-avatar";
import { useLocation } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";

const Answrs = () => {
  const location = useLocation();
  const [answersdata, setanswersdata] = useState([]);

  const answeDoc = doc(
    storage,
    "questions",
    `${location?.state?.id ? location?.state?.id : Math.random()}`
  );
  const answerRef = collection(answeDoc, "answers");

  const getAnswers = async () => {
    try {
      const data = await getDocs(answerRef);
      const filterdata = data?.docs?.map((doc) => ({
        ...doc?.data(),
        id: doc?.id,
      }));
      setanswersdata(filterdata);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {answersdata.map((data) => (
        <div
          key={data.id}
          className="mb-6 p-4 rounded-lg bg-white shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            {auth?.currentUser ? (
              <Avatar
                name={auth?.currentUser?.email}
                size="35"
                round={true}
                src={auth?.currentUser?.photoURL}
                className="shrink-0"
              />
            ) : (
              <Avatar name="user" size="35" round={true} className="shrink-0" />
            )}
            {/* User Info */}
            <h1 className="text-sm sm:text-base text-gray-700 font-semibold">
              {auth?.currentUser?.email
                ? auth.currentUser.email.substring(
                    0,
                    auth.currentUser.email.indexOf("@")
                  )
                : "Anonymous"}
            </h1>
          </div>
          {/* Answer Content */}
          <p className="mt-4 text-gray-600 text-sm sm:text-base">{data.ans}</p>
        </div>
      ))}
    </div>
  );
};

export default Answrs;
