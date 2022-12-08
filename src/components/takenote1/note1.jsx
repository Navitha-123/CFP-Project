import React from 'react'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
function Note1(props) {
  const openNote2 = () =>{
      props.listenToNote1()
      
  }
  return (
   <div  onClick = {openNote2 } style={{height:'8vh',width:'50vw',display:'flex',flexDirection:'row',border:'1px solid black',position:'relative',left:'300px'}}>
    <div style={{height:'100%',width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
    <p>Take a note...</p>
    </div>
   <div style={{height:'100%',width:'20%',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
    <LibraryAddCheckIcon color="action"/>
     <BrushIcon color="action"/>
     <ImageIcon color="action"/>
     
    </div>
   
    
    </div> 
  )
}

export default Note1