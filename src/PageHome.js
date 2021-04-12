import './blog.css';
import Header from './components/Header';
import CardHome from './components/CardHome';

import { Container, Row, Col  } from 'reactstrap';

function PageHome() {
  return (
    <div className="PageHome">
      <Header currentLink="home" />
      <Container>
        <Row>
          <Col className="offset-md-3 col-md-6">
            <div className="mt-3">
              <CardHome
                cardTitle="Tecnologias Utilizadas no e-commerce Brasileiro"
                cardSubtitle="Palestra na Faculdade Anhanguera de Limeira"
                cardText="Amigos! No próximo dia 6/11 ministrarei, com muito prazer, mais uma palestra sobre tecnologias utilizadas no ecommerce brasileiro, desta vez na Faculdade Anhanguera de Limeira. O evento é aberto ao público, portanto estão todos convidados."
                cardLink="https://www.anhanguera.com/unidade/limeirasp/"
              /> 
            </div>
            <div className="mt-3">
              <CardHome
                cardTitle="Sistemas legados e migração para microserviços"
                cardSubtitle="Palestra na Google Developers Group sobre transformação de sistemas legados em microsserviços"
                cardText="Mais uma vez, obrigado ao pessoal do Google Developers Group de Campinas, e a Stoom - Soluções em E-commerce que proporcionaram esta oportunidade. Um abraço também para minha dupla dinâmica Pedro Ivo Teixeira Soares que tornou essa palestra ainda mais interessante."
                cardLink="https://www.youtube.com/watch?v=aWZRV_MkKAE"
              />   
            </div>  
            <div className="mt-3">
              <CardHome
                cardTitle="A maior black friday de todos os tempos"
                cardSubtitle="Black Friday Digital: como preparar sua loja para a edição de 2020?"
                cardText="Lições valiosas sobre promoções, tráfego, meios de pagamento e outros aspectos essenciais para o bom desempenho do seu negócio na Black Friday mais digital de todos os tempos."
                cardLink="https://www.youtube.com/watch?v=reYlr7_oiUU"
              />   
            </div>     
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageHome;