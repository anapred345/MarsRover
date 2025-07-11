import styles from "@/app/page.module.css";

export interface Photo{
    img_src: string;
    id: string;
    sol: string;
    earth_date: string;
    camera:{
        full_name: string;
    }
    rover:{
        name: string;
    }
}
export async function fetchPhotos(sol: any, apiKey = 'XXcgVHftCESiXWu3I6skkAEQsNmfSFPOtXCDeH78') {
   const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=2&api_key=${apiKey}`;
    const res = await fetch(url);
    try{
        if (!res.ok) {
            throw new Error(`Failed to fetch photos. HTTP error ${res.status}`);
        }
        const data = await res.json();
        return data.photos;
    }catch(error){
        console.error("error during fetch: ", error);
        throw error;
    }

}

export default function Photos({photos}:any) {
    if (photos.length === 0) {
        return <p>No photos found.</p>;
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px'
        }}>
            {photos.slice(0, 20).map((photo: Photo) => (
                <div key={photo.id} className={styles.container}>

                    <img src={photo.img_src} width="100%" className={styles.image} />
                    <ul className={styles.no_bullets}>
                        <li> <strong>ID:</strong> {photo.id}</li>
                        <li><strong>SOL:</strong> {photo.sol}</li>
                        <li><strong>Earth Date:</strong> {photo.earth_date}</li>
                        <li><strong>Camera:</strong> {photo.camera.full_name}</li>
                        <li><strong>Rover:</strong> {photo.rover.name}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
