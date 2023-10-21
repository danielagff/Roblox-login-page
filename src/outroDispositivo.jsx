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
    display: 'flex', // Alinha o conteúdo em coluna
    flexDirection: 'column', // Alinha o conteúdo em coluna
    alignItems: 'center', // Alinha o conteúdo no centro
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const InputContainer = styled('div')({
  position: 'relative',
  '& .MuiInput-root': {
    borderRadius: '5px', // Borda arredondada
    transition: 'border 0.3s', // Efeito de transição
    '&:hover': {
      borderColor: '#ffffff', // Cor branca ao hover
    },
    '&:focus': {
      borderColor: '#ffffff', // Cor branca ao clicar
    },
    '& input::placeholder': {
      paddingLeft: '5px', // Espaço no lado esquerdo do placeholder
    },
  },
});

export default function DialogOutroDispositivo({ open, onClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: '#393b3d', // Define a cor de fundo do modal
            width: '60vw',
            maxHeight: '90vh', // Defina uma altura máxima para o Dialog
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
            borderBottom: '1px solid #636466', // Linha abaixo do título
          }}
          id="customized-dialog-title"
        >
          Código de entrada rápida em conta
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            left: 8,
            top: 8,
            color: '#ffffff',
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ color: '#bdbebe', marginBottom: '0px' }}>
          <Typography gutterBottom sx={{ fontSize: '18px', fontWeight: 'Bold' }}>
            Opção 1
          </Typography>
          <img
            src="https://i.imgur.com/1MIefJz.png"
            alt="Imagem"
            style={{ width: '150px', height: '150px' }}
          />
          <Typography gutterBottom sx={{ fontSize: '14px', marginTop: '8px' }}>
            Escaneie este código QR com a câmera de seu dispositivo conectado.
          </Typography>
          <Typography gutterBottom sx={{ fontSize: '18px', fontWeight: 'Bold', marginTop: '10px' }}>
            Opção 2
          </Typography>
          <Typography gutterBottom sx={{ fontSize: '38px', fontWeight: 'Bold' }}>
            R4XC39
          </Typography>

          <Typography gutterBottom sx={{ fontSize: '12px', fontWeight: 'Normal' }}>
            Abra seu aplicativo Roblox e vá para:
            Página Mais Entrada rápida para digitar seu código.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
