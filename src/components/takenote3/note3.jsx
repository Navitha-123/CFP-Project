import React from 'react'
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './note3.css'



function Note3(props) {
    return (
        <div className='takeNote3'  >
            {/* <div style={{height:'10vh'}}></div> */}
            <div className = 'n3child1'>
                <div className = 'n3child2' >
                    <InputBase defaultValue={props.note.title} />
                    <InputBase defaultValue={props.note.description} />
                </div>
                <div>
                    <PushPinOutlinedIcon />
                </div>
            </div>

            <div className = 'n3icons' >

                <AddAlertOutlinedIcon color="action"/>
                <PersonAddAltOutlinedIcon color="action"/>
                <PaletteOutlinedIcon color="action"/>
                <ImageOutlinedIcon color="action"/>
                <ArchiveOutlinedIcon color="action" />
                <MoreVertOutlinedIcon color="action"/>
            </div>
        </div>
    )/* alignItems: 'flex-end' 
     justifyContent: 'space-between', alignItems: 'center', */
}
export default Note3