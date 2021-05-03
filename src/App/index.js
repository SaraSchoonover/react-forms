import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/StudentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <>
    <Router>
    <NavBar />
    <Routes students={students}
    setStudents={setStudents} />
    </Router>
    </>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import StudentCard from '../components/StudentCard';

// import { getStudents } from '../helpers/data/StudentData';
// import StudentForm from '../StudentForm';

// function App() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     getStudents().then((resp) => setStudents(resp));
//   }, []);

//   return (
//     <>
//       <StudentForm
//       formTitle='Add Student'
//       setStudents={setStudents}
//       />
//       <hr/>
//       <div className="card-container">
//         {students.map((studentInfo) => (
//           <StudentCard
//             key={studentInfo.firebaseKey}
//             firebaseKey={studentInfo.firebaseKey}
//             name={studentInfo.name}
//             teacher={studentInfo.teacher}
//             grade={Number(studentInfo.grade)}
//             setStudents={setStudents}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;
