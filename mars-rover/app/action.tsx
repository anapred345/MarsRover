"use client";
import { useState } from 'react';
import styles from "./form.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function UserInputForm({onSearch}:any) {
    const [sol_number, set_sol_number] = useState('1000');

    const handleInputChange = (event: any) => {
        set_sol_number(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Sol: ${sol_number}`);
        onSearch(sol_number);
    };

    return (
        <div>
                <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Enter Sol"
                            variant="outlined"
                            value={sol_number}
                            onChange={handleInputChange}
                           type="text"
                        />
                    <button className={styles.submit} type="submit">Submit</button>
                </form>
        </div>
);
}