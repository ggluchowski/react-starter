import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const Faq = (props) => (
  <Container>
    <Hero titleText={props.headersContent.title} imageAddress={props.headersContent.image}/>
    {ReactHtmlParser(props.headersContent.content)}
  </Container>
);

Faq.propTypes = {
  headersContent: PropTypes.object,
};

export default Faq;