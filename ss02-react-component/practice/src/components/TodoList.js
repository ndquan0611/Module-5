import { useRef, useState } from 'react';

function TodoList() {
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs || [];
    });
    const [job, setJob] = useState('');

    const inputRef = useRef();

    const handleSubmit = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);

            return newJobs;
        });

        setJob('');
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                value={job}
                ref={inputRef}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
