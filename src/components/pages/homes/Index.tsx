import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/general.css';
import BackgroundImg from '../../../assets/image/bg.jpg';
import GithubBtn from '../../commons/GithubBtn';
import LinkedinBtn from '../../commons/LinkedinBtn';
import EmailBtn from '../../commons/EmailBtn';

const HomeIndex: React.FC = () => {
  return (
    <>
      <Container className="hero d-flex">
        <Row className="col h-min-50 py-4 my-auto frosted-glass">
          <Col className="d-flex text-light flex-column flex-wrap text-center justify-content-center align-content-center">
            <h2>Hello, I'm Sevian</h2>
            <h3>A Software Engineer</h3>
            <p>In today's fast-paced tech environment, the ability to translate technical concepts into business value is crucial. My experience as both a Junior Software Engineer and System Operations professional has honed my skills in effectively communicating with cross-functional teams, senior engineers, and stakeholders. I excel at investigating and resolving complex issues, ensuring that technical solutions align perfectly with business objectives.</p>
            <Col className="flex-column flex-lg-row d-flex col-6 justify-content-start justify-content-lg-center offset-3">
              <GithubBtn className="col my-2 mx-lg-2 me-2 btn-lg-md btn-lg-sm btn-md d-flex align-content-center justify-content-center" />
              <LinkedinBtn className="col my-2 mx-lg-2 me-2 btn-lg-md btn-lg-sm btn-md d-flex align-content-center justify-content-center" />
            </Col>
          </Col>
        </Row>
        <footer className="position-absolute bottom-0">
          <p className="text-secondary fs-6 fst-italic">
            Photo by <a className="text-secondary" target="_blank" href="https://unsplash.com/@sarahdorweiler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sarah Dorweiler</a> on <a className="text-secondary" target="_blank" href="https://unsplash.com/photos/green-leaf-photography-9Z1KRIfpBTM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </footer>  
      </Container>
    </>
  );
};

export default HomeIndex;