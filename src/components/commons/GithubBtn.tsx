import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GithubLogo from '../../assets/svg/github.svg';

interface Props {
  className?: string,
  variant?: string
  href?: string,
  target?: string
}

const HREF: string = "https://github.com/svn-arv";
const TARGET: string = "_blank";
const VARIANT: string = "dark";

const GithubBtn: React.FC<Props> = ({ className, variant = VARIANT, href = HREF, target = TARGET }) => {
  return (
    <>
      <Button variant={variant} href={href} target={target} className={className}>
        <img src={GithubLogo} className="mx-1" alt="github-logo" />
        <span className="fw-bolder">GitHub</span>
      </Button>
    </>
  );
};

export default GithubBtn;