import '../App.css';

import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import NavBar from '../components/NavBar/NavBar';
import Section from '../components/Section/Section';
import SlideShow from '../components/Slide/Slide';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Section 
        title="Sonha em estudar no exterior?"
        ftext="A oportunidade sonhada chegou em Angola"
        stext="Graças as parcerias que temos com as universidades na Polônia e na Rússia, a estreita colaboração com a embaixada da Polônia e da Rússia em Angola, agora para os angolanos tornou-se mais fácil estudar nestes formidáveis países."
      />
      <SlideShow />
      <Main 
        title= "Temos excelentes universidades na Rússia e na Polônia"
        src="../images/content-images/uni/uni14.2.jpg"
      />
      <Main 
        title= "Com ensino de qualidade e preços acessíveis"
        src="../images/content-images/uni.jpg"
      />
      <Footer />
    </div>
  );
}

export default Home;
