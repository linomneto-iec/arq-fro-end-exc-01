import './blog.css';
import Header from './components/Header';
import { Container, Row, Col  } from 'reactstrap';

function PageAboutMe() {
  return (
    <div className="PageAboutMe">
      <Header currentLink="aboutMe" />
      <Container className="justify-content-center">
        <Row>
          <Col className="offset-3 col-md-6">
            <p>Pós-graduando em Arquitetura de Software Distribuído pela Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), graduado em Tecnologia em Análise e Desenvolvimento de Sistemas pela Faculdade Estadual de Campinas (UNICAMP).</p>
            <hr />
            <p>Arquiteto de Software na Stoom e consultor especialista de backend no time digital da empresa Petz.</p>
            <hr />
            <p>Apaixonado por tecnologia, programação e gestão técnica de projetos de software. Dez anos de experiência em desenvolvimento de software e cinco anos de experiência no mercado de e-commerce. Foco em tecnologias de backend e computação em nuvem.</p>
            <hr />
            <p class="font-weight-bold">Competências Técnicas e Ferramentas:</p>
            <p>Java 8, Java 11, PHP, JSP, JUnit, Maven, Struts2, Hibernate, JPA, Springboot, Mockito, Lombok;</p>
            <p>Eclipse, IntelliJ, Visual Studio Code, pgAdmin, DBeaver, Postman, Swagger, GIT, SVN, Bitbucket, Github;</p>
            <p>Linux, AWS, SQS, EC2, RDS, Route 53, S3, CDN, Load balance, ElastiCache, Tomcat, Apache, Nginx, Kong, Ubuntu, Jenkins, Docker;</p>
            <p>TDD, BDD, Clean Code, REST APIs;</p>
            <p>PostgreSQL, MySQL, Elasticsearch;</p>
            <p>HTML5, CSS3, jQuery, Bootstrap;</p>
            <p>Migração de arquitetura monolítica para microsserviços;</p>
            <hr />
            <p class="font-weight-bold">Destaques e prêmios:</p>
            <p></p>
            <p><a href="https://www.petz.com.br" target="_blank">Parceiro digital e de tecnologia do maior pet shop do Brasil</a></p>
            <p></p>
            <p><a href="https://braziljournal.com/petz-o-ipo-em-que-deu-tudo-certo" target="_blank">2020: Primeira empresa do ramo de pet shop a fazer um IPO no Brasil</a></p>
            <p></p>
            <p><a href="https://www.ecommercebrasil.com.br/noticias/finalistas-premio-e-commerce-brasil-2019/" target="_blank">2019: Top 5 melhores lojas de ecommerce do Brasil</a></p>
            <p></p>
            <p><a href="https://www.youtube.com/watch?v=aWUpPkSY7uI" target="_blank">2019: Leão de Ouro no prêmio “creative data” de Cannes</a></p>
            <p></p>
            <p><a href="http://caesegatos.com.br/petz-ganha-pr-mio-poca-reclame-aqui-pelo-segundo-ano-consecutivo" target="_blank">2016/2017: Prêmio "Reclame Aqui" de melhor atendimento ao consumidor</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageAboutMe;