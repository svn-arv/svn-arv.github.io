import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailLogo from '../../assets/svg/email.svg';

interface Props {
  className?: string,
  variant?: string
  href?: string
}

const HREF: string = "https://github.com/yourusername";
const VARIANT: string = "secondary";

const EmailBtn: React.FC<Props> = ({ className, variant = VARIANT, href = HREF }) => {
  return (
    <>
      <Button variant={variant} href={href} className={className}>
        <img src={EmailLogo} className="mx-1" alt="email-logo" />
        <span className="fw-bolder">Email</span>
      </Button>
    </>
  );
};

export default EmailBtn;