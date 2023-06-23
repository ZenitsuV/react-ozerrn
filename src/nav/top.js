import React from 'react';
import { useLocation } from 'react-router-dom';

const Topnav = () => {
  const location = useLocation();

  const currentReportName =
    location.pathname.split('/')[1].charAt(0).toUpperCase() +
    location.pathname.split('/')[1].slice(1);

  return (
    <div className="topNavBar">
      <div className="logo">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQEqTbZR7dPJWg/company-background_10000/0/1559747506964?e=2147483647&v=beta&t=2shO9yd96bpXBHsFZnFpgf94qSSXW1IXaEZwsOT26HQ"
          alt=""
        />
      </div>
      <div className="topNavBar_content">
        <div className="report_name">{currentReportName + ' Profile'}</div>
        <div className="username">Username</div>
        <div className="export">
          <img
            src="https://www.pngguru.in/storage/uploads/images/Download%20Icon%20free%20silhouette%20transparent%20png_1658469389_2094005489.webp"
            alt=""
          />
        </div>
        <div className="settings">
          <img
            src="https://assets.stickpng.com/images/6002fa9051c2ec00048c6c7a.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
