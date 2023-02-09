import dataCard from './dataCardNizhny.json';
import GalleryCard from '../../../components/GalleryCard/GalleryCard';

function NizhnyGallery() {
    return <>
        <GalleryCard 
            dataCard={dataCard}
        />
    </>
}

export default NizhnyGallery;