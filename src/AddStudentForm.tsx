import React, { useState } from 'react';

interface Props {
    onAdd: (name: string) => void;
}

const AddStudentForm: React.FC<Props> = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name);
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Imię ucznia"
            />
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default AddStudentForm;
