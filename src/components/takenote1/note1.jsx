import React from 'react'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import './note1.css'
function Note1(props) {
  const openNote2 = () =>{
      props.listenToNote1()
      
  }
  return (
   <div style={{height:'15vh'}}>

   <div className='takenote1' onClick = {openNote2 }>
    <div className='para'>
    <p>Take a note...</p>
    </div>
   <div className='icons' >
    <LibraryAddCheckIcon color="action"/>
     <BrushIcon color="action"/>
     <ImageIcon color="action"/>
     
    </div>
   
    </div> 
      </div>
  )
}

export default Note1