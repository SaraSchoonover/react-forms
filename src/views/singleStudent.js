import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function singleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      <h2>{student.name}</h2>
      <h2>
      {student.teacher}
      </h2>
    </div>
  );
}
