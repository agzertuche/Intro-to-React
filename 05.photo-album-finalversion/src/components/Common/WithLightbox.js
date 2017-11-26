/// This is the HOC
import React from 'react';
import PropTypes from 'prop-types';
import addLightbox from './AddLightbox';

const WithLightbox = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

WithLightbox.propTypes = {
  photos: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
}

export default addLightbox(WithLightbox);