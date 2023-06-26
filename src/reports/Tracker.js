import React, { useState } from 'react';
import './Tracker.css';
import PeriodToggle from '../components/PeriodToggle';
import Section from '../components/Section';

const Tracker = () => {
  const [selectedMarket, setSelectedMarket] = useState('AM Market');
  const [selectedPeriod, setSelectedPeriod] = useState('CW');

  const handleMarketDropdown = (e) => {
    setSelectedMarket(e.target.value);
  };

  return (
    <div className="report_container">
      <section className="top_section">
        <div className="header_panel">
          <div className="filter_container">
            <div className="filter_wrapper">
              <div className="filter_text">Market</div>
              <div className="market_filter">
                <select value={selectedMarket} onChange={handleMarketDropdown}>
                  <option value="AM-Market">AM Market</option>
                  <option value="MD-Market">MD Market</option>
                </select>
              </div>
            </div>
            <PeriodToggle
              onSelect={setSelectedPeriod}
              selectedPeriod={selectedPeriod}
            />
          </div>
        </div>
        <div className="Date_wrapper">
          <h3 id="Summary_Alerts" className="DataasofDateText">
            Data as of
          </h3>
        </div>
      </section>
      <Section id="tracker_grid">
        <div id="TrackerGrid" class="TrackerGrid">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </Section>
    </div>
  );
};

export default Tracker;
