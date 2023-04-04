import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './videoplayer.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Hidden } from '@mui/material';
import { border } from '@mui/system';
import zIndex from '@mui/material/styles/zIndex';
const VideoPlayer = () => {
    const [showDialog, setshowDialog] = useState(false);
    const openDialog = () => setshowDialog(true);
    const closeDialog = () => setshowDialog(false);
    return (
        <>
            <div onClick={openDialog} style={{ border: '0' }}><i class="fa-sharp fa-solid fa-circle-play fa-2xl" style={{ color: '#ff8800', zIndex: '999', position: 'absolute', top: '48.5vh', left: '70vw' }}></i></div>
            <div class="spinner-grow" role="status" style={{
                position: 'absolute', left: '68.76vw', color: '#ffffff47', width: '113px', height: '104px', zIndex: '998', top: '43.5vh'
            }}>
                <span class="visually-hidden"></span></div>
            <div class="spinner-grow" role="status" style={{
                position: 'absolute', left: '67.66vw', color: '#ffffff99', width: '160px', height: '160px', zIndex: '998', top: '40.5vh'
            }}>
                <span class="visually-hidden"></span></div>

            <Dialog open={showDialog} onClose={closeDialog}
                maxWidth="663px"
            >
                <DialogContent className='react_player' style={{ overflow: 'hidden', padding: '0' }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=7uOZSi1iUio' />
                </DialogContent>
            </Dialog>


        </>
    )
}
export default VideoPlayer;
