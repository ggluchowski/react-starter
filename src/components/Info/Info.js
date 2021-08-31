import React from 'react';
import Container from '../Container/Container';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Info = (props) => (
  <Container>
    <Hero titleText={props.headersContent.title} imageAddress={props.headersContent.image}/>
    {ReactHtmlParser(props.headersContent.content)}
  </Container>
);

Info.propTypes = {
  headersContent: PropTypes.object,
};

export default Info;