import { useState } from "react";
const initialStudents = [
  {
    id: 1,
    name: "Ahmed",
    subject: "Math",
    grade: 90,
    passed: true,
  },
  {
    id: 2,
    name: "Aly",
    subject: "History",
    grade: 45,
    passed: false,
  },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("all");
  const [sortType, setSortType] = useState("");

  let filteredStudents;
  if (filter === "all") {
    filteredStudents = students;
  } else if (filter === "passed") {
    filteredStudents = students.filter((student) => student.passed);
  } else if (filter === "failed") {
    filteredStudents = students.filter((student) => !student.passed);
  }

  function filterHandler(filterType) {
    setFilter(filterType);
  }

  let sortedStudents;
  if (sortType === "") {
    sortedStudents = filteredStudents;
  } else if (sortType === "name") {
    sortedStudents = filteredStudents
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "hGrade") {
    sortedStudents = filteredStudents.slice().sort((a, b) => b.grade - a.grade);
  } else if (sortType === "lGrade") {
    sortedStudents = filteredStudents.slice().sort((a, b) => a.grade - b.grade);
  }
  function sortHandler(sortType) {
    setSortType(sortType);
  }
  function addHandler(student) {
    setStudents((curStudents) => [...curStudents, student]);
  }

  return (
    <div className="app-container">
      <Header onFilter={filterHandler} />
      <div className="main-content">
        <AddStudentForm students={students} onSubmit={addHandler} />
        <StudentList students={sortedStudents} onSort={sortHandler} />
      </div>
      <Statistics students={sortedStudents} />
    </div>
  );
}

function Header({ onFilter }) {
  return (
    <div className="header">
      <h1>Student Grade Tracker</h1>
      <div className="filter-group">
        <Button className={"filter-btn all"} onClick={() => onFilter("all")}>
          All
        </Button>
        <Button
          className={"filter-btn passed"}
          onClick={() => onFilter("passed")}
        >
          Passed
        </Button>
        <Button
          className={"filter-btn failed"}
          onClick={() => onFilter("failed")}
        >
          Failed
        </Button>
      </div>
    </div>
  );
}

function AddStudentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");

  function onAddStudent(e) {
    e.preventDefault();
    if (!name || !subject || !grade) return alert("Please fill all the fields");
    let id = crypto.randomUUID();
    const passed = grade >= 50 ? true : false;
    const newStudent = { id, name, subject, grade, passed };
    console.log(newStudent);
    onSubmit(newStudent);
    setName("");
    setSubject("");
    setGrade("");
  }

  return (
    <div className="student-form-container">
      <h2>Add New Student</h2>
      <form onSubmit={(e) => onAddStudent(e)}>
        <div className="form-group name-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group subject-group">
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group grade-group">
          <label>Grade</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => {
              101 > e.target.value > 0
                ? setGrade(+e.target.value)
                : setGrade("");
            }}
          />
        </div>
        <Button className={"submit-btn"}>Add Student</Button>
      </form>
    </div>
  );
}

function StudentList({ students, onSort }) {
  return (
    <div className="student-list-container">
      <div className="list-header">
        <h2>Students List</h2>
        <select
          className="sort-select"
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="" selected disabled hidden>
            Sort by
          </option>
          <option value="name">Name</option>
          <option value="hGrade">Highest Grade</option>
          <option value="lGrade">Lowest Grade</option>
        </select>
      </div>
      <div className="cards-grid">
        {students.map((student) => (
          <StudentCard student={student} key={student.id} />
        ))}
      </div>
    </div>
  );
}
function StudentCard({ student }) {
  const cradColors = ["teal", "purple", "blue", "orange"];
  let randomCardColor =
    cradColors[Math.floor(Math.random() * cradColors.length)];
  return (
    <div className="student-card">
      <div className="card-top">
        <div className={`avatar ${randomCardColor}`}>{student.name[0]}</div>
        <div className="card-info">
          <h3>{student.name}</h3>
          <p>Subject: {student.subject}</p>
          <p>Grade: {student.grade}</p>
        </div>
      </div>
      <div className="card-bottom">
        <span className={`badge ${student.passed ? "passed" : "failed"}`}>
          {student.passed ? "passed" : "failed"}
        </span>
        <div className="card-actions">
          <button className="icon-btn edit">✎</button>
          <button className="icon-btn delete">🗑</button>
        </div>
      </div>
    </div>
  );
}

function Statistics({ students }) {
  return (
    <div className="statistics-container">
      <StateCard cardType="total">
        <h4>Total Students</h4>
        <p>{students.length}</p>
      </StateCard>

      <StateCard cardType="passed">
        <h4>Passed</h4>
        <p>{students.filter((student) => student.passed).length}</p>
      </StateCard>

      <StateCard cardType="failed">
        <h4>Failed</h4>
        <p>{students.filter((student) => !student.passed).length}</p>
      </StateCard>

      <StateCard cardType="average">
        <h4>Average Grade</h4>
        <p>
          {Math.floor(
            students.reduce((sum, student) => sum + student.grade, 0) /
              students.length,
          )}
        </p>
      </StateCard>
    </div>
  );
}

function StateCard({ children, cardType }) {
  return <div className={`stat-card ${cardType}`}>{children}</div>;
}

function Button({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
export default App;
