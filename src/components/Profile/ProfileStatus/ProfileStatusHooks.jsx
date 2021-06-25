import React, { useEffect, useState } from 'react';

const ProfileStatusHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status, setStatus] = useState(props.profileStatus)

    useEffect(() => {
        
        setStatus(props.profileStatus);

    }, [props.profileStatus]);
    

    const activateEditMode = () => {
        
        setEditMode(true)

    }

    const deactivateEditMode = () => {

        setEditMode(false)
        props.updateProfileStatus(status)

    }

    const handleFocus = (event) => {

        event.target.select();

    }

    const newMessageHandler = (e) => {

        setStatus(e.currentTarget.value)

    }


        return (

            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.profileStatus || "-----"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={newMessageHandler} onBlur={deactivateEditMode} onFocus={handleFocus} autoFocus={true} value={status}  ></input>
                    </div>
                }
                <div>
                </div>
            </div>

        )


}

export default ProfileStatusHooks;