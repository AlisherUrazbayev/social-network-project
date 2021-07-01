import React, { useEffect, useState } from 'react';
import { Typography, IconButton, Paper, Link,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
                        <Typography color='primary' onDoubleClick={activateEditMode}>{props.profileStatus || "-----"}</Typography>
                    </div>
                }
                {editMode &&
                    <div>
                        <TextField id="outlined-basic"  onChange={newMessageHandler} onBlur={deactivateEditMode} onFocus={handleFocus} autoFocus={true} value={status}  ></TextField>
                    </div>
                }
                <div>
                </div>
            </div>

        )


}

export default ProfileStatusHooks;