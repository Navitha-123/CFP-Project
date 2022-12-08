import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Header() {
  return (
    <div style={{ height: '12vh', width: '100vw', display: 'flex', border: '1px solid black', boxSizing: 'border-box', position: 'relative', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      <div style={{ height: '100%', width: '1%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
      </div>
      <MenuIcon />
      <div style={{ height: '100%', width: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',color:'grey' }}>
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="image" width='30%' height='70%'></img>
        <h3 >Keep</h3>
      </div>
      <div style={{width:'10%'}}></div>
      <div style={{ height: '65%', width: '65%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'grey', border: '0.px solid grey' }}>
        <SearchIcon />
        <InputBase defaultValue="SearchIcon " />
      </div>
      <div style={{ height: '100%', width: '15%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <RefreshOutlinedIcon color="action"/>
        <ViewStreamOutlinedIcon color="action"/>
        <SettingsOutlinedIcon color="action"/>
      </div>
      <div style={{ height: '100%', width: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <AppsOutlinedIcon color="action"/>
        <AccountCircleOutlinedIcon color="action"/>
      </div>
      {/* <div style={{height:'100%',width:'10%',dispaly:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',}}>
         <ViewStreamOutlinedIcon/> */}
      {/*  <div style={{ height: '100%', width: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <ViewStreamOutlinedIcon />
          <div style={{ height: '100%', width: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <SettingsOutlinedIcon /> */}
      {/*  <div style={{ height: '100%', width: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <AppsOutlinedIcon/>
            <div style={{ height: '100%', width: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
           <AccountCircleOutlinedIcon/>
          </div>
          </div> */}
    </div>


  )
}

export default Header