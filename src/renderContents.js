import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 150;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    profile: {
        // textAlign: "center",
        justifyContent: "center"
    },
    avatar: {
        width: 100,
        height: 100,
        margin: "auto"
    },
    avatarIcon: {
        width: 80,
        height: 80
    },
    divider: {
        marginTop: 15,
        marginBottom: 15
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContent: {
        padding: 10
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    main_divider: {
        margin: "5px 0px 10px 0px"
    },
    blank: {
        marginTop: 25
    },
    small_blank: {
        marginTop: 15
    },
    paperTitle: {
        fontWeight: "bold"
    },
    snsList: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    noLine: {
        textDecoration: "none"
    }
});

class RenderContents extends Component {
    constructor() {
        super();
        this.showPapers = this.showPapers.bind(this);
    }

    showEducation = (education_data, index) => {
        return (
            <li key={index}>
                <Typography variant="body1">{education_data.timeline} : {education_data.organization}</Typography>
            </li>
        )
    }

    showPapers = (paper_data, index) => {
        let split_authors = paper_data.authors.split('<me>');
        return (
            <li key={index}>
                <Typography variant="body1"> {split_authors.map(this.showAuthors)}.&nbsp;
                <span className={this.props.classes.paperTitle}>{paper_data.title}.</span> 
                    &nbsp;{paper_data.conference},&nbsp;{paper_data.year}.&nbsp;<a href={paper_data.link} target="_blank">[link]</a></Typography>
            </li>
        )
    }

    showWorkExperience = (work, index) => {
        return (
            <li key={index}>
                <Typography variant="body1">
                    {work.year}&nbsp;:&nbsp;{work.name}
                </Typography>
            </li>
        )
    }

    showAuthors = (author, index) => {
        if (author === "Kohei Uehara") {
            return (
                <span key={index} style={{textDecoration: "underline"}}>
                    {author}
                </span>
            )
        } else {
            return (
                <span key={index}>
                    {author}
                </span>
            )
        }
    }

    showCompetitions = (compe_data, index) => {
        let split_members = compe_data.members.split('<me>');
        return (
            <div key={index}>
                <li>
                    <Typography variant="body1">
                        <span className={this.props.classes.paperTitle}>{compe_data.name}.</span>&nbsp;
                        {split_members.map(this.showAuthors)}&nbsp;&nbsp;<a href={compe_data.link} target="_blank">[link]</a>
                    </Typography>
                </li>
            </div>
        )
    }
    
    render() {
        const { classes } = this.props;
        let contents = this.props.contents;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6">
                            Kohei Uehara's Website
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <div className={classes.drawerContent}>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.small_blank} />
                                <Avatar className={classes.avatar}>
                                    <PersonIcon className={classes.avatarIcon}/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.small_blank} />
                                <Typography variant="caption" className={classes.profile}>
                                    {contents.about_me.about_me_abst}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider className={classes.divider}/>
                        <div className={classes.snsList}>
                            <Typography variant="body2">
                                <i className="fab fa-twitter-square"></i>&nbsp;&nbsp;<a className={classes.noLine} href="https://twitter.com/oldsea00731" target="_blank">Twitter</a>
                            </Typography>
                        </div>
                        <div className={classes.snsList}>
                            <Typography variant="body2">
                                <i className="fab fa-facebook-square"></i>&nbsp;&nbsp;<a className={classes.noLine} href="https://www.facebook.com/profile.php?id=100028442884186" target="_blank">Facebook</a>
                            </Typography>
                        </div>
                        <div className={classes.snsList}>
                            <Typography variant="body2">
                                <i className="fab fa-github-square"></i>&nbsp;&nbsp;<a className={classes.noLine} href="https://github.com/uehara-mech" target="_blank">GitHub</a>
                            </Typography>
                        </div>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography variant="h6">About me</Typography>
                    <Divider className={classes.main_divider}/>
                    <Typography variant="body1">{contents.about_me.about_me_desc}</Typography>
                    
                    <div className={classes.blank} />
                    <Typography variant="h6">Education</Typography>
                    <Divider className={classes.main_divider} />
                    <ul>{contents.education.map(this.showEducation)}</ul>
                    
                    <div className={classes.blank} />
                    <Typography variant="h6">Work Experience</Typography>
                    <Divider className={classes.main_divider} />
                    <ul>{contents.work_experience.map(this.showWorkExperience)}</ul>

                    <div className={classes.blank} />
                    <Typography variant="h6">Research</Typography>
                    <Divider className={classes.main_divider}/>
                    <ul>{contents.papers.map(this.showPapers)}</ul>
                    
                    <div className={classes.blank} />
                    <Typography variant="h6">Competitions</Typography>
                    <Divider className={classes.main_divider} />
                    <ul>{contents.competitions.map(this.showCompetitions)}</ul>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(RenderContents);