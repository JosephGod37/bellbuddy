import React from 'react';
import type {Student} from './App';

interface Props {
    student: Student;
    onToggle: (id: number) => void;
}

const StudentItem: React.FC<Props> = ({ student, onToggle }) => {
    return (
        <li style={{ marginBottom: 10 }}>
            {student.name} –
            <button
                onClick={() => onToggle(student.id)}
                style={{
                    marginLeft: 10,
                    backgroundColor: student.present ? 'green' : 'red',
                    color: 'white'
                }}
            >
                {student.present ? 'Obecny' : 'Nieobecny'}
            </button>
        </li>
    );
};

export default StudentItem;
