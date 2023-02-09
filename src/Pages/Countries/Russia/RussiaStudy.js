import Container from "../../../components/Container/Container";
import dataRussiaStudy from "./dataRussiaStudy.json"

function RussiaStudy() {
    return (
        <Container 
            title="Estudos na Rússia"
            data={dataRussiaStudy}
        />
    )
}

export default RussiaStudy;