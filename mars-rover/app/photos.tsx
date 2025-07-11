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
        <div>
            {photos.map((photo:any) => (
                <div key={photo.id}>
                    <img src={photo.img_src} width="400" />
                    <ul>
                        <li><strong>ID:</strong> {photo.id}</li>
                        <li><strong>SOL:</strong> {photo.sol}</li>
                        <li><strong>Earth Date:</strong> {photo.earth_date}</li>
                        <li><strong>Camera:</strong> {photo.camera.full_name} ({photo.camera.name})</li>
                        <li><strong>Rover:</strong> {photo.rover.name}</li>
                        <li><strong>Status:</strong> {photo.rover.status}</li>
                        <li><strong>Launch:</strong> {photo.rover.launch_date}</li>
                        <li><strong>Landing:</strong> {photo.rover.landing_date}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}