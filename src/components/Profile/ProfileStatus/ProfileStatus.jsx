import React from 'react';
import { Typography, IconButton, Paper, Link,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class ProfileStatus extends React.Component {

    constructor(props){
        super(props);

    }

    state = {
        status: this.props.profileStatus,
        editMode: false,

    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivaeEditMode() {
        this.setState({
            editMode: false
        })

        this.props.updateProfileStatus(this.state.status)
    }

    handleFocus(event) {

        event.target.select();
        
    }


    newMessageHandler = (e) => {

        this.setState({

            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevStatus) {

        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }

    }



    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <Typography color='primary' onDoubleClick={this.activateEditMode.bind(this)}>{this.props.profileStatus || "-----"}</Typography>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <TextField id="standard-basic" value={this.state.status} onChange={this.newMessageHandler}  onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactivaeEditMode.bind(this)} ></TextField>
                    </div>
                }
                <div>
                </div>
            </div>

        )

    }

}

export default ProfileStatus