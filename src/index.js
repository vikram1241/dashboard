import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './views/App/Routers.jsx';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <Routers />
  </MuiThemeProvider>,
	document.getElementById('root'));
registerServiceWorker();