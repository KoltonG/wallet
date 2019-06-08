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
    padding: '15px 20px',
    borderRadius: 0,
    fontSize: 16,
    lineHeight: '24px',
    minWidth: 150,
    color: '#fff',
    backgroundColor: '#613EEA',
    cursor: 'pointer'
  });

  return (
    <Button>{children}</Button>
  );
}

/**
 * Exports
 */
export default Button;
