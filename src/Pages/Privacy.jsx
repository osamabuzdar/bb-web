import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Privacy = () => {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div className="row">
        <h1>PRIVACY POLICY</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="subpagez">
            <div className="itemlistz2">
              <h2>General Policy</h2>
              <p>
                The services provided by Devslope are at no cost and are intended for use as is...
              </p>
            </div>
            <div className="itemlistz2">
              <h2>Information Collection and Use</h2>
              <p>
                For a better experience, we may require personal info...
              </p>
              <ul>
                <li>Apple App Store</li>
                <li>Play Store</li>
              </ul>
            </div>
            <div className="itemlistz2">
              <h2>Log Data</h2>
              <p>
                We may collect log data such as IP, device name, and usage time...
              </p>
            </div>
            <div className="itemlistz2">
              <h2>Service Providers</h2>
              <p>We may hire third-party companies for:</p>
              <ul>
                <li>Facilitating our service</li>
                <li>Providing the service on our behalf</li>
                <li>Performing related services</li>
                <li>Analyzing service usage</li>
              </ul>
              <p>
                These third parties have access to your personal info to perform their tasks.
              </p>
            </div>
            <div className="itemlistz2">
              <h2>Security</h2>
              <p>
                We use commercially acceptable means to protect your data, but no method is 100% secure.
              </p>
            </div>
            <div className="itemlistz2">
              <h2>Links to Other Sites</h2>
              <p>
                We are not responsible for privacy policies of third-party sites.
              </p>
            </div>
            <div className="itemlistz2">
              <h2>Children's Privacy</h2>
              <p>We do not knowingly collect personal information from children under 13.</p>
            </div>
            <div className="itemlistz2">
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may update our policy and notify users via this page. Last updated: 23-02-2022
              </p>
            </div>
            <div className="itemlistz2">
              <h2>Contact Us</h2>
              <p>Email us at: support@devslope.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
