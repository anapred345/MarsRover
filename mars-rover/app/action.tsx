"use client";
import { useState } from 'react';
import styles from "./form.module.css";

export default function UserInputForm({onSearch }:any) {
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
            <h3>Enter Sol</h3>
                <form onSubmit={handleSubmit}>
                    <input className={styles.text}
                        type="text"
                        value={sol_number}
                        onChange={handleInputChange}
                        placeholder="Type...."
                    />
                    <button className={styles.submit} type="submit">Submit</button>
                </form>
        </div>
);
}