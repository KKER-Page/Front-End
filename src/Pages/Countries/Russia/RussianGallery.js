import dataCard from "./dataCard.json";
import GalleryCard from "../../../components/GalleryCard/GalleryCard";

function RussianGallery() {
    return (
        <GalleryCard 
            dataCard={dataCard}
        />
    )
}

export default RussianGallery;