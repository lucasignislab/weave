import RaadsLogo from "../assets/raads-logo.png";

export default function LegalPageLayout({ title, description, children }) {
  return (
    <main className="hero-surface relative isolate min-h-screen overflow-hidden bg-surface-dark px-4 py-8 text-text-on-dark sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-3xl">
        <header className="flex items-center justify-between gap-6 border-b border-white/10 pb-6">
          <a
            className="inline-flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
            href="#/"
            aria-label="Voltar para a página inicial"
          >
            <img className="w-36 sm:w-40" src={RaadsLogo} alt="RAADS" />
          </a>
          <a
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-gold transition-colors hover:text-brand-gold-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
            href="#/"
          >
            Voltar para a página inicial
          </a>
        </header>

        <article className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
            Informações legais
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-on-dark sm:text-lg">
            {description}
          </p>
          <p className="mt-4 text-sm text-text-subtle-on-dark">
            Última atualização: 18 de agosto de 2026.
          </p>

          <div className="legal-content mt-12 space-y-10">{children}</div>
        </article>

        <footer className="border-t border-white/10 py-8 text-sm leading-relaxed text-text-subtle-on-dark">
          <p>Ratoeira Ads — CNPJ: 55.824.986/0001-06</p>
          <address className="mt-1 not-italic">
            Endereço: Alameda Rio Negro, 503, sala 2020, Alphaville,
            Barueri/SP, CEP: 06.454-000
          </address>
        </footer>
      </div>
    </main>
  );
}
