import LeadForm from "./LeadForm";
import FloatingPlatforms from "./FloatingPlatforms";
import LegalFooter from "./LegalFooter";
import PartnershipPortrait480 from "../assets/dairo-eitor-handshake-480.webp";
import PartnershipPortrait927 from "../assets/dairo-eitor-handshake-927.webp";
import RaadsLogo from "../assets/raads-logo.png";

export default function HeroSection() {
  return (
    <section className="hero-surface relative isolate min-h-screen w-full overflow-hidden bg-surface-dark">
      <img
        className="page-brand-logo"
        src={RaadsLogo}
        alt="RAADS"
        decoding="async"
        fetchPriority="high"
      />
      <FloatingPlatforms />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="hero-copy flex flex-col items-start text-left">
            <h1 className="text-[2rem] font-black leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3rem] lg:leading-[1.15]">
              A <span className="text-brand-gold">parceria</span> que{" "}
              <span className="text-brand-gold">multiplica</span> seus{" "}
              <span className="text-brand-gold">resultados</span> em anúncios
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-on-dark sm:mt-6 sm:text-lg lg:text-body-lg">
              Dairo Junior e Ratoeira Ads se uniram para uma série de aulas práticas
              sobre planejamento, análise e escala de campanhas. Preencha seus dados
              para garantir sua vaga.
            </p>

            <div className="mt-6 w-full sm:mt-8">
              <LeadForm />
            </div>
            <LegalFooter />
          </div>

          <div className="portrait-stage relative order-last flex min-h-[26rem] items-start justify-center overflow-hidden">
            <img
              src={PartnershipPortrait927}
              srcSet={`${PartnershipPortrait480} 480w, ${PartnershipPortrait927} 927w`}
              sizes="(max-width: 1023px) 100vw, 50vw"
              alt="Eitor e Dairo Junior sorrindo e cumprimentando-se"
              className="portrait-partnership absolute z-20 object-contain object-top"
              width="927"
              height="1696"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
