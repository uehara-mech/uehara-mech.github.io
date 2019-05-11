import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    video: {
        height: "100%",
        backgroundColor: "#e0e0e0"
    }
});

class RenderContents extends Component {

    showEducation = (education_data, index) => {
        return (
            <div key={index}>
                <div>{education_data.organization}</div>
                <div>{education_data.timeline}</div>
            </div>
        )
    }

    showPapers = (paper_data, index) => {
        return (
            <div key={index}>
                <div>{paper_data.title}</div>
                <div>{paper_data.authors}</div>
                <div>{paper_data.conference}</div>
            </div>
        )
    }
    
    render() {
        let contents = this.props.contents;

        return (
            <div>
                <div>{contents.resume_name}</div>
                <div>About me</div>
                <div>{contents.about_me_desc}</div>
                <div>Education</div>
                <div>{contents.education.map(this.showEducation)}</div>
                <div>Research</div>
                <div>{contents.papers.map(this.showPapers)}</div>
            </div>
        )
    }
}

export default withStyles(styles)(RenderContents);