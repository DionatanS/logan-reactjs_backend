import matchers from "@testing-library/jest-dom/matchers";
import React, { useState,useRef } from "react"
import Media from 'react-media';
import './index.scss'

//  let arrow = document.querySelectorAll(".arrow");
//     for (var i = 0; i < arrow.length; i++) {
//         arrow[i].addEventListener("click", (e) => {
//             let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
//             arrowParent.classNameList.toggle("showMenu");
//         });
//     }

export default function Menu() {
    const [subNav, setSubNav] = useState(false)
    const [openMenu, setOpenMenu] = useState('sidebar close')
    function openClose(){
        if(openMenu === 'sidebar close'){
            setOpenMenu('sidebar')
            setSubNav(true)
        }else{
            setOpenMenu('sidebar close')
            setSubNav(false)
        }
    }
    function showSubNav(e){
        const subMenu = e.currentTarget.parentNode.childNodes[1]   
        const iconArrow = e.currentTarget.parentNode.childNodes[0].childNodes[1]
        // console.log(e.currentTarget.parentNode.childNodes[0].childNodes[1])
        if(subMenu.style.display == 'block'){
            subMenu.style.display = 'none'
            iconArrow.style.transform = 'rotate(0deg)'
        }else{
            subMenu.style.display = 'block'
            iconArrow.style.transform = 'rotate(-180deg)'
        }
    }


   
    
    return (
        <div className="container-pai">
            <div className={openMenu}>
                <div className="logo-details">
                    <i className="bx bxl-c-plus-plus"></i>
                    <span className="logo_name">Logan</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-collection'></i>
                                <span className="link_name">Produtos</span>
                            </a>
                            <i className="bx bxs-chevron-down arrow" ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Produtos</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Nova Produtos</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-collection'></i>
                                <span className="link_name">Campanhas</span>
                            </a>
                            <i className="bx bxs-chevron-down arrow" ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Campanhas</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Nova Camapanha</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Ofertas</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Ofertas</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Vantagens</a></li>
                            <li><a>Nova Oferta</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt'></i>
                                <span className="link_name">Assinaturas</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Assinaturas</a></li>
                            <li><a>Nova Assinatura</a></li>
                            <li><a>Cadastro simplificado</a></li>
                            <li><a>??ltimas Assinaturas</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Ofertas</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">CRM</a></li>
                            <li><a>Gerenciar Assinatura</a></li>
                            <li><a>Consultar Tickets</a></li>
                            <li><a>Movimenta????es</a></li>
                            <li><a>E-mails de Suporte</a></li>
                            <li><a>Fatura Comercial</a></li>
                            <li><a>Relat??rio</a></li>
                            <li><a>Criar usu??rio digital</a></li>
                            <li><a>Excluir Assinantes</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Log??stica</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Log??stica</a></li>
                            <li><a>Relat??rio</a></li>
                            <li><a>Ticket</a></li>
                            <li><a>Hab. de Logradouro</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">A????es</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu" >
                            <li><a className="link_name">A????es em lote</a></li>
                            <li><a>Hist??rico</a></li>
                            <li><a>Abertura de Tickets</a></li>
                            <li><a>Movimenta????o Tickets</a></li>
                            <li><a>Cancelamentos</a></li>
                            <li><a>Suspens??es</a></li>
                            <li><a>Dados Cadastrais</a></li>
                            <li><a>Endere??oes</a></li>
                            <li><a>Cria????o de assinatura</a></li>
                            <li><a>Altera????o de Oferta</a></li>
                            <li><a>Integra????es</a></li>
                            <li><a>Doa????o</a></li>
                            <li><a>Migra????o Cartoleiros</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Relat??rios</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Relat??rios</a></li>
                            <li><a>Base de Assinantes</a></li>
                            <li><a>T??tulos</a></li>
                            <li><a>Tickets</a></li>
                            <li><a>Ofertas</a></li>
                            <li><a>Login por Oferta</a></li>
                            <li><a>Wise Up - Lead</a></li>
                            <li><a>Usu??rios Duplicados</a></li>
                            <li><a>Assinatura Incompleta</a></li>
                            <li><a>Prospects</a></li>
                            <li><a>Integra????es</a></li>
                            <li><a>Hist??rico Ofertas</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Relat??rios Fin</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Relat??rios Fin</a></li>
                            <li><a>Nota Fiscal</a></li>
                            <li><a>NF Conv??nios</a></li>
                            <li><a>Perdas</a></li>
                            <li><a>Retorno banc??rio</a></li>
                            <li><a>Assinaturas por m??s</a></li>
                            <li><a>Cobran??as</a></li>
                            <li><a>Negocia????es</a></li>
                            <li><a>Cart??es Vencidos</a></li>
                            <li><a>D??bito com Erro</a></li>
                            <li><a>Recprr??ncias Inativas</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Relat??rios Ger.</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Relat??rios Ger.</a></li>
                            <li><a>Resumo de t??tulos</a></li>
                            <li><a>Faturamento</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">E-commerce</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">E-commerce</a></li>
                            <li><a>Metadata</a></li>
                            <li><a>Live Panel</a></li>
                            <li><a>Live - Current(teste)</a></li>
                            <li><a>Live (teste)</a></li>
                            <li><a>Reten????o de Email</a></li>
                            <li><a>User XP</a></li>
                            <li><a>User XP (Checkout)</a></li>
                            <li><a>Elei????es 2018</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Autentica????o e seg.</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Autentica????o e seg.</a></li>
                            <li><a>Usu??rios</a></li>
                            <li><a>Perfis</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link" onClick={(e)=> showSubNav(e)}>
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Vouchers</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Vouchers</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Listar MGM/Indicados</a></li>
                            <li><a>Listar MGM/Premia????o</a></li>
                            <li><a>Novo Voucher</a></li>
                        </ul>
                    </li>
                    
                    
                    {/* <li>
                        <div className="profile-details">
                            <div className="profile-content">
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Prem Shahi</div>
                                <div className="job">Web Desginer</div>
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li> */}
                </ul>
            </div>
            <section className="home-section">
                <div className="header-section">
                    <i className='bx bx-menu' onClick={openClose}></i>
                    <div className="perfil-logout">
                        <Media queries = { {  small : " (max-width: 560px) " } }>
                            {matches =>
                                matches.small && subNav ?(
                                    <p></p>
                                ): (
                                    <p>Ol??, Dionatan da Silva</p>
                                )
                            }                                                     
                        </Media>
                        <Media queries = { {  small : " (max-width: 345px) " } }>
                            {matches =>
                                matches.small && subNav ?(
                                    <p></p>
                                ): (
                                    <i className='bx bx-log-out' ></i>
                                )
                            }                                                     
                        </Media>
                        
                        
                    </div>
                </div>
                <div>
                    <div className="testando-home">
                        teste
                    </div>
                </div>
            </section>
        </div>
    )
}