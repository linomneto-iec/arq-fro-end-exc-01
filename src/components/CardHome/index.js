import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardHome({ cardTitle, cardSubtitle, cardText, cardLink }) {
  return (
    <Card>
        <CardBody>
            <CardTitle tag="h5">{ cardTitle }</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{ cardSubtitle }</CardSubtitle>
            <CardText>{ cardText }</CardText>
            <a href={cardLink} target={cardLink.startsWith("http") ? "_blank" : "_self"} className="btn btn-primary">Veja Mais</a>
        </CardBody>
    </Card>
  );
}

export default CardHome;