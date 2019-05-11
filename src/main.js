import React, { Component } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from './theme';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>main test</div>
            </MuiThemeProvider>
        )
    };
}

render(
    <div style={{ height: '100%' }}>
        <Main />
    </div>,
    document.getElementById('main')
);