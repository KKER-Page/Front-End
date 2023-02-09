import Container from "../../../components/Container/Container";
import dataRussiaLife from "./dataRussiaLife.json"

function RussiaLife() {
    return (
        <Container 
            title="Vida na Rússia"
            data={dataRussiaLife}
        />
    )
}

export default RussiaLife;