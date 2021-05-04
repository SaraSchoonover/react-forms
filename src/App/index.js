import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import {
//   BrowserRouter as Router
// } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/StudentData';
import Routes from '../helpers/Routes';
import firebaseConfig from '../helpers/apiKeys';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // do something
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        // do something else
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar user={user} />
    <Routes
      students={students}
      setStudents={setStudents}
     />
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
