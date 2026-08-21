import LeadForm from "./LeadForm";
import FloatingPlatforms from "./FloatingPlatforms";
import LegalFooter from "./LegalFooter";
import PartnershipPortrait from "../assets/dairo-eitor-handshake.png";
import RaadsLogo from "../assets/raads-logo.png";

export default function HeroSection() {
  return (
    <section className="hero-surface relative isolate min-h-screen w-full overflow-hidden bg-[#212121]">
      <img
        className="page-brand-logo"
        src={RaadsLogo}
        alt="RAADS"
        decoding="async"
        fetchPriority="high"
      />
      <FloatingPlatforms />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Lado esquerdo: copy e formulário */}
          <div className="hero-copy flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-black text-white leading-[1.15] tracking-[-0.02em]">
              A <span className="text-[#FFB800]">parceria</span> que{" "}
              <span className="text-[#FFB800]">multiplica</span> seus{" "}
              <span className="text-[#FFB800]">resultados</span> em anúncios
            </h1>

            <p className="mt-6 text-lg lg:text-body-lg text-gray-300 leading-relaxed max-w-xl">
              Dairo Junior e Ratoeira Ads se uniram para uma série de aulas práticas
              sobre planejamento, análise e escala de campanhas. Preencha seus dados
              para garantir sua vaga.
            </p>

            <div className="mt-8 w-full">
              <LeadForm />
            </div>
            <LegalFooter />
          </div>

          <div className="portrait-stage relative order-first flex min-h-[26rem] items-start justify-center overflow-hidden lg:order-last">
            <div className="portrait-spot" aria-hidden="true" />
            <img
              src={PartnershipPortrait}
              alt="Eitor e Dairo Junior sorrindo e cumprimentando-se"
              className="portrait-partnership absolute z-20 object-contain object-top"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
