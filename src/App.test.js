
import App from './components/App';
import ReactDOM from 'react-dom';

test('First test', () => {
  const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    const inner = div.innerHTML;
    console.log(inner);
    expect(div.innerHTML).toContain('App component');
    ReactDOM.unmountComponentAtNode(div);
  });