import React from 'react'
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

import Button from '@mui/material/Button';

function Note2() {

  return (
    <div style={{ height: '20vh', width: '50vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: '1px solid black' }}>
     <div style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <InputBase defaultValue=" Title" />
                    <InputBase defaultValue="Take a note" />
                </div>
                <div>
                    <PushPinOutlinedIcon />
                </div>
            </div>

      <div style={{ height: '30%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', border: '.2px solid black ' }}>

        <div style={{ width: '70%',display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} >
          <AddAlertOutlinedIcon />
          <PersonAddAltOutlinedIcon />
          <PaletteOutlinedIcon />
          <ImageOutlinedIcon />
          <ArchiveOutlinedIcon />
          <MoreVertOutlinedIcon />
          <UndoOutlinedIcon />
          <RedoOutlinedIcon />
        </div>
        <div style={{ width: '30%', justifyContent: 'space-between' }}>
          <Button variant="text">close</Button>
        </div>
      </div>

    </div>




  )
}

export default Note2
