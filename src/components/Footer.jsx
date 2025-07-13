import React from 'react';
import './Footer.css';

import certificat1 from "../assets/certificat1.png";
import certificat2 from "../assets/certificat2.png";
import certificat3 from "../assets/certificat3.png";
import certificat4 from "../assets/certificat4.png";
import certificat5 from "../assets/certificat5.png";
import certificat6 from "../assets/certificat6.png";
import certificat7 from "../assets/certificat7.png";
import certificat8 from "../assets/certificat8.png";
import certificat9 from "../assets/certificat9.png";
import paymethod from "../assets/paymethod.png";

const Footer = () => {
  const certificates = [
    certificat1, certificat2, certificat3,
    certificat4, certificat5, certificat6,
    certificat7, certificat8, certificat9
  ];

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© DroneTour LTD: Flat 109 Fauna House 14 Fresh Wharf Road, Barking, England, IG11 7WY</p>
        <p>Company Number: 16565396</p>
        <p>(Mon to Fri 9:00–17:30) Suport Clienți: suport@dronetourltd.com</p>
      </div>

      <div className="footer-right">
        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <img key={index} src={cert} alt={`Certificat ${index + 1}`} className="certificate-icon" />
          ))}
        </div>
        <img src={paymethod} alt="Metode de plată" className="paymethod-img" />
      </div>
    </footer>
  );
};

export default Footer;
