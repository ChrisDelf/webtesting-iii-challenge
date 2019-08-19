// Test away!
import React from 'react';
import { toBeDisabled } from 'jest-dom';
import renderer from 'react-test-renderer';
import { toHaveClass } from 'jest-dom';
import { render, fireEvent } from '@testing-library/react';
import 'react-testing-library/cleanup-after-each';

import Display from './Display.js';

expect.extend({toHaveClass});

describe('Display test', () => {
  it('it should render the component ', () => {
    render(<Display />);
  });
  it(' by default the gate should be open ', () => {

    const { getByText } = render(<Display />)

    getByText(/open/i)
  })

  it('if closed is true then it should be closed ', () => {
    const { getByText } = render(<Display closed={true} />);

    getByText(/closed/i);
  });
  it('if locked is true then it should be locked', () => {
    const { getByText } = render(<Display locked={true}/>)

    getByText(/locked/i);
  })
  it('if locked the color should be red', () => {
    const { getByText } = render(<Display locked={true}/>)

    const locked = getByText(/locked/i);

    expect(locked).toHaveClass('red-led')


  })

 it('if unlocked the color should be green', () => {
    const { getByText } = render(<Display locked={false}/>)

    const unlocked = getByText(/locked/i);

    expect(unlocked).toHaveClass('green-led')


 })

 it('if closed the color should be red', () => {
    const { getByText } = render(<Display closed={true}/>)

    const closed = getByText(/closed/i);

    expect(closed).toHaveClass('red-led')


 })



});

