import React from 'react';
import type {Student} from './App';
import StudentItem from './StudentItem';

interface Props {
    students: Student[];
    onToggle: (id: number) => void;
}

const StudentList: React.FC<Props> = ({ students, onToggle }) => {
    return (
        <ul>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    student={student}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
};

export default StudentList;
