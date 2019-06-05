/**
 * Imports
 */
// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from '@emotion/styled';

const Button = ({ children }) => {
  const Button = styled.button({
    backgroundColor: blue
  });

  return (
    <Button>
      { children }
    </Button>
  );
}

/**
 * Exports
 */
export default Button;
