import React from 'react';
import PropTypes from 'prop-types';
import StudentCard from '../components/StudentCard';
// import StudentForm from '../StudentForm';

function Students({ students, setStudents }) {
  return (
   <>
      <hr/>
       <div className="card-container">
         {students.map((studentInfo) => (
           <StudentCard
            key={studentInfo.firebaseKey}
            firebaseKey={studentInfo.firebaseKey}
             name={studentInfo.name}
            teacher={studentInfo.teacher}
            grade={Number(studentInfo.grade)}
             setStudents={setStudents}
           />
         ))}
       </div>
     </>
  );
}

// export default App;
Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
