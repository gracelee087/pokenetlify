import ListOfMonster from "../component/ListOfMonster";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MonsterAll({ allMonsters }) {
  return (
    <div>
      <Container>
        <Row>
          <div>넷플리파이 업데이트 테스트용</div>
          {allMonsters.map((monster) => (
            <Col lg={3} key={monster.id}>
              <ListOfMonster pokemon={monster} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MonsterAll;
