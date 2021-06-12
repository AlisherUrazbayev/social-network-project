import React from 'react';

class ProfileStatus extends React.Component {

    constructor(props){
        super(props);
        this.newPostElement = React.createRef();

    }


    state = {
        status: 'good',
        editMode: false,
        newMessage: ''
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
    }

    handleFocus(event) {

        event.target.select();
        
    }


    newMessageHandler = () => {

        let text = this.newPostElement.current.value;

        this.setState({
            newMessage: text
        })

    }

    addProfileStatus() {
        this.setState({
            status: this.state.newMessage,
            newMessage: ''
        })
    }




    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.state.newMessage} onChange={this.newMessageHandler.bind(this)} ref={this.newPostElement} onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactivaeEditMode.bind(this)} ></input>
                    </div>
                }
                <div>
                    <button onClick={this.addProfileStatus.bind(this)}>Submit</button>
                </div>
            </div>

        )

    }

}

export default ProfileStatus