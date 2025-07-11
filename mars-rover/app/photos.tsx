"use client";
import { useEffect, useState } from 'react';

interface Photo {
    id: number;
    sol: number;
    earth_date: string;
    title: string;
    img_src: string;
    rover: {
        launch_date: string;
        landing_date: string;
    };
}

export default function Photos() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=XXcgVHftCESiXWu3I6skkAEQsNmfSFPOtXCDeH78');
            const data = await response.json();
            setPhotos(data.photos);
        }
        console.log(photos);
        fetchData();
    }, []);

    return (
        <ul>
            {photos.map((photo) => (
                <div key={photo.id}>
                    <img src={photo.img_src} width="400" />
                    <li><strong>ID:</strong> {photo.id}</li>
                    <li><strong>SOL (zi marțiană):</strong> {photo.sol}</li>
                    <li><strong>Data pe Pământ:</strong> {photo.earth_date}</li>
                    <li><strong>Lansat:</strong> {photo.rover.launch_date}</li>
                    <li><strong>Aterizat:</strong> {photo.rover.landing_date}</li>
                </div>
            ))}
        </ul>
    );
}