import React from 'react'
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


function Note3() {
    return (
        <div style={{ height: '18vh', width: '20vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: '1px solid black', position: 'relative',position:'relative',left:'300px' }}>
            <div style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <InputBase defaultValue=" Title" />
                    <InputBase defaultValue="Take a note" />
                </div>
                <div>
                    <PushPinOutlinedIcon />
                </div>
            </div>

            <div style={{ height: '30%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end', }}>

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