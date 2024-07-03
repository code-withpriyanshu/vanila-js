export function QuestionList({ questionlist, acceptStatus }) {
  return (
    <div className="questionlist">
      <ul id="add">
        {questionlist.map((question, index) => (
          <Question
            key={index}
            index={index}
            question={question}
            bool={acceptStatus[index] === "Accepted" ? "green" : "yellow"}
            acceptStatus={acceptStatus}
          />
        ))}
      </ul>
    </div>
  );
}
function Question({ question, bool, acceptStatus, index }) {
  const formattedQuestion = question.split(" ").join("-").toLowerCase();
  return (
    <li className={bool}>
      <a
        href={`https://leetcode.com/problems/${formattedQuestion}/description/`}
      >
        {question}
      </a>
      <p>{acceptStatus[index]}</p>
    </li>
  );
}
