import Navbar from './Components/Navbar';
import './App.css';
import AddTask from './Components/AddTask';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Tasklist from './Components/Tasklist';

function App() {
  return (
    <>
      <Navbar />
      <Row className='justify-content-md-center'>
        <Col lg='6'>
          <AddTask />
          <Tasklist/>
        </Col>
      </Row>
     

    </>

  );
}

export default App;
