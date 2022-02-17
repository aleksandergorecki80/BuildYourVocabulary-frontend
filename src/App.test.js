// import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('First test', () => {
    
  const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    
    expect(div.innerHTML).toContain('Hi there');
    ReactDOM.unmountComponentAtNode(div);
  });