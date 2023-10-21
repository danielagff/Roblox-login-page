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

export default function DialogObterCodigo({ open, onClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: '#393b3d', // Define a cor de fundo do modal
          },
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            textAlign: 'center',
            color: '#ffffff',
            fontSize: '20px',
            fontWeight: 700,
            borderBottom: '1px solid #636466', // Linha abaixo do título
          }}
          id="customized-dialog-title"
        >
          Obter código único
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
        <DialogContent dividers sx={{ color: '#bdbebe', marginBottom: '35px' }}>
          <Typography gutterBottom>
            Digite o e-mail verificado na sua conta para receber um código único.
          </Typography>
          <InputContainer>
            <Input
              sx={{
                width: '100%', // Ocupa 100% da largura
                maxWidth: '498px', // Largura máxima para evitar que fique muito grande
                height: '38px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#bdbebe',
                marginBottom: '35px', // Espaço entre o input e o botão
                '&:hover, &:focus': {
                  borderColor: '#ffffff', // Cor branca ao hover e clicar
                },
              }}
              placeholder="E-mail"
            />
          </InputContainer>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: '#bdbebe',
              color: '#bdbebe',
              width: '100%',
              '&:hover': {
                borderColor: '#bdbebe', // Cor de borda personalizada ao hover
                backgroundColor: 'transparent', // Remove o fundo azul ao hover
              },
            }}
          >
            Enviar código
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
