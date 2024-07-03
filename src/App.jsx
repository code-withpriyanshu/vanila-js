import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserName } from "./components/UserName";
import { QuestionList } from "./components/QuestionList";

function App() {
  const [username, changeUsername] = useState("");
  const [questionlist, setQuestionlist] = useState([]);
  const [acceptStatus, setAcceptStatus] = useState([]);

  console.log(username);

  function letsgo() {
    fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const submission = data.recentSubmissions;
        const questions = submission.map((each) => each.title);
        const statuses = submission.map((element) => element.statusDisplay);
        setQuestionlist(questions);
        setAcceptStatus(statuses);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <Navbar />
      <UserName changeUsername={changeUsername} />
      <button onClick={letsgo}>Let's Stalk</button>
      <QuestionList questionlist={questionlist} acceptStatus={acceptStatus} />
    </>
  );
}

export default App;
