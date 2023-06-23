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
        <div id="TrackerGrid" class="TrackerGrid"></div>
      </Section>
    </div>
  );
};

export default Tracker;
