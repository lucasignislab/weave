import LeadForm from "./LeadForm";
import PartnershipImage from "../assets/partnership-hero-cutout.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Lado esquerdo: copy e formulário */}
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700 font-semibold text-sm">
              Ratoeira Ads × Weave
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3rem] font-black text-gray-950 leading-[1.15] tracking-[-0.02em]">
              A <span className="text-[#FFB800]">parceria</span> que{" "}
              <span className="text-[#FFB800]">multiplica</span> seus{" "}
              <span className="text-[#FFB800]">resultados</span> em anúncios
            </h1>

            <p className="mt-6 text-lg lg:text-body-lg text-gray-600 leading-relaxed max-w-xl">
              Eitor e Dairo uniram forças para entregar o que há de mais eficiente em
              tráfego pago e estratégia digital. Preencha os dados abaixo e avance para
              o checkout para garantir sua vaga.
            </p>

            <div className="mt-8 w-full">
              <LeadForm />
            </div>
          </div>

          <div className="relative flex items-center justify-center order-first lg:order-last">
            <img
              src={PartnershipImage}
              alt="Dois parceiros firmando uma colaboração profissional"
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
