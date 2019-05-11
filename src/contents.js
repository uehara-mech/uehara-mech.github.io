import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import * as yaml from 'js-yaml';
import getContents from './getContents';
import RenderContents from './renderContents';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    video: {
        height: "100%",
        backgroundColor: "#e0e0e0"
    }
});

class ContentsWindow extends Component {
    constructor(props) {
        super(props)
        // 状態の初期化
        this.state = {
            contents: null,
            isMounted: false
        }
    }

    componentDidMount() {
        this.setState({isMounted: true});
    }

    componentWillUnmount() {
        this.setState({isMounted: false});
        this.isMounted = false;
    }

    loadContents = async () => {
        if (this.state.isMounted && !this.state.contents){
            console.log('loadContents');
            let contents_data = await getContents();
            console.log(contents_data);
            this.setState({
                contents: contents_data
            })
        };
    }


    render(){
        let all_contents = null;
        this.loadContents();
        try {
            all_contents = yaml.safeLoad(this.state.contents);
            console.log(all_contents);
        } catch (e) {
            console.log(e);
        }
        return (
            <div>
                {all_contents ? <RenderContents contents={all_contents} /> : <div>error</div>}
            </div>
        )
    }
}

export default withStyles(styles)(ContentsWindow);