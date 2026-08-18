import LeadForm from "./LeadForm";
import FloatingPlatforms from "./FloatingPlatforms";
import LegalFooter from "./LegalFooter";
import DairoPortrait from "../assets/dairo-profile-cutout-clean.png";
import DairoSilhouette from "../assets/dairo-silhouette-amber.png";
import EitorPortrait from "../assets/eitor-profile-cutout-clean.png";
import EitorSilhouette from "../assets/eitor-silhouette-amber.png";
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

          <div className="portrait-stage relative order-first flex min-h-[26rem] items-end justify-center overflow-visible lg:order-last">
            <div className="portrait-spot" aria-hidden="true" />
            <img
              src={DairoSilhouette}
              alt=""
              aria-hidden="true"
              className="portrait-layer portrait-layer--shadow portrait-person portrait-person--dairo absolute z-30 object-contain object-bottom-left"
              decoding="async"
              fetchPriority="high"
            />
            <img
              src={DairoPortrait}
              alt="Dairo Junior de perfil olhando para a esquerda"
              className="portrait-layer portrait-layer--clear portrait-person portrait-person--dairo absolute z-30 object-contain object-bottom-left"
              decoding="async"
              fetchPriority="high"
            />
            <img
              src={EitorSilhouette}
              alt=""
              aria-hidden="true"
              className="portrait-layer portrait-layer--shadow portrait-person portrait-person--eitor absolute z-10 object-contain object-bottom-right"
              decoding="async"
              fetchPriority="high"
            />
            <img
              src={EitorPortrait}
              alt="Eitor de perfil olhando para a direita"
              className="portrait-layer portrait-layer--clear portrait-person portrait-person--eitor absolute z-10 object-contain object-bottom-right"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
