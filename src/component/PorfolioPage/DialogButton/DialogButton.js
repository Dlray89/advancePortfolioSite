import React, {useState} from 'react'

import {Dialog, DialogTitle, DialogContent, Button, Grid} from '@material-ui/core'



const DialogButton = (props) => {
    const [open, setOpen] =useState(false)

    const handleDialog = () => {
        setOpen(true)
    }

    const closeDialog = () => {
        setOpen(false)
    }


    return(
        <React.Fragment>
            <Button variant='contained' onClick={handleDialog}>View Project</Button>

            <Dialog open={open} onClose={closeDialog} >
                <DialogTitle>{props.name}</DialogTitle>
                <DialogContent>
                    <Grid item container>

                        <Grid item>
                            <img src={props.img}  />
                        </Grid>
                        <Grid item>
                            {props.techStack}
                        </Grid>

                        <Grid item>
                            {props.details}
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default DialogButton