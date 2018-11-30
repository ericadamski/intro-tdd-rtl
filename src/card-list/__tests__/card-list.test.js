import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import CardList from '../index';


describe('Card List', () => {
  beforeEach(cleanup);

  it('should react to user search', () => {
    const { container, getByPlaceholderText } = render(<CardList />);

    fireEvent.change(getByPlaceholderText('test'), {
      target: {
        value: 'poland'
      }
    });

    expect(container).toMatchSnapshot();
  });
});