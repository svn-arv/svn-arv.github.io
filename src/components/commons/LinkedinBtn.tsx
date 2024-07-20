import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedinLogo from '../../assets/svg/linkedin.svg';

interface Props {
  className?: string,
  variant?: string
  href?: string,
  target?: string
}

const HREF: string = "https://www.linkedin.com/in/sevian-arivyartha-767597158/";
const TARGET: string = "_blank";
const VARIANT: string = "primary";

const LinkedinBtn: React.FC<Props> = ({ className, variant = VARIANT, href = HREF, target = TARGET }) => {
  return (
    <>
      <Button variant={variant} href={href} target={target} className={className}>
        <img src={LinkedinLogo} className="mx-1" alt="github-logo" />
        <span className="fw-bolder">LinkedIn</span>
      </Button>
    </>
  );
};

export default LinkedinBtn;
