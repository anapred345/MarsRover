"use client";
import { useState } from 'react';
import styles from "./form.module.css";

export default function UserInputForm() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`User Input: ${inputValue}`);
    };

    return (
        <div>
            <h3>Enter Sol</h3>
    <form onSubmit={handleSubmit}>
    <input className={styles.text}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type...."
    />
    <button className={styles.submit} type="submit">Submit</button>
        </form>
        </div>
);
}