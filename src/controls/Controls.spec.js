import React from 'react';
import { toBeDisabled } from 'jest-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

expect.extend({ toBeDisabled });

describe('<Controls>', () => {
  it(' should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should toggle unlock', () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLocked} />);

    const button = getByText(/Lock Gate/i);
    fireEvent.click(button);
  });

  it('should disable the open and close gate when the gate is locked', () => {
    const { getByText } = render(<Controls locked/>);

    const button = getByText(/close gate/i);

    expect(button).toBeDisabled();
  });
  it('should disable the unlock and lock when the gate is open', () => {
    const { getByText } = render(<Controls closed = {false} />);

    const button = getByText(/lock gate/i)

    expect(button).toBeDisabled();
  })
});

