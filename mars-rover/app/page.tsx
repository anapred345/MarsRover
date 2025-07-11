"use client";

import { useState } from 'react';
import UserInputForm from './action';
import Photos from './photos';
import {Photo} from './photos';
import { fetchPhotos } from './photos';
import styles from "@/app/page.module.css";

export default function Home() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (sol: string) => {
        setLoading(true);
        try {
            const fetchedPhotos = await fetchPhotos(sol);
            setPhotos(fetchedPhotos);
        } catch (error) {
            console.error("Error fetching photos:", error);
            setPhotos([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main  className={styles.page}>
            <h1>Mars Rover Explorer</h1>

            <section className={styles.form}>
                <UserInputForm onSearch={handleSearch} />
            </section>

            <section style={{
                width: '100%',
                maxWidth: '1200px'
            }}>
                {loading
                    ? <p>Loading photos...</p>
                    : <Photos photos={photos} />}
            </section>
        </main>
    );
}