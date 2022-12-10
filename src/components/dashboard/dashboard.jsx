import React, { useEffect } from 'react'
import { useState } from 'react'
import { getNotes } from '../../services/dataService'
import Header from '../header/header'
import PrimarySearchAppBar from '../headermui/header'
import Note1 from '../takenote1/note1'
import Note2 from '../takenote2/note2'
import Note3 from '../takenote3/note3'

function Dashboard() {
    const [toggle,setToggle] = useState(false)
    const [notelist,setNotelist] = useState([])
    const listenToNote1 = () =>{
        setToggle(true)
      }
     const listenToNote2 = ()=>{
      setToggle(false)
     }
     useEffect(()=>{
      getNotes().then((response)=>{
        console.log(response)
        setNotelist(response.data.data.data)
      }).catch((error)=>{
        console.log(error)
      })
     },[])
   

  return (
    <div>
    {/*    <Header/> */}
        <PrimarySearchAppBar/>
       {/* <Note2 noteHandler = {listenToNote2}/> */}
       <div>
        {
          toggle ? <Note2 listenToNote2 = {listenToNote2}/>  :  <Note1 listenToNote1 = {listenToNote1}/> 
        }
        <div style={{height:'auto',width:'70vw',display:'flex',flexDirection:'row',justifyContent:'flex-start',position:'relative',left:'200px',flexWrap:'wrap',border:'1px solid grey'}}>
          {
            notelist.map((note)=>(<Note3 note={note}/>))

          }
        </div>
       </div>
       
    </div>
  )
}
export default Dashboard