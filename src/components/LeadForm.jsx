import { useState, useRef, useEffect } from "react";
import { ArrowRight, Loader2, ChevronDown } from "lucide-react";
import { isPlausiblePhoneNumber, normalizePhoneInput } from "../lib/phone";

const CHECKOUT_URL =
  "https://chat.whatsapp.com/BQCxIjwb3I0IjGvTOPmBuz?src=vSt108737e4d4df454d87501c1e2947f084&sck=vSt108737e4d4df454d87501c1e2947f084&utm_medium=vSt108737e4d4df454d87501c1e2947f084&utm_campaign=vSt108737e4d4df454d87501c1e2947f084&utm_content=vSt108737e4d4df454d87501c1e2947f084";

const COUNTRIES = [
  { code: "BR", name: "Brasil", ddi: "+55", flag: "🇧🇷" },
  { code: "US", name: "Estados Unidos", ddi: "+1", flag: "🇺🇸" },
  { code: "PT", name: "Portugal", ddi: "+351", flag: "🇵🇹" },
  { code: "ES", name: "Espanha", ddi: "+34", flag: "🇪🇸" },
  { code: "AR", name: "Argentina", ddi: "+54", flag: "🇦🇷" },
  { code: "MX", name: "México", ddi: "+52", flag: "🇲🇽" },
  { code: "GB", name: "Reino Unido", ddi: "+44", flag: "🇬🇧" },
  { code: "CL", name: "Chile", ddi: "+56", flag: "🇨🇱" },
  { code: "CO", name: "Colômbia", ddi: "+57", flag: "🇨🇴" },
  { code: "PE", name: "Peru", ddi: "+51", flag: "🇵🇪" },
  { code: "UY", name: "Uruguai", ddi: "+598", flag: "🇺🇾" },
  { code: "PY", name: "Paraguai", ddi: "+595", flag: "🇵🇾" },
  { code: "IT", name: "Itália", ddi: "+39", flag: "🇮🇹" },
  { code: "DE", name: "Alemanha", ddi: "+49", flag: "🇩🇪" },
  { code: "FR", name: "França", ddi: "+33", flag: "🇫🇷" },
  { code: "AU", name: "Austrália", ddi: "+61", flag: "🇦🇺" },
  { code: "JP", name: "Japão", ddi: "+81", flag: "🇯🇵" },
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);
  const fieldRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    const nextErrors = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      nextErrors.nome = "Digite seu nome completo";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      nextErrors.email = "Digite um e-mail válido";
    }

    if (!isPlausiblePhoneNumber(formData.telefone)) {
      nextErrors.telefone = "Digite o número de telefone com o código local";
    }

    setErrors(nextErrors);
    const firstInvalidField = ["nome", "email", "telefone"].find(
      (field) => nextErrors[field],
    );
    if (firstInvalidField) {
      requestAnimationFrame(() => fieldRefs.current[firstInvalidField]?.focus());
    }
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "telefone" ? normalizePhoneInput(value) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setErrors((prev) => ({ ...prev, telefone: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      window.location.href = CHECKOUT_URL;
    }, 600);
  };

  const inputBase =
    "min-h-12 w-full rounded-xl border bg-surface-input px-4 py-3 text-base text-text-primary placeholder:text-text-secondary " +
    "transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";

  return (
    <form noValidate onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label htmlFor="nome" className="sr-only">
          Nome completo
        </label>
        <input
          id="nome"
          ref={(node) => {
            fieldRefs.current.nome = node;
          }}
          name="nome"
          type="text"
          autoComplete="name"
          required
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={errors.nome ? "nome-error" : undefined}
          className={`${inputBase} ${errors.nome ? "border-error" : "border-border-input"}`}
        />
        {errors.nome && (
          <p id="nome-error" role="alert" className="mt-1 text-sm text-error-on-dark">
            {errors.nome}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          id="email"
          ref={(node) => {
            fieldRefs.current.email = node;
          }}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Seu melhor e-mail"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputBase} ${errors.email ? "border-error" : "border-border-input"}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-error-on-dark">
            {errors.email}
          </p>
        )}
      </div>

      <div ref={dropdownRef} className="relative">
        <label htmlFor="telefone" className="sr-only">
          Telefone
        </label>
        <div
          className={`flex items-center rounded-xl border bg-surface-input transition-all
            focus-within:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/30
            ${errors.telefone ? "border-error" : "border-border-input"}`}
        >
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label={`Selecionar país. Atual: ${selectedCountry.name} ${selectedCountry.ddi}`}
            aria-expanded={isDropdownOpen}
            aria-controls="country-options"
            className="flex min-h-12 shrink-0 items-center gap-1.5 rounded-l-xl border-r border-border-input px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-gold"
            title="Selecionar país"
          >
            <span className="text-base leading-none">{selectedCountry.flag}</span>
            <span className="font-semibold text-xs">{selectedCountry.ddi}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <input
            id="telefone"
            ref={(node) => {
              fieldRefs.current.telefone = node;
            }}
            name="telefone"
            type="tel"
            inputMode="tel"
            required
            placeholder={selectedCountry.code === "BR" ? "WhatsApp com DDD" : "Número de telefone"}
            value={formData.telefone}
            onChange={handleChange}
            autoComplete="tel-national"
            aria-invalid={Boolean(errors.telefone)}
            aria-describedby={errors.telefone ? "telefone-error" : undefined}
            className="min-h-12 min-w-0 flex-1 rounded-r-xl bg-transparent px-3 py-3 text-base text-text-primary placeholder:text-text-secondary focus:outline-none"
          />
        </div>

        {isDropdownOpen && (
          <div id="country-options" className="absolute top-full left-0 mt-1.5 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-1 text-left">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className={`flex min-h-11 w-full items-center justify-between px-3.5 py-2.5 text-sm transition-colors hover:bg-brand-gold-soft ${
                  selectedCountry.code === country.code ? "bg-brand-gold-soft font-semibold text-brand-gold-ink" : "text-text-primary"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{country.flag}</span>
                  <span className="text-gray-800">{country.name}</span>
                </div>
                <span className="text-xs font-semibold text-gray-500">{country.ddi}</span>
              </button>
            ))}
          </div>
        )}

        {errors.telefone && (
          <p id="telefone-error" role="alert" className="mt-1 text-sm text-error-on-dark">
            {errors.telefone}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex min-h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-brand-gold px-4 py-4 text-sm font-bold text-text-primary shadow-xl shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-gold-dark hover:shadow-amber-500/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold disabled:cursor-not-allowed disabled:opacity-70 sm:px-8 sm:text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processando...
          </>
        ) : (
          <>
            Quero participar das aulas
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  );
}
