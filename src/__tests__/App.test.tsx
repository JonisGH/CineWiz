import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  // it('opens offcanvas when "My Stuff" button is clicked', () => {
  //   render(<App />);
  //   const myStuffButton = screen.getByRole('button', { name: 'My Stuff' });
  //   fireEvent.click(myStuffButton);
  //   const offCanvasElement = screen.getByTestId('offcanvas');
  //   expect(offCanvasElement).toBeInTheDocument();
  // });
});
