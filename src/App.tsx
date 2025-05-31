import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

export interface Student {
    id: number;
    name: string;
    present: boolean;
}

const App: React.FC = () => {
    const [students, setStudents] = useState<Student[]>(() => {
        const saved = localStorage.getItem('students');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const addStudent = (name: string) => {
        const newStudent: Student = {
            id: Date.now(),
            name,
            present: false,
        };
        setStudents([...students, newStudent]);
    };

    const toggleAttendance = (id: number) => {
        setStudents(
            students.map((student) =>
                student.id === id
                    ? { ...student, present: !student.present }
                    : student
            )
        );
    };

    const presentCount = students.filter((s) => s.present).length;

    return (
        <div style={{ fontFamily: 'Arial', padding: 20 }}>
            <h1>BellBuddy</h1>
            <Clock />
            <h3>Obecnych: {presentCount} / {students.length}</h3>
            <AddStudentForm onAdd={addStudent} />
            <StudentList students={students} onToggle={toggleAttendance} />
        </div>
    );
};

export default App;
