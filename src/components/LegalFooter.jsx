export default function LegalFooter() {
  return (
    <footer className="mt-5 flex w-full max-w-md flex-col gap-4 border-t border-white/10 pt-5 text-[0.6875rem] leading-relaxed text-gray-400 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-[17rem]">
        <p className="font-semibold text-gray-300">
          Ratoeira Ads — CNPJ: 55.824.986/0001-06
        </p>
        <address className="mt-1 not-italic">
          Endereço: Alameda Rio Negro, 503, sala 2020, Alphaville, Barueri/SP,
          CEP: 06.454-000
        </address>
      </div>

      <nav
        className="flex shrink-0 flex-col items-start gap-2"
        aria-label="Links legais"
      >
        <a
          className="transition-colors hover:text-[#FFB800] focus-visible:text-[#FFB800] focus-visible:outline-none"
          href="#/politica-de-privacidade"
        >
          Política de privacidade
        </a>
        <a
          className="transition-colors hover:text-[#FFB800] focus-visible:text-[#FFB800] focus-visible:outline-none"
          href="#/termos-de-uso"
        >
          Termos de uso
        </a>
      </nav>
    </footer>
  );
}
