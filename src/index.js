import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import CustomRaisedButton from './components/mui-examples/CustomRaisedButton';
import TradeTable from './components/poc/TradeTable';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const Poc = () => (
    <MuiThemeProvider>
      {/* <CustomRaisedButton /> */}
      <TradeTable />
    </MuiThemeProvider>
  );

ReactDOM.render(
    <Poc />,
    document.getElementById('poc')
  );
registerServiceWorker();
