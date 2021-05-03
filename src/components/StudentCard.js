import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/StudentData';
import StudentForm from '../StudentForm';

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey)
          .then((studentArray) => setStudents(studentArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;

      case 'view':
        history.push(`/students/${firebaseKey}`);
        break;

      default:
        console.warn('nothing selected');
    }
  };

  return (
        <Card body>
        <CardTitle tag="h5">First Name: {name}</CardTitle>
        <CardText>Teacher: {teacher}</CardText>
        <Button color ="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
        <Button color ="info" onClick={() => handleClick('view')}>View Student</Button>
        <Button color ="warning" onClick={() => handleClick('edit')}>
          {editing ? 'Close Form' : 'Edit Student'}
        </Button>
        {
        editing && <StudentForm
        formTitle='Edit Student'
        setStudents={setStudents}
        firebaseKey={firebaseKey}
        name={name}
        teacher={teacher}
        />}
      </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};
export default StudentCard;
