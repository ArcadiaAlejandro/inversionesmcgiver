import TELECOMUNICATIONS from '../../assets/img/aliados/logo  TELECOMUNICATIONS PARTNERS.png';
import TORRESUNIDAS from '../../assets/img/aliados/logo  TORRES UNIDAS.jpg';
import AESA from '../../assets/img/aliados/logo AESA.jpg';
import ATP from '../../assets/img/aliados/logo ATP.png';
import BECHTEL from '../../assets/img/aliados/logo BECHTEL.jpg';
import BTS from '../../assets/img/aliados/logo BTS.png';
import CyJ from '../../assets/img/aliados/logo C&J.png';
import GRUPOABCINGENIEROS from '../../assets/img/aliados/logo GRUPO ABC INGENIEROS.png';
import GRUPOGRAÑAYMONTERO from '../../assets/img/aliados/logo GRUPO GRAÑA Y MONTERO.jpg';
import INCORP from '../../assets/img/aliados/logo INCORP.jpg';
import JJCGRUPO from '../../assets/img/aliados/logo JJC GRUPO.jpg';
import OHL from '../../assets/img/aliados/logo OHL.jpg';
import RCPSAC from '../../assets/img/aliados/logo RCP SAC.jpg';
import SCINGENERIAYCONSTRUCCION from '../../assets/img/aliados/logo SC INGENERIA Y CONSTRUCCION.png';
import INGENIEROSDEPROYECTOSSAC from '../../assets/img/aliados/logo SC INGENIEROS DE PROYECTOS SAC.jpg';
import SOLUCIONESALIMENTICIASSAC from '../../assets/img/aliados/logo SOLUCIONES ALIMENTICIAS SAC.png';
import TURRISTELECOM from '../../assets/img/aliados/logo TURRISTELECOM.png';
import XSTRATACOPPER from '../../assets/img/aliados/logo XSTRATA COPPER.jpg';


const logos = [
  TELECOMUNICATIONS,
  TORRESUNIDAS,
  AESA,
  ATP,
  BECHTEL,
  BTS,
  CyJ,
  GRUPOABCINGENIEROS,
  GRUPOGRAÑAYMONTERO,
  INCORP,
  JJCGRUPO,
  OHL,
  RCPSAC,
  SCINGENERIAYCONSTRUCCION,
  INGENIEROSDEPROYECTOSSAC,
  SOLUCIONESALIMENTICIASSAC,
  TURRISTELECOM,
  XSTRATACOPPER,
];

const Section7 = () => {
  return (
    <>

<section className="bg-[#F0F1F6] py-10">
  <div className="flex items-center justify-center h-full">
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
      <h5 className="mb-12 text-3xl font-semibold md:mb-16 lg:mb-20 lg:text-5xl text-black text-center">
        Empresas que ya confían en <span className="text-[#E8222E]">NOSOTROS</span>
      </h5>
      
      <div className="flex overflow-hidden space-x-40 group">
        <div className="flex space-x-40 animate-loop-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-none w-20 filter grayscale transition-all duration-300 hover:filter-none"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-none w-20 filter grayscale transition-all duration-300 hover:filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


    </>
    
  );
};

export default Section7;