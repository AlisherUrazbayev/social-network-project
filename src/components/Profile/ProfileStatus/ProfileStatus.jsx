import React from 'react';

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
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.profileStatus || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.state.status} onChange={this.newMessageHandler}  onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactivaeEditMode.bind(this)} ></input>
                    </div>
                }
                <div>
                </div>
            </div>

        )

    }

}

export default ProfileStatus