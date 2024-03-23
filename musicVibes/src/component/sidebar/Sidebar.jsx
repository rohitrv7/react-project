import React, { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
  const [extend, setExtend] =useState(true)
  return (
    <>
      <div className="sidebar flex justify-between flex-col px-4 py-3">
        <div onClick={()=>setExtend((prev)=> !prev)} className="logo flex align-middle text-white font-semibold flex-shrink cursor-pointer">
          <box-icon name="music" animation="tada" className="text-white"></box-icon>{extend ? <span>MUSIC</span> : null}
        </div>
        <div className="menu">
          <h1 className='text-slate-300 font-medium'>Home</h1>
          <div className="home-element text-white">
            <ul className='ms-3'>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='plus-circle'></box-icon>{extend ? <p>Explore</p> : null}</li></a>
              {/* <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='volume-low'></box-icon>Generas</li></a> */}
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='folder'></box-icon>{extend ? <span>Album</span> : null}</li></a>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon type='solid' name='microphone'></box-icon>{extend ? <span>Artist</span> : null}</li></a>
            </ul>
          </div>
        </div>
        <div className="library">
          <h1 className='text-slate-300 font-medium'><p>Library</p></h1>
          <div className="library-element text-white">
            <ul className='ms-3'>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='revision' flip='horizontal' ></box-icon>{extend ? <span>Recent</span> : null}</li></a>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='album'></box-icon>{extend ? <span>Album</span> : null}</li></a>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='heart'></box-icon>{extend ? <span>Faveourities</span> : null}</li></a>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='folder' ></box-icon>{extend ? <span>Local</span> : null}</li></a>
            </ul>
          </div>
        </div>
        <div className="playlist">
          <h1 className='text-slate-300 font-medium'>Playlist</h1>
          <div className="playlist-element text-white">
            <ul className='ms-3'>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon type='solid' name='plus-square'></box-icon>{extend ? <span>Create Now</span> : null}</li></a>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='volume-low'></box-icon>{extend ? <span>Design Flow</span> : null}</li></a>
              <a href=""><li className='flex flex-1 p-1 mt-1'><box-icon name='folder'></box-icon>{extend ? <span>Best of 2024</span> : null}</li></a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar