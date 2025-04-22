import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
//import { Tooltip } from 'react-tooltip';
//import 'react-tooltip/dist/react-tooltip.css'
import Modal from "react-modal";
import "../../assets/scss/main/disabled.scss";

Modal.setAppElement("#root");

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);
  const [isOpen19, setIsOpen19] = useState(false);
  const [isOpen20, setIsOpen20] = useState(false);
  const [isOpen21, setIsOpen21] = useState(false);
  const [isOpen22, setIsOpen22] = useState(false);
  const [isOpen23, setIsOpen23] = useState(false);
  const [isOpen24, setIsOpen24] = useState(false);
  const [isOpen25, setIsOpen25] = useState(false);  
  const [isOpen26, setIsOpen26] = useState(false);
  const [isOpen27, setIsOpen27] = useState(false);
  const [isOpen28, setIsOpen28] = useState(false);
  const [isOpen29, setIsOpen29] = useState(false);
  const [isOpen30, setIsOpen30] = useState(false);
  const [isOpen31, setIsOpen31] = useState(false);
  const [isOpen32, setIsOpen32] = useState(false);
  const [isOpen33, setIsOpen33] = useState(false);
  const [isOpen34, setIsOpen34] = useState(false);
  const [isOpen35, setIsOpen35] = useState(false);
  const [isOpen36, setIsOpen36] = useState(false);
  const [isOpen37, setIsOpen37] = useState(false);
  const [isOpen38, setIsOpen38] = useState(false);
  //const [isOpen39, setIsOpen39] = useState(false);
  const [isOpen40, setIsOpen40] = useState(false);
  const [isOpen41, setIsOpen41] = useState(false);
  const [isOpen42, setIsOpen42] = useState(false);
  const [isOpen43, setIsOpen43] = useState(false);
  const [isOpen44, setIsOpen44] = useState(false);
  const [isOpen45, setIsOpen45] = useState(false);
  const [isOpen46, setIsOpen46] = useState(false);
  const [isOpen47, setIsOpen47] = useState(false);
  const [isOpen48, setIsOpen48] = useState(false);
  const [isOpen49, setIsOpen49] = useState(false);
  const [isOpen50, setIsOpen50] = useState(false);
  //const [isOpen51, setIsOpen51] = useState(false);
  const [isOpen52, setIsOpen52] = useState(false);
  const [isOpen53, setIsOpen53] = useState(false);
  const [isOpen54, setIsOpen54] = useState(false);
  const [isOpen55, setIsOpen55] = useState(false);
  const [isOpen56, setIsOpen56] = useState(false);
  const [isOpen57, setIsOpen57] = useState(false);
  const [isOpen58, setIsOpen58] = useState(false);
  //const [isOpen59, setIsOpen59] = useState(false);
  const [isOpen60, setIsOpen60] = useState(false);
  const [isOpen61, setIsOpen61] = useState(false);
  const [isOpen62, setIsOpen62] = useState(false);
  const [isOpen63, setIsOpen63] = useState(false);
  const [isOpen64, setIsOpen64] = useState(false);
  const [isOpen65, setIsOpen65] = useState(false);
  const [isOpen66, setIsOpen66] = useState(false);
  const [isOpen67, setIsOpen67] = useState(false);
  const [isOpen68, setIsOpen68] = useState(false);
  const [isOpen69, setIsOpen69] = useState(false);



  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }
  
  function toggleModalTen() {
    setIsOpen10(!isOpen10);
  }
  
  function toggleModalEleven() {
    setIsOpen11(!isOpen11);
  }
  
  function toggleModalTwelve() {
    setIsOpen12(!isOpen12);
  }
  
  function toggleModalThirteen() {
    setIsOpen13(!isOpen13);
  }
  
  function toggleModalFourteen() {
    setIsOpen14(!isOpen14);
  }
  
  function toggleModalFifteen() {
    setIsOpen15(!isOpen15);
  }
  
  function toggleModalSixteen() {
    setIsOpen16(!isOpen16);
  }
  
  function toggleModalSeventeen() {
    setIsOpen17(!isOpen17);
  }
  
  function toggleModalEighteen() {
    setIsOpen18(!isOpen18);
  }
  
  function toggleModalNineteen() {
    setIsOpen19(!isOpen19);
  }
  
 
function toggleModalTwenty() {
  setIsOpen20(!isOpen20);
}

function toggleModalTwentyOne() {
  setIsOpen21(!isOpen21);
}

function toggleModalTwentyTwo() {
  setIsOpen22(!isOpen22);
}

function toggleModalTwentyThree() {
  setIsOpen23(!isOpen23);
}

function toggleModalTwentyFour() {
  setIsOpen24(!isOpen24);
}

function toggleModalTwentyFive() {
  setIsOpen25(!isOpen25);
}


function toggleModalTwentySix() {
  setIsOpen26(!isOpen26);
}

function toggleModalTwentySeven() {
  setIsOpen27(!isOpen27);
}

function toggleModalTwentyEight() {
  setIsOpen28(!isOpen28);
}

function toggleModalTwentyNine() {
  setIsOpen29(!isOpen29);
}

function toggleModalThirty() {
  setIsOpen30(!isOpen30);
}

function toggleModalThirtyOne() {
  setIsOpen31(!isOpen31);
}

function toggleModalThirtyTwo() {
  setIsOpen32(!isOpen32);
}

function toggleModalThirtyThree() {
  setIsOpen33(!isOpen33);
}

function toggleModalThirtyFour() {
  setIsOpen34(!isOpen34);
}

function toggleModalThirtyFive() {
  setIsOpen35(!isOpen35);
}

function toggleModalThirtySix() {
  setIsOpen36(!isOpen36);
}

function toggleModalThirtySeven() {
  setIsOpen37(!isOpen37);
}

function toggleModalThirtyEight() {
  setIsOpen38(!isOpen38);
}
/*
function toggleModalThirtyNine() {  //numero disponible anteriormente credicoophonduras.com
  setIsOpen39(!isOpen39);
}*/

function toggleModalForty() {
  setIsOpen40(!isOpen40);
}

function toggleModalFortyOne() {
  setIsOpen41(!isOpen41);
}

function toggleModalFortyTwo() {
  setIsOpen42(!isOpen42);
}

function toggleModalFortyThree() {
  setIsOpen43(!isOpen43);
}

function toggleModalFortyFour() {
  setIsOpen44(!isOpen44);
}

function toggleModalFortyFive() {
  setIsOpen45(!isOpen45);
}

function toggleModalFortySix() {
  setIsOpen46(!isOpen46);
}

function toggleModalFortySeven() {
  setIsOpen47(!isOpen47);
}

function toggleModalFortyEight() {
  setIsOpen48(!isOpen48);
}

function toggleModalFortyNine() {
  setIsOpen49(!isOpen49);
}

function toggleModalFifty() {
  setIsOpen50(!isOpen50);
}
/*
function toggleModalFiftyOne() {  //numero disponible anteriormente servicreditoselsalvador.com
  setIsOpen51(!isOpen51);
}*/

function toggleModalFiftyTwo() {
  setIsOpen52(!isOpen52);
}

function toggleModalFiftyThree() {
  setIsOpen53(!isOpen53);
}

function toggleModalFiftyFour() {
  setIsOpen54(!isOpen54);
}

function toggleModalFiftyFive() {
  setIsOpen55(!isOpen55);
}

function toggleModalFiftySix() {
  setIsOpen56(!isOpen56);
}

function toggleModalFiftySeven() {
  setIsOpen57(!isOpen57);
}

function toggleModalFiftyEight() {
  setIsOpen58(!isOpen58);
}
/*
function toggleModalFiftyNine() {  //numero disponible anteriormente teprestafacil.com
  setIsOpen59(!isOpen59);
}*/ 

function toggleModalSixty() {
  setIsOpen60(!isOpen60);
}

function toggleModalSixtyOne() {
  setIsOpen61(!isOpen61);
}

function toggleModalSixtyTwo() {
  setIsOpen62(!isOpen62);
}

function toggleModalSixtyThree() {
  setIsOpen63(!isOpen63);
}

function toggleModalSixtyFour() {
  setIsOpen64(!isOpen64);
}

function toggleModalSixtyFive() {
  setIsOpen65(!isOpen65);
}

function toggleModalSixtySix() {
  setIsOpen66(!isOpen66);
}

function toggleModalSixtySeven() {
  setIsOpen67(!isOpen67);
}

function toggleModalSixtyEight() {
  setIsOpen68(!isOpen68);
}

function toggleModalSixtyNine() {
  setIsOpen69(!isOpen69);
}



  
  
  // Código de Yuliana :)
  
  return (
    <div className="know_tm_main_section">
      <SimpleReactLightbox>
        <div className="know_tm_portfolio">
          <div className="know_tm_main_title">
            <span>Resume</span>
            <h3>My works</h3>
          </div>

          <Tabs>
            <TabList className="portfolio_filter">
              
              <Tab>All</Tab>
              {/* All */}
              <Tab>Wordpress</Tab>
              {/* For Vimeo */}
              <Tab>PHP</Tab>
              {/* For Youtube */}
{/*
<Tab>React</Tab>
{/* For Youtube */}{/*
<Tab>Angular</Tab>
{/* For Youtube */}{/*
<Tab>Moodle</Tab>
{/* For Images */}{/*
<Tab>Shop Online</Tab>*/}
{/* For Popup Details */}

            </TabList>
            {/* END TABLIST */}

            <div className="portfolio_list">
             


              {/* All */}
              <TabPanel>
                <ul className=" gallery_zoom">
                {/*
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtySix}>
                      <img src="/img/portfolio/66.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>Modulo-lista-de-precios-ERP-Defontana-Serverles</h3>
                    </div>
                  </div>
                </li>
                */}
                {/*
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtySeven}>
                      <img src="/img/portfolio/67.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Modulo-Condiciones-de-pago-ERP-Defontana-Serverles</h3>
                      </div>
                  </div>
                </li>*/}
                {/* END DETAILS */}
                {/*
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyEight}>
                      <img src="/img/portfolio/68.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>Academia-Integración-ERP</h3>
                    </div>
                  </div>
                </li>
                */}
                {/*
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyNine}>
                      <img src="/img/portfolio/69.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>Academia-Defontana</h3>
                    </div>
                  </div>
                </li>
                */}
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyFive}>
                     <img src={process.env.PUBLIC_URL + "/img/portfolio/65.png"} alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinancierodeamerica.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyFour}>
                     <img src="/img/portfolio/64.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>panamasoluciones.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyThree}>
                     <img src="/img/portfolio/63.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>maxiprestamos.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyTwo}>
                     <img src="/img/portfolio/62.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>credimaxgt.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyOne}>
                     <img src="/img/portfolio/61.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>americanseguros.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixty}>
                     <img src="/img/portfolio/60.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>multipopular.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyEight}>
                     <img src="/img/portfolio/58.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinanciar.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftySeven}>
                     <img src="/img/portfolio/57.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>colomseguros.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftySix}>
                     <img src="/img/portfolio/56.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>cajacredialiada.credit</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}                

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyFive}>
                     <img src="/img/portfolio/55.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>creditagil.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyFour}>
                     <img src="/img/portfolio/54.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>viivalyco.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyThree}>
                     <img src="/img/portfolio/53.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>tranficredit.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyTwo}>
                     <img src="/img/portfolio/52.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>solucionescreditogt.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFifty}>
                     <img src="/img/portfolio/50.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>facilcredit.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyNine}>
                     <img src="/img/portfolio/49.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>rappipresta.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyEight}>
                     <img src="/img/portfolio/48.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>rappifinanciera.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortySeven}>
                     <img src="/img/portfolio/47.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>prestayaguatemala.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortySix}>
                     <img src="/img/portfolio/46.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>prestaenlineagt.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}


                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyFive}>
                     <img src="/img/portfolio/45.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>prestacredit.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyFour}>
                     <img src="/img/portfolio/44.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>oikkaa.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyThree}>
                     <img src="/img/portfolio/43.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>multicreditos.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}


                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyTwo}>
                     <img src="/img/portfolio/42.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinancieroindustrial.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyOne}>
                     <img src="/img/portfolio/41.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>ecuafin.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalForty}>
                     <img src="/img/portfolio/40.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>creditoseg.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalThirtyEight}>
                     <img src="/img/portfolio/38.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>creativadeempaques.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalThirtySeven}>
                     <img src="/img/portfolio/37.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>cooperativaunioncentral.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}


                <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThree}>
                        <img src="/img/portfolio/1.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditoselestadogt.com</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}


                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFive}>
                        <img src="/img/portfolio/2.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditnacional.online</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSix}>
                        <img src="/img/portfolio/3.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>credisolidariaguatemala.com</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSeven}>
                        <img src="/img/portfolio/4.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditbac.net</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalEight}>
                        <img src="/img/portfolio/5.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditosyfinanzas.com</h3>
                      </div>
                    </div>
                  </li>
                   {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalNine}>
                        <img src="/img/portfolio/6.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>grupocredifinancieropanama.com</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalTen}>
                        <img src="/img/portfolio/7.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>grupofinancierodavibanco.com</h3>
                      </div>
                    </div>
                  </li>


                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalEleven}>
                        <img src="/img/portfolio/8.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>mayasoluciones.com</h3>
                      </div>
                    </div>
                  </li>

 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalTwelve}>
                        <img src="/img/portfolio/9.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>rappicredit.net</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThirteen}>
                        <img src="/img/portfolio/10.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>uba.edu.ve</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFourteen}>
                        <img src="/img/portfolio/11.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>apoyofinancieropy.com</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFifteen}>
                        <img src="/img/portfolio/12.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>coovivcred.com</h3>
                      </div>
                    </div>
                  </li>


                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSixteen}>
                        <img src="/img/portfolio/13.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>aseguradorainternacional.com</h3>
                      </div>
                    </div>
                  </li>

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSeventeen}>
                        <img src="/img/portfolio/14.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditvalores.com</h3>
                      </div>
                    </div>
                  </li>

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalEighteen}>
                        <img src="/img/portfolio/15.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>fincocredito.com</h3>
                      </div>
                    </div>
                  </li>

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalNineteen}>
                        <img src="/img/portfolio/16.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>grupocredit.net</h3>
                      </div>
                    </div>
                  </li>

               
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalTwenty}>
                      <img src="/img/portfolio/17.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinancieroservifin.com</h3>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalTwentyOne}>
                      <img src="/img/portfolio/18.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>marterraarquitectura.com</h3>
                    </div>
                  </div>
                </li>

              {/*
               <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyTwo}>
                    <img src="/img/portfolio/19.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-becas-ipfe</h3>
                  </div>
                </div>
              </li>
              */}
              {/*
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyThree}>
                    <img src="/img/portfolio/20.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-convenio</h3>
                  </div>
                </div>
              </li>
              */}
              {/*
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyFour}>
                    <img src="/img/portfolio/21.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-e-learning-factory</h3>
                  </div>
                </div>
              </li>
              */}
              {/*
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyFive}>
                    <img src="/img/portfolio/22.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-empresas</h3>
                  </div>
                </div>
              </li>
              */}
              {/*

              <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwentySeven}>
                <img src="/img/portfolio/23.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Landing-page-masters-online</h3>
              </div>
            </div>
          </li>
          */}
          {/*
          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwentyEight}>
                <img src="/img/portfolio/24.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Landing-page-premio-futuro-ingeniero</h3>
              </div>
            </div>
          </li>
          */}
          {/*
          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwentyNine}>
                <img src="/img/portfolio/25.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Landing-page-productos</h3>
              </div>
            </div>
          </li>
          */}
          {/*
          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirty}>
                <img src="/img/portfolio/26.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>EADIC.com</h3>
              </div>
            </div>
          </li>

         
                
          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirtyOne}>
                <img src="/img/portfolio/27.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Portal-Admisiones</h3>
              </div>
            </div>
          </li>
          */}
          {/*
          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirtyTwo}>
                <img src="/img/portfolio/28.png" alt="Details" />
              </div>
              <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>nelbelma-app</h3>
                  </div>
                </div>
              </li>
              */}

              <li data-aos="fade-right" data-aos-delay="100">
              <div className="list_inner">
                <div className="image" onClick={toggleModalThirtyOne}>
                  <img src="/img/portfolio/28.png" alt="Details" />
                </div>
                <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Attendance-control</h3>
                  </div>
                </div>
              </li>
          {/*
          <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThirtyThree}>
                    <img src="/img/portfolio/29.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Online-shop For EADIC</h3>
                  </div>
                </div>
              </li>

              <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirtyFour}>
                <img src="/img/portfolio/30.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>cancermama</h3>
              </div>
            </div>
          </li>

          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirtyFive}>
                <img src="/img/portfolio/31.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Campus-virtual-UBA</h3>
              </div>
            </div>
          </li>

          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirtySix}>
                <img src="/img/portfolio/32.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>libroventa.com</h3>
              </div>
            </div>
          </li>
          */}
            
            </ul>

              </TabPanel>
          
              {/* Woordpress */}

              <TabPanel>
                <ul className=" gallery_zoom">

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyFive}>
                     <img src="/img/portfolio/65.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinancierodeamerica.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyFour}>
                     <img src="/img/portfolio/64.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>panamasoluciones.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyThree}>
                     <img src="/img/portfolio/63.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>maxiprestamos.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyTwo}>
                     <img src="/img/portfolio/62.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>credimaxgt.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyOne}>
                     <img src="/img/portfolio/61.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>americanseguros.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixty}>
                     <img src="/img/portfolio/60.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>multipopular.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyEight}>
                     <img src="/img/portfolio/58.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinanciar.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftySeven}>
                     <img src="/img/portfolio/57.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>colomseguros.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftySix}>
                     <img src="/img/portfolio/56.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>cajacredialiada.credit</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}                

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyFive}>
                     <img src="/img/portfolio/55.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>creditagil.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyFour}>
                     <img src="/img/portfolio/54.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>viivalyco.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyThree}>
                     <img src="/img/portfolio/53.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>tranficredit.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFiftyTwo}>
                     <img src="/img/portfolio/52.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>solucionescreditogt.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFifty}>
                     <img src="/img/portfolio/50.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>facilcredit.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyNine}>
                     <img src="/img/portfolio/49.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>rappipresta.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyEight}>
                     <img src="/img/portfolio/48.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>rappifinanciera.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortySeven}>
                     <img src="/img/portfolio/47.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>prestayaguatemala.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortySix}>
                     <img src="/img/portfolio/46.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>prestaenlineagt.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyFive}>
                     <img src="/img/portfolio/45.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>prestacredit.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyFour}>
                     <img src="/img/portfolio/44.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>oikkaa.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyThree}>
                     <img src="/img/portfolio/43.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>multicreditos.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyTwo}>
                     <img src="/img/portfolio/42.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinancieroindustrial.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalFortyOne}>
                     <img src="/img/portfolio/41.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>ecuafin.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalForty}>
                     <img src="/img/portfolio/40.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>creditoseg.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalThirtyEight}>
                     <img src="/img/portfolio/38.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>creativadeempaques.net</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalThirtySeven}>
                     <img src="/img/portfolio/37.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>cooperativaunioncentral.com</h3>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
                
                <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThree}>
                        <img src="/img/portfolio/1.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditoselestadogt.com</h3>
                      </div>
                    </div>
                  </li>
                  {/* END DETAILS */}


                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFive}>
                        <img src="/img/portfolio/2.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditnacional.online</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSix}>
                        <img src="/img/portfolio/3.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>credisolidariaguatemala.com</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSeven}>
                        <img src="/img/portfolio/4.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditbac.net</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalEight}>
                        <img src="/img/portfolio/5.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditosyfinanzas.com</h3>
                      </div>
                    </div>
                  </li>
                   {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalNine}>
                        <img src="/img/portfolio/6.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>grupocredifinancieropanama.com</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalTen}>
                        <img src="/img/portfolio/7.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>grupofinancierodavibanco.com</h3>
                      </div>
                    </div>
                  </li>


                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalEleven}>
                        <img src="/img/portfolio/8.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>mayasoluciones.com</h3>
                      </div>
                    </div>
                  </li>

 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalTwelve}>
                        <img src="/img/portfolio/9.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>rappicredit.net</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThirteen}>
                        <img src="/img/portfolio/10.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>uba.edu.ve</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFourteen}>
                        <img src="/img/portfolio/11.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>apoyofinancieropy.com</h3>
                      </div>
                    </div>
                  </li>
 {/* END DETAILS */}
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalFifteen}>
                        <img src="/img/portfolio/12.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>coovivcred.com</h3>
                      </div>
                    </div>
                  </li>


                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSixteen}>
                        <img src="/img/portfolio/13.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>aseguradorainternacional.com</h3>
                      </div>
                    </div>
                  </li>

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSeventeen}>
                        <img src="/img/portfolio/14.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>creditvalores.com</h3>
                      </div>
                    </div>
                  </li>

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalEighteen}>
                        <img src="/img/portfolio/15.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>fincocredito.com</h3>
                      </div>
                    </div>
                  </li>

                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalNineteen}>
                        <img src="/img/portfolio/16.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>grupocredit.net</h3>
                      </div>
                    </div>
                  </li>

               
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalTwenty}>
                      <img src="/img/portfolio/17.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>grupofinancieroservifin.com</h3>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalTwentyOne}>
                      <img src="/img/portfolio/18.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>marterraarquitectura.com</h3>
                    </div>
                  </div>
                </li>

              {/*
               <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyTwo}>
                    <img src="/img/portfolio/19.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-becas-ipfe</h3>
                  </div>
                </div>
              </li>

              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyThree}>
                    <img src="/img/portfolio/20.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-convenio</h3>
                  </div>
                </div>
              </li>

              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyFour}>
                    <img src="/img/portfolio/21.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-e-learning-factory</h3>
                  </div>
                </div>
              </li>

              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyFive}>
                    <img src="/img/portfolio/22.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-empresas</h3>
                  </div>
                </div>
              </li>


              <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwentySeven}>
                <img src="/img/portfolio/23.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Landing-page-masters-online</h3>
              </div>
            </div>
          </li>

          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwentyEight}>
                <img src="/img/portfolio/24.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Landing-page-premio-futuro-ingeniero</h3>
              </div>
            </div>
          </li>

          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwentyNine}>
                <img src="/img/portfolio/25.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>Landing-page-productos</h3>
              </div>
            </div>
          </li>

          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirty}>
                <img src="/img/portfolio/26.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>EADIC.com</h3>
              </div>
            </div>
          </li>




          <li data-aos="fade-right" data-aos-delay="100">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThirtySix}>
                <img src="/img/portfolio/32.png" alt="Details" />
              </div>
              <div className="overlay"></div>
              <span className="icon-text svg"></span>
              <div className="details">
                <span> Details</span>
                <h3>libroventa.com</h3>
              </div>
            </div>
          </li>
          */}

            </ul>

              </TabPanel>

              {/* Laravel */}
              <TabPanel>
              <ul className=" gallery_zoom">
              {/*  
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThirtyOne}>
                    <img src="/img/portfolio/27.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Portal-Admisiones</h3>
                  </div>
                </div>
              </li>
              */}

              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThirtyOne}>
                    <img src="/img/portfolio/28.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Attendance-control</h3>
                      </div>
                </div>
              </li>
              {/*
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThirtyTwo}>
                    <img src="/img/portfolio/28.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>nelbelma-app</h3>
                      </div>
                </div>
              </li>
              */}
              {/*
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThirtyFour}>
                    <img src="/img/portfolio/30.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>cancermama</h3>
                  </div>
                </div>
              </li>
              */}
              
                  {/* END DETAILS */}
                 
                  {/* END DETAILS */}
                </ul>
                {/* END DETAILS GALLERY */}
              </TabPanel>


              {/* React */}
              <TabPanel>
                
                <ul className=" gallery_zoom">
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtySix}>
                      <img src="/img/portfolio/66.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>Modulo-lista-de-precios-ERP-Defontana-Serverles</h3>
                    </div>
                  </div>
                </li>

                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtySeven}>
                      <img src="/img/portfolio/67.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Modulo-Condiciones-de-pago-ERP-Defontana-Serverles</h3>
                      </div>
                  </div>
                </li>
                {/* END DETAILS */}

                </ul>

              </TabPanel>


              {/* Angular */}
              <TabPanel>

              <ul className=" gallery_zoom">
                <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalSixtyEight}>
                      <img src="/img/portfolio/68.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>Academia-Integración-ERP</h3>
                    </div>
                  </div>
                </li>
                 
                  {/* END DETAILS */}
                </ul>

              </TabPanel>


              {/* Moodle */}

              <TabPanel>
               
                <ul className=" gallery_zoom">
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalSixtyNine}>
                        <img src="/img/portfolio/69.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Academia-Defontana</h3>
                      </div>
                    </div>
                  </li>
                    {/* END DETAILS */}
                  
                  <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                      <div className="image" onClick={toggleModalThirtyFive}>
                        <img src="/img/portfolio/31.png" alt="Details" />
                      </div>
                      <div className="overlay"></div>
                      <span className="icon-text svg"></span>
                      <div className="details">
                        <span> Details</span>
                        <h3>Campus-virtual-UBA</h3>
                      </div>
                    </div>
                  </li>
                    {/* END DETAILS */}
                  
                </ul>
                {/* END DETAILS GALLERY */}
              </TabPanel>

              {/* Shop online */}

              <TabPanel>
                <ul className=" gallery_zoom">
                
                  <li data-aos="fade-right" data-aos-delay="100">
                  <div className="list_inner">
                    <div className="image" onClick={toggleModalThirtySix}>
                      <img src="/img/portfolio/32.png" alt="Details" />
                    </div>
                    <div className="overlay"></div>
                    <span className="icon-text svg"></span>
                    <div className="details">
                      <span> Details</span>
                      <h3>libroventa.com</h3>
                    </div>
                  </div>
              </li>

              <li data-aos="fade-right" data-aos-delay="100">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThirtyThree}>
                    <img src="/img/portfolio/29.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Online-shop For EADIC</h3>
                  </div>
                </div>
              </li>


              <li data-aos="fade-right" data-aos-delay="100">
                    <div className="list_inner">
                  <div className="image" onClick={toggleModalTwentyNine}>
                    <img src="/img/portfolio/25.png" alt="Details" />
                  </div>
                  <div className="overlay"></div>
                  <span className="icon-text svg"></span>
                  <div className="details">
                    <span> Details</span>
                    <h3>Landing-page-productos</h3>
                  </div>
                  </div>
              </li>

                </ul>
                {/* END DETAILS GALLERY */}
              </TabPanel>


          

            </div>
            {/* END LIST WRAPPER */}
          </Tabs>
        </div>
      </SimpleReactLightbox>


      {/* START MODAL FOR creditoselestadogt.com */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src={process.env.PUBLIC_URL + "/img/svg/cancel.svg"} alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>creditoselestadogt.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                            <div className="know_tm_button mr-2" >
                              <a href="https://creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                            </div> 
                            {/*
                            <div className="know_tm_button">
                              <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                              </a>
                            </div> 
                            */}

                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-creditoselestadogt.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-creditoselestadogt.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR creditoselestadogt.com */}


     {/* START MODAL FOR creditnacional.online */}
       <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>creditnacional.online</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                            <div className="know_tm_button mr-2" >
                               <a href="https://creditnacional.online" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                            </div> 
                            {/*
                            <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditnacional.online" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                            </div> 
                            */}

                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-creditnacional.online.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-creditnacional.online.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR creditnacional.online */}


     {/* START MODAL FOR credisolidariaguatemala.com */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>credisolidariaguatemala.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://credisolidariaguatemala.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 
                            {/*
                            <div className="know_tm_button">
                              <a href="https://github.com/Nelsonrondon-dev/Website-credisolidariaguatemala.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                              </a>
                            </div> 
                            */}

                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-credisolidariaguatemala.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-credisolidariaguatemala.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR credisolidariaguatemala.com */}



        {/* START MODAL FOR creditbac.net */}
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalSeven}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalSeven}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>creditbac.net</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://creditbac.net" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditbac.net" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-creditbac.net.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-creditbac.net.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR creditbac.net */}


       {/* START MODAL FOR creditosyfinanzas.com */}
       <Modal
          isOpen={isOpen8}
          onRequestClose={toggleModalEight}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalEight}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>creditosyfinanzas.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://creditosyfinanzas.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditosyfinanzas.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-creditosyfinanzas.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-creditosyfinanzas.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR creditosyfinanzas.com */}



      {/* START MODAL FOR grupocredifinancieropanama.com */}
         <Modal
          isOpen={isOpen9}
          onRequestClose={toggleModalNine}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalNine}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>grupocredifinancieropanama.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://grupocredifinancieropanama.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-grupocredifinancieropanama.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-grupocredifinancieropanama.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-grupocredifinancieropanama.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR grupocredifinancieropanama.com */}



        {/* START MODAL FOR grupofinancierodavibanco.com */}
        <Modal
          isOpen={isOpen10}
          onRequestClose={toggleModalTen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>grupofinancierodavibanco.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://grupofinancierodavibanco.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-grupofinancierodavibanco.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-grupofinancierodavibanco.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-grupofinancierodavibanco.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR grupofinancierodavibanco.com */}



      {/* START MODAL FOR mayasoluciones.com */}
      <Modal
          isOpen={isOpen11}
          onRequestClose={toggleModalEleven}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalEleven}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>mayasoluciones.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://mayasoluciones.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-mayasoluciones.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-mayasoluciones.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-mayasoluciones.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR mayasoluciones.com */}


      {/* START MODAL FOR rappicredit.net */}
        <Modal
          isOpen={isOpen12}
          onRequestClose={toggleModalTwelve}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwelve}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>rappicredit.net</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://rappicredit.net" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*     
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-rappicredit.net" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-rappicredit.net.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-rappicredit.net.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR rappicredit.net */}



      {/* START MODAL FOR uba.edu.ve */}
         <Modal
          isOpen={isOpen13}
          onRequestClose={toggleModalThirteen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>uba.edu.ve</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://uba.edu.ve" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Wbsite-uba.edu.ve" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Wbsite-uba.edu.ve.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Wbsite-uba.edu.ve.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR uba.edu.ve */}


        {/* START MODAL FOR apoyofinancieropy.com */}
        <Modal
          isOpen={isOpen14}
          onRequestClose={toggleModalFourteen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalFourteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>apoyofinancieropy.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://apoyofinancieropy.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-apoyofinancieropy.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Wbsite-apoyofinancieropy.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Wbsite-apoyofinancieropy.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR apoyofinancieropy.com */}


        {/* START MODAL FOR coovivcred.com */}
        <Modal
          isOpen={isOpen15}
          onRequestClose={toggleModalFifteen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalFifteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>coovivcred.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                          The project is a web application that utilizes a client-server architecture. The client-side of the application is built using JavaScript, jQuery, CSS3, and DIVI, a popular WordPress theme that simplifies the process of creating responsive web designs. On the server-side, PHP 8 is used as the programming language, along with MySQL as the database management system. The project is built on the WordPress 6.1 content management system, which provides an easy-to-use interface for managing website content and functionality. Together, these technologies create a robust and scalable platform that allows for seamless integration of dynamic client-side features and server-side processing.                        </p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://coovivcred.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-coovivcred.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Website-coovivcred.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Website-coovivcred.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR coovivcred.com */}



           {/* START MODAL FOR aseguradorainternacional.com */}
           <Modal
          isOpen={isOpen16}
          onRequestClose={toggleModalSixteen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalSixteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>aseguradorainternacional.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                          <p>
                          The project is a landing page that utilizes . Built using WordPress 6.1 and designed with DIVI, CSS3, and Fontawesome, we've created a fully customizable, visually appealing, and responsive website.
                          </p>
                          <p>
                          We've incorporated JavaScript and jQuery for interactivity and animations, while PHP 8 and MySQL handle the backend for security and efficiency. The result is a dynamic, engaging, and seamless website that delivers a fantastic user experience and drives conversions.llowing us to handle dynamic content with ease. In summary, our landing page project is a harmonious blend of design, technology, and functionality that delivers a fantastic user experience and drives conversions.
                          </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://aseguradorainternacional.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Landing-page-aseguradorainternacional.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-aseguradorainternacional.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-aseguradorainternacional.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR aseguradorainternacional.com */}



       {/* START MODAL FOR creditvalores.com */}
       <Modal
          isOpen={isOpen17}
          onRequestClose={toggleModalSeventeen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalSixteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>creditvalores.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                          <p>
                          The project is a landing page that utilizes . Built using WordPress 6.1 and designed with DIVI, CSS3, and Fontawesome, we've created a fully customizable, visually appealing, and responsive website.
                          </p>
                          <p>
                          We've incorporated JavaScript and jQuery for interactivity and animations, while PHP 8 and MySQL handle the backend for security and efficiency. The result is a dynamic, engaging, and seamless website that delivers a fantastic user experience and drives conversions.llowing us to handle dynamic content with ease. In summary, our landing page project is a harmonious blend of design, technology, and functionality that delivers a fantastic user experience and drives conversions.
                          </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://creditvalores.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Landing-page-creditvalores.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-creditvalores.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-creditvalores.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR creditvalores.com */}



       {/* START MODAL FOR fincocredito.com */}
       <Modal
          isOpen={isOpen18}
          onRequestClose={toggleModalEighteen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalEighteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>fincocredito.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                          <p>
                          The project is a landing page that utilizes . Built using WordPress 6.1 and designed with DIVI, CSS3, and Fontawesome, we've created a fully customizable, visually appealing, and responsive website.
                          </p>
                          <p>
                          We've incorporated JavaScript and jQuery for interactivity and animations, while PHP 8 and MySQL handle the backend for security and efficiency. The result is a dynamic, engaging, and seamless website that delivers a fantastic user experience and drives conversions.llowing us to handle dynamic content with ease. In summary, our landing page project is a harmonious blend of design, technology, and functionality that delivers a fantastic user experience and drives conversions.
                          </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                              <div className="know_tm_button mr-2" >
                                <a href="http://fincocredito.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-fincocredito.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-fincocredito.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-fincocredito.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR fincocredito.com */}


        {/* START MODAL FOR grupocredit.net */}
       <Modal
          isOpen={isOpen19}
          onRequestClose={toggleModalNineteen}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalNineteen}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>grupocredit.net</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                          <p>
                          The project is a landing page that utilizes . Built using WordPress 6.1 and designed with DIVI, CSS3, and Fontawesome, we've created a fully customizable, visually appealing, and responsive website.
                          </p>
                          <p>
                          We've incorporated JavaScript and jQuery for interactivity and animations, while PHP 8 and MySQL handle the backend for security and efficiency. The result is a dynamic, engaging, and seamless website that delivers a fantastic user experience and drives conversions.llowing us to handle dynamic content with ease. In summary, our landing page project is a harmonious blend of design, technology, and functionality that delivers a fantastic user experience and drives conversions.
                          </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://grupocredit.net" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-grupocredit.net" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-grupocredit.net.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-grupocredit.net.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR grupocredit.net */}


        {/* START MODAL FOR grupofinancieroservifin.com */}
       <Modal
          isOpen={isOpen20}
          onRequestClose={toggleModalTwenty}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwenty}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>grupofinancieroservifin.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                          <p>
                          The project is a landing page that utilizes . Built using WordPress 6.1 and designed with DIVI, CSS3, and Fontawesome, we've created a fully customizable, visually appealing, and responsive website.
                          </p>
                          <p>
                          We've incorporated JavaScript and jQuery for interactivity and animations, while PHP 8 and MySQL handle the backend for security and efficiency. The result is a dynamic, engaging, and seamless website that delivers a fantastic user experience and drives conversions.llowing us to handle dynamic content with ease. In summary, our landing page project is a harmonious blend of design, technology, and functionality that delivers a fantastic user experience and drives conversions.
                          </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://grupofinancieroservifin.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Landing-page-grupofinancieroservifin.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-grupofinancieroservifin.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-grupofinancieroservifin.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR grupofinancieroservifin.com */}



        {/* START MODAL FOR marterraarquitectura.com */}
        <Modal
          isOpen={isOpen21}
          onRequestClose={toggleModalTwentyOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>marterraarquitectura.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                          <p>
                          The project is a landing page that utilizes . Built using WordPress 6.1 and designed with DIVI, CSS3, and Fontawesome, we've created a fully customizable, visually appealing, and responsive website.
                          </p>
                          <p>
                          We've incorporated JavaScript and jQuery for interactivity and animations, while PHP 8 and MySQL handle the backend for security and efficiency. The result is a dynamic, engaging, and seamless website that delivers a fantastic user experience and drives conversions.llowing us to handle dynamic content with ease. In summary, our landing page project is a harmonious blend of design, technology, and functionality that delivers a fantastic user experience and drives conversions.
                          </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                              <div className="know_tm_button mr-2" >
                                <a href="http://marterraarquitectura.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Landing-page-marterraarquitectura.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                              </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-marterraarquitectura.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-marterraarquitectura.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR marterraarquitectura.com */}




        {/* START MODAL FOR Landing-page-becas-ipfe */}
        <Modal
          isOpen={isOpen22}
          onRequestClose={toggleModalTwentyTwo}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyTwo}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-becas-ipfe</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/becaseadic-ipfe/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-Landing-page-becas-ipfe" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-becas-ipfe.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-becas-ipfe.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-becas-ipfe */}



        {/* START MODAL FOR Landing-page-convenio */}
        <Modal
          isOpen={isOpen23}
          onRequestClose={toggleModalTwentyThree}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyThree}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-convenio</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/convenios-sib/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-Landing-page-convenio" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/landing-convenio-.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/landing-convenio-.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-convenio */}



        {/* START MODAL FOR Landing-page-e-learning-factory */}
        <Modal
          isOpen={isOpen24}
          onRequestClose={toggleModalTwentyFour}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyFour}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-e-learning-factory</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/e-learning-factory/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-Landing-page-e-learning-factory" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-e-learning-factory.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-e-learning-factory.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-e-learning-factory */}


        {/* START MODAL FOR Landing-page-empresas */}
        <Modal
          isOpen={isOpen25}
          onRequestClose={toggleModalTwentyFive}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyFive}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-empresas</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/empresas_ainfrat/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-empresas" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-empresas.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-empresas.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-empresas */}


         {/* START MODAL FOR Landing-page-master-premium */}
         <Modal
          isOpen={isOpen26}
          onRequestClose={toggleModalTwentySix}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentySix}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-master-premium</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/mpremium/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-master-premium" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-mpremium.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-mpremium.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-master-premium */}

        {/* START MODAL FOR Landing-page-masters-online */}
       <Modal
          isOpen={isOpen27}
          onRequestClose={toggleModalTwentySeven}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentySeven}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-masters-online</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/mbimci/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-masters-online" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/master-online.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/master-online.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-masters-online */}


         {/* START MODAL FOR Landing-page-premio-futuro-ingeniero */}
        <Modal
          isOpen={isOpen28}
          onRequestClose={toggleModalTwentyEight}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyEight}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-premio-futuro-ingeniero</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project is a landing page, developed under the CMS WordPress, along with the powerful page builder Elementor PRO to achieve a highly customized and easy-to-manage design.
                        </p>
                        <p>For the user interface, we used CSS3 to create a visually appealing and responsive design that adapts to different screen sizes and devices. We also used Fontawesome to add icons and further customize the design.
                        </p>

                        <p>To add interactivity and functionality, we implemented JavaScript and jQuery. Additionally, we incorporated the technology of Intl-tel-input to ensure that users can effectively enter their phone numbers regardless of the country they come from.
                        </p>
                        <p>Regarding the API, we integrated Vtiger CRM and ActiveCampaign to improve website efficiency and automation. Additionally, we used PHP and MySQL to handle the backend and ensure the security and efficiency of the site.
                        </p>
                        <p>In summary, our project is a combination of advanced technologies and creative design that has allowed us to create a highly customized, attractive, and functional website capable of integrating with external platforms for more efficient management.
                        </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                               <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/premio_futuro_eadic/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-premio-futuro-ingeniero" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-premio-futuro-ingeniero.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-premio-futuro-ingeniero.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-premio-futuro-ingeniero */}


        {/* START MODAL FOR Landing-page-productos */}
        <Modal
          isOpen={isOpen29}
          onRequestClose={toggleModalTwentyNine}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwentyNine}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Landing-page-productos</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                                  <p>
                                  The project at hand consists of creating an online store using Elementor as the platform for design and visual customization of the store, along with Javascript and Jquery for programming and page dynamism. Additionally, CSS3 is employed for defining the style and presentation of visual elements.
                                  </p>
                                  <p>
                                  In terms of functionality, the project includes the integration of WooCommerce as the e-commerce system for managing products and sales. Additionally, two payment gateways are integrated: Paypal and Redsys, which allow for secure and efficient online transactions. Finally, the project is developed in a PHP server environment and MySQL database, using WordPress as the content management platform. All of the above combines to create a complete, robust, and attractive online store for users.
                                  </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/paypal.png"
                                      alt=""
                                />  

                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/woocommerce.png"
                                      alt=""
                                />   

                             
                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/producto/autocad-plant-3d-basico-intermedio/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Landing-page-productos" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Landing-page-producto.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Landing-page-producto.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Landing-page-productos */}


        {/* START MODAL FOR Website-EADIC.com */}
        <Modal
          isOpen={isOpen30}
          onRequestClose={toggleModalThirty}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirty}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Website-EADIC.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        <p>
                          This project was created using various technologies such as Js, Jquery, CSS3, Elementor.pro, WooCommerce, Advanced Custom Fields PRO, Yoast SEO, PHP 8, MySQL, and WordPress 6.0. The project involved building a website that would integrate with Vtiger CRM and ActiveCampaign for API. Additionally, the payment gateway used for the website was Paypal and Redsys.
                        </p>
                        <p>
                        The project's front-end was created using Elementor.pro, Jquery, and CSS3, while Advanced Custom Fields PRO was used to create custom fields for the site. Yoast SEO was used to optimize the site for search engines. On the server side, PHP 8 and MySQL were used to build the website. The project's main goal was to create a custom website that would integrate with the CRM and the email marketing tool while also providing a seamless payment experience for the users.                        
                        </p>
                      

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                                <a href="https://developers.activecampaign.com/reference/overview" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/activeC.jpg"
                                      alt=""
                                />  </a>

                                 <a href="https://help.vtiger.com/article/147111249-Rest-API-Manual" target={'_blank'}><img
                                      className="svg"
                                      src="img/svg/tech/vtiger.png"
                                      alt=""
                                />  </a> 

                                  <img
                                      className="svg"
                                      src="img/svg/tech/paypal.png"
                                      alt=""
                                />  

                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/woocommerce.png"
                                      alt=""
                                />   

                                 <img
                                      className="svg"
                                      src="img/svg/tech/seo.png"
                                      alt=""
                                />   

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="http://eadic.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Website-EADIC.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/eadic.com/home.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/eadic.com/home.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Website-EADIC.com */}


        {/* START MODAL FOR Portal-Admisiones */}
        <Modal
          isOpen={isOpen31}
          onRequestClose={toggleModalThirtyOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirtyOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Attendance-Control</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        
                          <p>Custom web app built in PHP using the CodeIgniter framework, developed as part of an educational attendance control project. The platform was styled with CSS and Sass to ensure a responsive and user-friendly interface.</p>

                          <p>Beyond attendance tracking, the system includes modules for managing class schedules, assigned teachers per student, and subject listings. These features offer a complete overview of the academic environment for both staff and students.</p>

                          <p>The application supports multiple user roles with specific access levels, including administrator, teacher, student, and parent (representative), each with tailored interfaces and functionalities to enhance usability and security.</p>



                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/sass.svg"
                                      alt=""
                                    />  
                          
                               <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                    />  
                          
                                <img
                                      className="svg"
                                      src="img/svg/tech/codeigniter.svg"
                                      alt=""
                                    />   
  

                                <img
                                      className="svg"
                                      src="img/svg/tech/mysql.svg"
                                      alt=""
                                />                                    
                                 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                
                              {/*
                                <div className="know_tm_button mr-2" >
                                <a href="https://eadic.org/portal-admisiones/public/login" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                                </div> 
                              */}
                                  <div className="know_tm_button">
                                  <a href="https://github.com/Yuliana22Angel/School-attendance-control/tree/master" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/nelbelma-app/control.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/nelbelma-app/control.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Portal-Admisiones */}





         {/* START MODAL FOR Online-shop*/}
        <Modal
          isOpen={isOpen33}
          onRequestClose={toggleModalThirtyThree}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirtyThree}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Online-shop For EADIC</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                                  <p>
                                  The project at hand consists of creating an online store using Elementor as the platform for design and visual customization of the store, along with Javascript and Jquery for programming and page dynamism. Additionally, CSS3 is employed for defining the style and presentation of visual elements.
                                  </p>
                                  <p>
                                  In terms of functionality, the project includes the integration of WooCommerce as the e-commerce system for managing products and sales. Additionally, two payment gateways are integrated: Paypal and Redsys, which allow for secure and efficient online transactions. Finally, the project is developed in a PHP server environment and MySQL database, using WordPress as the content management platform. All of the above combines to create a complete, robust, and attractive online store for users.
                                  </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/elementor.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/paypal.png"
                                      alt=""
                                />  

                                <img
                                      className="svg"
                                      src="img/svg/tech/redsys.png"
                                      alt=""
                                />  

                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/woocommerce.png"
                                      alt=""
                                />   

                             
                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://www.eadic.info/home-cursos-online-2/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Online-shop" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/shop.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/shop.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/shop/carrito.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/shop/carrito.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>


                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/shop/finalizar-compra.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/shop/finalizar-compra.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Online-shop*/}


       {/* START MODAL FOR cancermama */}
       <Modal
          isOpen={isOpen34}
          onRequestClose={toggleModalThirtyFour}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirtyFour}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>cancermama</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                        
                        <p>Application Web made in Laravel 7. For the company <a href="https://www.bd.com/en-us">"Advancing the world of health" BD</a>, for the world cancer day event, that allows you to add a filter to the uploaded images</p>
                        
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          
                             <img
                                      className="svg"
                                      src="img/svg/tech/Dropzone.png"
                                      alt=""
                                    />  

                               <img
                                      className="svg"
                                      src="img/svg/tech/boostrap.svg"
                                      alt=""
                                    />  
                          
                                

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />   

                                  <img
                                      className="svg"
                                      src="img/svg/tech/laravel.svg"
                                      alt=""
                                />    

                                <img
                                      className="svg"
                                      src="img/svg/tech/mysql.svg"
                                      alt=""
                                />    



                                

                                 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://nelson-dev.tech/cancermama/public" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/portal-nelbelma" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/laravel/cancermama.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/laravel/cancermama.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/laravel/cancermama-movil.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/laravel/cancermama-movil.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR cancermama */}


       {/* START MODAL FOR  Campus-virtual-UBA */}
       <Modal
          isOpen={isOpen35}
          onRequestClose={toggleModalThirtyFive}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirtyFive}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3> Campus-virtual-UBA</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    


                        <p> A Virtual Campus was successfully developed for the Universidad Bicentenaria de Aragua, using client-side technologies such as Js, Jquery, and CSS3. For the server-side, PHP 8 and MySQL were chosen as the database to integrate with the Moodle Learning Management System.
                        </p>
                        <p>The Virtual Campus offered a modern and intuitive user interface, allowing students and teachers to access courses, educational materials, and online activities from anywhere, at any time. Additionally, the platform had advanced features, such as the ability to create learning communities, manage student groups, and integrate with online collaboration tools.
                        </p>
                        <p>The Virtual Campus developed for the Universidad Bicentenaria de Aragua became an essential tool for online learning, offering a personalized and high-quality learning experience for students and teachers.
                        </p>


                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          
                             

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />   

                                 
                                <img
                                      className="svg"
                                      src="img/svg/tech/mysql.svg"
                                      alt=""
                                />    

                                <img
                                      className="svg"
                                      src="img/svg/tech/moodle.png"
                                      alt=""
                                />    





                                 

                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                              <div className="know_tm_button mr-2" >
                                <a href="https://pregrado.campusvirtualuba.net.ve/trimestre" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 
                              {/*
                              <div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Campus-virtual-UBA" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>
                              </div> 
                              */}

                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Campus-virtual-home.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Campus-virtual-home.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Campus-virtual-escritorio.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Campus-virtual-escritorio.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Campus-virtual-curso.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Campus-virtual-curso.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Campus-virtual-contenidos.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Campus-virtual-contenidos.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Campus-virtual-calendarios.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Campus-virtual-calendarios.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR  Campus-virtual-UBA */}


       {/* START MODAL FOR Shop-online-libroventa.com*/}
        <Modal
          isOpen={isOpen36}
          onRequestClose={toggleModalThirtySix}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThirtySix}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE ICON */}
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="list_inner popup_details">
                
                  <div className="portfolio_main_title ">
                    <span>Detail</span>
                    <h3>Shop-online-libroventa.com</h3>
                  </div>

                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
    
                                  <p>
                                  The project at hand consists of creating an online store using Elementor as the platform for design and visual customization of the store, along with Javascript and Jquery for programming and page dynamism. Additionally, CSS3 is employed for defining the style and presentation of visual elements.
                                  </p>
                                  <p>
                                  In terms of functionality, the project includes the integration of WooCommerce as the e-commerce system for managing products and sales. Additionally, two payment gateways are integrated: Paypal and payU, which allow for secure and efficient online transactions. Finally, the project is developed in a PHP server environment and MySQL database, using WordPress as the content management platform. All of the above combines to create a complete, robust, and attractive online store for users.
                                  </p>

                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />    
                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/wordpress.png"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/divi.svg"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/paypal.png"
                                      alt=""
                                />  

                                <img
                                      className="svg"
                                      src="img/svg/tech/payu.jpg"
                                      alt=""
                                />  

                                
                                <img
                                      className="svg"
                                      src="img/svg/tech/woocommerce.png"
                                      alt=""
                                />   

                             
                            </li>

                            <li>

                              <span className="first">Category</span>

                              <div className="know_tm_video">
                                <div className="video_inner">
                                

                                <div className="know_tm_button mr-2" >
                                <a href="https://libroventa.com/" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                                </a>
                              </div> 

                                  <div className="know_tm_button">
                                  <a href="https://github.com/Nelsonrondon-dev/Shop-online-libroventa.com" target={'_blank'}>                              
                                  <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                  </a>

                              </div> 


                              </div>
                            </div>
                            
                            
                                


                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Shop-online-libroventa.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Shop-online-libroventa.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Shop-online-checkout-libroventa.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Shop-online-checkout-libroventa.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>


                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/landing/Shop-online-cart-libroventa.com.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/landing/Shop-online-cart-libroventa.com.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}  
        </Modal>
        {/* END MODAL FOR Shop-online-libroventa.com*/}


      {/* START MODAL FOR cooperativaunioncentral.com */}
      <Modal
        isOpen={isOpen37}
        onRequestClose={toggleModalThirtySeven}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThirtySeven}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>cooperativaunioncentral.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://cooperativaunioncentral.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/}
                             

                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-cooperativaunioncentral.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-cooperativaunioncentral.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR cooperativaunioncentral.com */}


      {/* START MODAL FOR creativadeempaques.net */}
      <Modal
        isOpen={isOpen38}
        onRequestClose={toggleModalThirtyEight}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThirtyEight}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>creativadeempaques.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://creativadeempaques.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-creativadeempaques.net.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-creativadeempaques.net.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR creativadeempaques.net */}


      {/* START MODAL FOR creditoseg.com */}
      <Modal
        isOpen={isOpen40}
        onRequestClose={toggleModalForty}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalForty}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>creditoseg.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://creditoseg.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-creditoseg.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-creditoseg.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR creditoseg.com */}


      {/* START MODAL FOR ecuafin.net */}
      <Modal
        isOpen={isOpen41}
        onRequestClose={toggleModalFortyOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>ecuafin.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://ecuafin.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-ecuafin.net.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-ecuafin.net.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR ecuafin.net */}


      {/* START MODAL FOR grupofinancieroindustrial.com */}
      <Modal
        isOpen={isOpen42}
        onRequestClose={toggleModalFortyTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>grupofinancieroindustrial.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://grupofinancieroindustrial.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/}  


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-grupofinancieroindustrial.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-grupofinancieroindustrial.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR grupofinancieroindustrial.com */}


      {/* START MODAL FOR multicreditos.net */}
      <Modal
        isOpen={isOpen43}
        onRequestClose={toggleModalFortyThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>multicreditos.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://multicreditos.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-multicreditos.net.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-multicreditos.net.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR multicreditos.net */}


      {/* START MODAL FOR oikkaa.com */}
      <Modal
        isOpen={isOpen44}
        onRequestClose={toggleModalFortyFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>multicreditos.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://oikkaa.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-oikkaa.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-oikkaa.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR oikkaa.com */}


      {/* START MODAL FOR prestacredit.net */}
      <Modal
        isOpen={isOpen45}
        onRequestClose={toggleModalFortyFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>prestacredit.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://prestacredit.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-prestacredit.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-prestacredit.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR prestacredit.net */}


      {/* START MODAL FOR prestaenlineagt.com */}
      <Modal
        isOpen={isOpen46}
        onRequestClose={toggleModalFortySix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortySix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>prestaenlineagt.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://prestaenlineagt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-prestaenlineagt.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-prestaenlineagt.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR prestaenlineagt.com */}


      {/* START MODAL FOR prestayaguatemala.com */}
      <Modal
        isOpen={isOpen47}
        onRequestClose={toggleModalFortySeven}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortySeven}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>prestayaguatemala.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://prestayaguatemala.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-prestayaguatemala.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-prestayaguatemala.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR prestayaguatemala.com */}


      {/* START MODAL FOR rappifinanciera.com */}
      <Modal
        isOpen={isOpen48}
        onRequestClose={toggleModalFortyEight}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyEight}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>rappifinanciera.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://rappifinanciera.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-rappifinanciera.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-rappifinanciera.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR rappifinanciera.com */}


      {/* START MODAL FOR rappipresta.com */}
      <Modal
        isOpen={isOpen49}
        onRequestClose={toggleModalFortyNine}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFortyNine}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>rappipresta.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://rappipresta.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-rappipresta.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-rappipresta.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR rappipresta.com */}


      {/* START MODAL FOR facilcredit.net */}
      <Modal
        isOpen={isOpen50}
        onRequestClose={toggleModalFifty}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFifty}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>facilcredit.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://facilcredit.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-facilcredit.net.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-facilcredit.net.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR facilcredit.net */}


      {/* START MODAL FOR solucionescreditogt.com */}
      <Modal
        isOpen={isOpen52}
        onRequestClose={toggleModalFiftyTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftyTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>solucionescreditogt.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://solucionescreditogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-solucionescreditogt.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-solucionescreditogt.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR solucionescreditogt.com */}


      {/* START MODAL FOR tranficredit.com */}
      <Modal
        isOpen={isOpen53}
        onRequestClose={toggleModalFiftyThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftyThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>tranficredit.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://tranficredit.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-tranficredit.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-tranficredit.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR tranficredit.com */}


      {/* START MODAL FOR viivalyco.com */}
      <Modal
        isOpen={isOpen54}
        onRequestClose={toggleModalFiftyFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftyFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>viivalyco.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://viivalyco.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-viivalyco.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-viivalyco.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR viivalyco.com */}


      {/* START MODAL FOR creditagil.com */}
      <Modal
        isOpen={isOpen55}
        onRequestClose={toggleModalFiftyFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftyFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>creditagil.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://creditagil.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-creditagil.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-creditagil.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR creditagil.com */}


      {/* START MODAL FOR cajacredialiada.credit */}
      <Modal
        isOpen={isOpen56}
        onRequestClose={toggleModalFiftySix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftySix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>cajacredialiada.credit</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://cajacredialiada.credit " target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-cajacredialiada.credit.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-cajacredialiada.credit.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR cajacredialiada.credit */}
      
      
      {/* START MODAL FOR colomseguros.com */}
      <Modal
        isOpen={isOpen57}
        onRequestClose={toggleModalFiftySeven}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftySeven}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>colomseguros.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://colomseguros.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-colomseguros.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-colomseguros.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR colomseguros.com */}
      
      
      {/* START MODAL FOR grupofinanciar.com */}
      <Modal
        isOpen={isOpen58}
        onRequestClose={toggleModalFiftyEight}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFiftyEight}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>grupofinanciar.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://grupofinanciar.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-grupofinanciar.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-grupofinanciar.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR grupofinanciar.com */}
      
      
      {/* START MODAL FOR multipopular.net */}
      <Modal
        isOpen={isOpen60}
        onRequestClose={toggleModalSixty}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixty}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>multipopular.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://multipopular.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-multipopular.net.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-multipopular.net.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR multipopular.net */}
      
      
      {/* START MODAL FOR americanseguros.com */}
      <Modal
        isOpen={isOpen61}
        onRequestClose={toggleModalSixtyOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>americanseguros.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://americanseguros.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-americanseguros.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-americanseguros.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR americanseguros.com  */}
      
      
      {/* START MODAL FOR credimaxgt.com */}
      <Modal
        isOpen={isOpen62}
        onRequestClose={toggleModalSixtyTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>credimaxgt.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://credimaxgt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-credimaxgt.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-credimaxgt.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR credimaxgt.com */}
      
      
      {/* START MODAL FOR maxiprestamos.net */}
      <Modal
        isOpen={isOpen63}
        onRequestClose={toggleModalSixtyThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>maxiprestamos.net</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://maxiprestamos.net" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-maxiprestamos.net.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-maxiprestamos.net.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR maxiprestamos.net */}
      
      
      {/* START MODAL FOR panamasoluciones.com */}
      <Modal
        isOpen={isOpen64}
        onRequestClose={toggleModalSixtyFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>panamasoluciones.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://panamasoluciones.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-panamasoluciones.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-panamasoluciones.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR panamasoluciones.com */}
      
      
      {/* START MODAL FOR grupofinancierodeamerica.com */}
      <Modal
        isOpen={isOpen65}
        onRequestClose={toggleModalSixtyFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>grupofinancierodeamerica.com</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        The project consists of a web application that is based on a client-server architecture. The client side is developed using JavaScript, jQuery, CSS3 and DIVI, a widely used theme in WordPress that makes it easy to create responsive web designs. On the server side, PHP 8 is used as the programming language, along with MySQL as the database management system. The platform is built on WordPress 6.4.3, a robust version of the content management system that offers an intuitive interface for managing website content and functionality. These combined technologies create a robust and adaptable platform that enables the seamless integration of dynamic client-side functions and server-side processing.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />
                            <img
                                    className="svg"
                                    src="img/svg/tech/jquery.png"
                                    alt=""
                                  />  
                        

                              <img
                                    className="svg"
                                    src="img/svg/tech/php.svg"
                                    alt=""
                              />    
                              
                              <img
                                    className="svg"
                                    src="img/svg/tech/wordpress.png"
                                    alt=""
                              />   

                              <img
                                    className="svg"
                                    src="img/svg/tech/divi.svg"
                                    alt=""
                              />   

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://grupofinancierodeamerica.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
                           
                          
                              


                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/landing/Website-grupofinancierodeamerica.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/landing/Website-grupofinancierodeamerica.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR grupofinancierodeamerica.com */}   

      
      {/* START MODAL FOR Modulo-lista-de-precios-ERP-Defontana-Serverles */}
      <Modal
        isOpen={isOpen66}
        onRequestClose={toggleModalSixtySix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtySix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Modulo lista de precios ERP Defontana <br/>Serverles</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
    
                        
                      <p>Is a cloud infrastructure solution developed using cutting-edge technologies. On the front end, an AWS Continuous Integration Service is implemented alongside Lambda functions and React 18 with TypeScript. On the backend, API Gateway, Lambda functions, and TypeScript are employed, all managed with CDK. This modern architecture ensures optimal performance and efficient scalability for price list management within the ERP environment.</p>
                        
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/react.svg"
                                      alt=""
                                    />  

                                <img
                                      className="svg"
                                      src="img/svg/tech/typescript.svg"
                                      alt=""
                                />  

                                <img
                                      className="svg"
                                      src="img/svg/tech/aws.svg"
                                      alt=""
                                /> 

                                <img
                                      className="svg"
                                      src="img/svg/tech/awslambda.svg"
                                      alt=""
                                    />

                                <img
                                      className="svg"
                                      src="img/svg/tech/api-gateway.svg"
                                      alt=""
                                    /> 

                                <img
                                      className="svg"
                                      src="img/svg/tech/cdk.svg"
                                      alt=""
                                    />  

            

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                                

                              <div className="know_tm_button mr-2" >
                              <a href="https://erp.defontana.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                              </div> 

                              <div className="know_tm_button">
                                <a
                                  href="#"
                                  target="_blank"
                                  title="Repositorio privado"
                                  id="bitbucketLink"
                                  className="disabled-link"
                                  onClick={(event) => {
                                    event.preventDefault();
                                  }}
                                >
                                 
                                  <img className="svg-btn" src="img/svg/tech/bitbucket.png" alt="" /> Bitbucket
                                </a>
                              </div>



                              </div>
                            </div>

                            </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/precios/home.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/precios/home.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/precios/Lista-de-precios.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/precios/Lista-de-precios.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/precios/importar.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/precios/importar.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/precios/Eliminar.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/precios/Eliminar.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/precios/volumen.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/precios/volumen.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/precios/configurar.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/precios/configurar.png",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Modulo-lista-de-precios-ERP-Defontana-Serverles */}    


        {/* START MODAL FOR Modulo-Condiciones-de-pago-ERP-Defontana-Serverles */}
        <Modal
        isOpen={isOpen67}
        onRequestClose={toggleModalSixtySeven}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtySeven}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Modulo Condiciones de pago ERP <br/>Defontana Serverles</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
    
                        
                      <p>Is a cloud infrastructure solution built with state-of-the-art technologies. On the front end, it features an AWS Continuous Integration Service integrated with Lambda functions and React 18 using TypeScript. On the backend, it leverages API Gateway, Lambda functions, and TypeScript, complemented by SDK, all orchestrated with CDK. This modern architecture ensures robustness and scalability for managing payment conditions within the ERP environment.</p>
                        
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/react.svg"
                                      alt=""
                                    />      

                                <img
                                      className="svg"
                                      src="img/svg/tech/typescript.svg"
                                      alt=""
                                />   

                                <img
                                      className="svg"
                                      src="img/svg/tech/aws.svg"
                                      alt=""
                                /> 

                                <img
                                      className="svg"
                                      src="img/svg/tech/awslambda.svg"
                                      alt=""
                                    />

                                <img
                                      className="svg"
                                      src="img/svg/tech/api-gateway.svg"
                                      alt=""
                                    /> 

                                <img
                                      className="svg"
                                      src="img/svg/tech/cdk.svg"
                                      alt=""
                                    />


                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                                

                              <div className="know_tm_button mr-2" >
                              <a href="https://erp.defontana.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                              </div> 

                              <div className="know_tm_button">
                                <a
                                  href="#"
                                  target="_blank"
                                  title="Repositorio privado"
                                  id="bitbucketLink"
                                  className="disabled-link"
                                  onClick={(event) => {
                                    event.preventDefault();
                                  }}
                                >
                                 
                                  <img className="svg-btn" src="img/svg/tech/bitbucket.png" alt="" /> Bitbucket
                                </a>
                              </div>  

                              </div>
                            </div>
                          </li>
                            


                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/pago/pago-home.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/pago/pago-home.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/pago/Modal-crear.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/pago/Modal-crear.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/react/pago/pago-eliminar.png" alt="" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(img/react/pago/pago-eliminar.png)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END BOX list_inner */}
          </div>
          {/* END MODALBOX NEWS */}
        </Modal>
        {/* END MODAL FOR Modulo-Condiciones-de-pago-ERP-Defontana-Serverles */}  


        {/* START MODAL FOR Academia-Integración-ERP */}
        <Modal
        isOpen={isOpen68}
        onRequestClose={toggleModalSixtyEight}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyEight}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Academia Integración ERP</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        It is a project that involves maintaining the Defontana ERP Module, built in Angular with a Serverless .NET API deployed on AWS. This project aims to continuously integrate and enhance the functionality of the existing ERP module. Modern and efficient technologies are employed in the ERP Integration Academy to ensure a smooth integration process and an optimal user experience. This approach includes the use of agile development practices and the implementation of best practices in security and performance in the cloud infrastructure.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                            <img
                                    className="svg"
                                    src="img/svg/tech/css.svg"
                                    alt=""
                              />

                             <img
                                    className="svg"
                                    src="img/svg/tech/html.svg"
                                    alt=""
                              />
                            <img
                                    className="svg"
                                    src="img/svg/tech/js.svg"
                                    alt=""

                                    title="JavaScript"
                                  />

                            <img
                                    className="svg"
                                    src="img/svg/tech/inet.svg"
                                    alt=""
                                  />

                            <img
                                    className="svg"
                                    src="img/svg/tech/angular.svg"
                                    alt=""
                                  />     

                            <img
                                    className="svg"
                                    src="img/svg/tech/aws.svg"
                                    alt=""
                                  />    
                                 

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://erp.defontana.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                              </div> 

                              <div className="know_tm_button">
                                {/*
                                <Tooltip id="bitbucketTooltip" place="top" effect="solid">
                                  <a 
                                    href="https://github.com/Nelsonrondon" 
                                    target="_blank"  
                                    id="bitbucketLink" 
                                    className="disabled-link"
                                    onClick={(event) => event.preventDefault()}
                                    disabled 
                                    data-tip="Repositorio privado"
                                  >
                                    <img className="svg-btn" src="img/svg/tech/bitbucket.png" alt="" /> Bitbucket
                                  </a>
                                </Tooltip>
                                */}
                                <a 
                                  href="https://github.com/Nelsonrondon" 
                                  target="_blank"  
                                  id="bitbucketLink" 
                                  className="disabled-link"
                                  onClick={(event) => event.preventDefault()}
                                  disabled 
                                  data-tip="Repositorio privado"
                                >
                                  <img className="svg-btn" src="img/svg/tech/bitbucket.png" alt="" /> Bitbucket
                                </a>
                                
                              </div>


                            </div>
                           </div>
                       
                          </li>
                          


                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/Angular-Academia/erp.defontana.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/Angular-Academia/erp.defontana.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/Angular-Academia/erp-defontana.com.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/Angular-Academia/erp-defontana.com.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/Tivendo/cursos.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/Tivendo/cursos.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/Tivendo/Mi-equipo.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/Tivendo/Mi-equipo.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/Tivendo/modal.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/Tivendo/modal.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/Tivendo/share.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/Tivendo/share.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/zenda/Academia-zenda.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/zenda/Academia-zenda.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/zenda/Certificado.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/zenda/Certificado.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/zenda/Detalles-curso.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/zenda/Detalles-curso.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/zenda/Enlace-compartir-Certificado.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/zenda/Enlace-compartir-Certificado.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/angular/zenda/Mi-equipo.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/angular/zenda/Mi-equipo.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR Academia-Integración-ERP */} 


      {/* START MODAL FOR Academia-Defontana */}
      <Modal
        isOpen={isOpen69}
        onRequestClose={toggleModalSixtyNine}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSixtyNine}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
               
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Academia Defontana</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                        It is a project that involves maintaining a Moodle environment, where continuous support is provided, and updates are made as needed. Additionally, this project focuses on creating custom blocks to enhance the user learning experience. In the Defontana Academy, the latest development practices are applied to ensure an efficient and user-friendly digital learning environment.                       
                        </p>
                       
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Tech Stack</span>

                              <img
                                      className="svg"
                                      src="img/svg/tech/css.svg"
                                      alt=""
                                />

                              <img
                                      className="svg"
                                      src="img/svg/tech/html.svg"
                                      alt=""
                                />
                              <img
                                      className="svg"
                                      src="img/svg/tech/js.svg"
                                      alt=""

                                      title="JavaScript"
                                    />
                              <img
                                      className="svg"
                                      src="img/svg/tech/jquery.png"
                                      alt=""
                                    />  
                          
                             

                                <img
                                      className="svg"
                                      src="img/svg/tech/php.svg"
                                      alt=""
                                />   

                                 
                                <img
                                      className="svg"
                                      src="img/svg/tech/mysql.svg"
                                      alt=""
                                />    

                                <img
                                      className="svg"
                                      src="img/svg/tech/moodle.png"
                                      alt=""
                                />    
                                 

                          </li>

                          <li>

                            <span className="first">Category</span>

                            <div className="know_tm_video">
                              <div className="video_inner">
                              

                              <div className="know_tm_button mr-2" >
                               <a href="https://academiadigital.defontana.com/" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/web2.png"   alt=""/> web site 
                              </a>
                             </div> 

                                {/*<div className="know_tm_button">
                                <a href="https://github.com/Nelsonrondon-dev/Website-creditoselestadogt.com" target={'_blank'}>                              
                                <img className="svg-btn"  src="img/svg/tech/github.png" alt=""/> GitHub
                                </a>

                             </div>*/} 


                            </div>
                           </div>
      
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/moodle/Academia-Defontana.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/moodle/Academia-Defontana.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/moodle/Academia-area-personal.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/moodle/Academia-area-personal.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/moodle/Landing-Academia.png" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(img/moodle/Landing-Academia.png)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
          
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR Academia-Defontana */} 


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="list_inner popup_details">
                <div className="top_image">
                  <img src="img/thumbs/1-1.jpg" alt="thumbs" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/8.jpg)",
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title ">
                  <span>Detail</span>
                  <h3>Teresa Melbig</h3>
                </div>

                <div className="hidden_content">
                  <div className="popup_details">
                    <div className="main_details">
                      <div className="textbox">
                        <p>
                          We live in a world where we need to move quickly and
                          iterate on our ideas as flexibly as possible. Building
                          mockups strikes the ideal balance ease of
                          modification.
                        </p>
                        <p>
                          Mockups are useful both for the creative phase of the
                          project - for instance when you're trying to figure
                          out your user flows or the proper visual hierarchy -
                          and the production phase when they will represent the
                          target product.
                        </p>
                      </div>
                      <div className="detailbox">
                        <ul>
                          <li>
                            <span className="first">Client</span>
                            <span>Alvaro Morata</span>
                          </li>
                          <li>
                            <span className="first">Category</span>
                            <span>
                              <a href="#">Detail</a>
                            </span>
                          </li>
                          <li>
                            <span className="first">Date</span>
                            <span>March 07, 2021</span>
                          </li>
                          <li>
                            <span className="first">Share</span>
                            <ul className="share">
                              <li>
                                <a href="#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/facebook.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/twitter.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img
                                    className="svg"
                                    src="img/svg/social/instagram.svg"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="additional_images">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/1.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/2.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="my_image">
                              <img src="img/thumbs/4-2.jpg" alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(/img/portfolio/3.jpg)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END BOX list_inner */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}







    </div>
  );
};

export default Portfolio;
