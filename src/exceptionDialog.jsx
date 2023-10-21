import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',  // Centraliza o conteúdo verticalmente
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



export default function DialogExeception({ open, onClose, titulo, message }) {
    return (
        <div>
            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                PaperProps={{
                    sx: {
                        backgroundColor: '#393b3d',
                        width: '100vw',
                        minHeight: '30vh',
                        maxHeight: '90vh',
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        m: 3,
                        p: 2,
                        textAlign: 'center',
                        color: '#ffffff',
                        fontSize: '20px',
                        fontWeight: 700,
                        borderBottom: '1px solid #636466',
                    }}
                    id="customized-dialog-title"
                >
                    {titulo}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        left: 6,
                        top: 6,
                        color: '#ffffff',
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent
                    sx={{
                        color: '#bdbebe',
                        marginBottom: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Typography gutterBottom sx={{ fontSize: '20px', fontWeight: 'Bold', textAlign: 'center' }}>
                        {message}
                    </Typography>
                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}
