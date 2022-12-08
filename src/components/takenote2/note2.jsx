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
import { useState } from 'react';
import { addNotes } from '../../services/dataService';

function Note2(props) {
  const [noteObj,setnoteObj] = useState({title:"",description:""})

  const takeTitle = (event) =>{
    setnoteObj(prev =>({
      ...prev ,
      title:event.target.value
    }
    ))
  }
  const takeDescription = (event) =>{
    setnoteObj(prev =>({
      ...prev ,
      description:event.target.value
    }
    ))
  }
  const openNote1 = () =>{
    props.listenToNote2()
    addNotes(noteObj).then((response)=>{
      console.log(response)
  }).catch((error)=>{
      console.log(error)
  })
  }

  return (
    <div style={{ height: '20vh', width: '50vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: '1px solid black',position:'relative',left:'300px' }}>
     <div style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <InputBase defaultValue=" Title"  onChange = {takeTitle}/>
                    <InputBase defaultValue="Take a note" onChange = {takeDescription} />
                </div>
                <div>
                    <PushPinOutlinedIcon />
                </div>
            </div>

      <div style={{ height: '30%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }}>

        <div style={{ width: '70%',display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
          <AddAlertOutlinedIcon color="action"/>
          <PersonAddAltOutlinedIcon color="action"/>
          <PaletteOutlinedIcon color="action"/>
          <ImageOutlinedIcon color="action"/>
          <ArchiveOutlinedIcon color="action"/>
          <MoreVertOutlinedIcon color="action"/>
          <UndoOutlinedIcon color="action"/>
          <RedoOutlinedIcon color="action"/>
        </div>
        <div style={{ width: '20%', justifyContent: 'space-between' }}>
          <Button variant="text" onClick={openNote1}>close</Button >
        </div>
      </div>

    </div>




  )
}

export default Note2
