import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Hidden } from '@mui/material';
import { border } from '@mui/system';
const Search = () => {
    const [showDialog, setshowDialog] = useState(false);
    const openDialog = () => setshowDialog(true);
    const closeDialog = () => setshowDialog(false);
    return (
        <>
            <button onClick={openDialog} style={{ position: 'absolute' }}><i class="fa-solid fa-magnifying-glass fa-xs"></i></button>
            <Dialog open={showDialog} onClose={closeDialog} style={{ padding: '0px', backgroundColor: 'rgba(7, 28, 85, 0.64)' }}>
                <DialogContent style={{ overflow: 'hidden', padding: '0px' }}>
                    <input type="text" placeholder='Search....' style={{ padding: '8px' }} />
                    <label style={{
                        display: 'inline-block', padding: '0px'
                    }}><i class="fa-solid fa-magnifying-glass" style={{ color: '#FF8C00', backgroundColor: 'blue', padding: '8px', border: '#FF8C00' }}></i> </label>
                </DialogContent>
                {/* <DialogActions style={{ padding: '0' }}> */}

                {/* </DialogActions> */}
            </Dialog>
        </>
    )
}
export default Search;
