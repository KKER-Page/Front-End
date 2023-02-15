import Container from "../../../components/Container/Container";
import dataRussiaStudy from "./dataRussiaStudy"

function RussiaStudy() {
    return (
        <Container
            title="Estudos na Rússia"
            data={dataRussiaStudy}
        />
    )
}

export default RussiaStudy;