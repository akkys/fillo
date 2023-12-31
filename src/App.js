import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Sidebar1 from "./components/Sidebar/Sidebar1";
import Main from "./components/Main/Main";
import Sidebar2 from "./components/Sidebar/Sidebar2";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <>
        <Row>
          <Col md={2}>
            <Sidebar1 />
            {/* <Sidebar2 /> */}
          </Col>
          <Col md={10}>
            <Main />
          </Col>
        </Row>
      </>
    </>
  );
}

export default App;
