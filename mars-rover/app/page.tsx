"use client";

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Photos from "./photos"
import UserInputForm from "./action"
import { fetchPhotos } from './photos';

export default function Home() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (sol: any) => {
        setLoading(true);
        try {
            const fetchedPhotos = await fetchPhotos(sol);
            setPhotos(fetchedPhotos);
        } catch (err) {
            console.error('Error fetching photos:', err);
            setPhotos([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.page}>
            <h1>Mars Rover Image Explorer</h1>
            <UserInputForm onSearch={handleSearch} />
            {loading ? <p>Loading photos...</p> : <Photos photos={photos} />}
        </div>
    );
}





