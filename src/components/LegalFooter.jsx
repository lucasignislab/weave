export default function LegalFooter() {
  return (
    <footer className="mt-5 flex w-full max-w-md flex-col gap-4 border-t border-white/10 pt-5 text-[0.8125rem] leading-relaxed text-text-subtle-on-dark sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-[17rem]">
        <p className="font-semibold text-text-on-dark">
          Ratoeira Ads — CNPJ: 55.824.986/0001-06
        </p>
        <address className="mt-1 not-italic">
          Endereço: Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP,
          CEP: 06.454-000
        </address>
      </div>

      <nav
        className="flex shrink-0 flex-col items-start"
        aria-label="Links legais"
      >
        <a
          className="inline-flex min-h-11 items-center transition-colors hover:text-brand-gold focus-visible:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          href="#/politica-de-privacidade"
        >
          Política de privacidade
        </a>
        <a
          className="inline-flex min-h-11 items-center transition-colors hover:text-brand-gold focus-visible:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          href="#/termos-de-uso"
        >
          Termos de uso
        </a>
      </nav>
    </footer>
  );
}
