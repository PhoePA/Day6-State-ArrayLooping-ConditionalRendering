import Student from "./components/one/Student.jsx";
import Form from "./components/one/Form";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const addNewMember = (memInfo) => {
    setStudents([...students, memInfo]);
  };

  let contentSection = <p>There is No Member Yet!</p>;

  if (!students.length < 1) {
    contentSection = students.map((student) => (
      <Student name={student.name} live={student.live} key={student.name} />
    ));
  }
  return (
    <div className="App">
      {contentSection}
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
