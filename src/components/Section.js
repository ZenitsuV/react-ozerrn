import React from 'react';
import './Section.css';

const Section = (props) => {
  return <section class="section">{props.children}</section>;
};

export default Section;
