import React from 'react';
import { toBeDisabled } from 'jest-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('Dasboard Tests', () => {
  it('Does the Dashboard render', () => {
    const { getByText } = render(<Dashboard />)

    getByText(/open/i)
    getByText(/unlocked/i)
    getByText(/lock gate/i)
    getByText(/close gate/i)


  })
})
