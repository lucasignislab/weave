import { useState, useRef, useEffect } from "react";
import { ArrowRight, Loader2, ChevronDown } from "lucide-react";

const CHECKOUT_URL = "#checkout";

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPhone = (value, countryCode) => {
    const digits = value.replace(/\D/g, "");
    if (countryCode === "BR") {
      const sliced = digits.slice(0, 11);
      if (sliced.length <= 2) return sliced;
      if (sliced.length <= 7) {
        return `(${sliced.slice(0, 2)}) ${sliced.slice(2)}`;
      }
      return `(${sliced.slice(0, 2)}) ${sliced.slice(2, 7)}-${sliced.slice(7)}`;
    }
    const sliced = digits.slice(0, 14);
    if (sliced.length <= 3) return sliced;
    if (sliced.length <= 7) return `${sliced.slice(0, 3)} ${sliced.slice(3)}`;
    return `${sliced.slice(0, 3)} ${sliced.slice(3, 7)} ${sliced.slice(7)}`;
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      nextErrors.nome = "Digite seu nome completo";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      nextErrors.email = "Digite um e-mail válido";
    }

    const phoneDigits = formData.telefone.replace(/\D/g, "");
    const minDigits = selectedCountry.code === "BR" ? 10 : 7;
    if (phoneDigits.length < minDigits) {
      nextErrors.telefone = "Digite um telefone válido";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "telefone" ? formatPhone(value, selectedCountry.code) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setFormData((prev) => ({
      ...prev,
      telefone: formatPhone(prev.telefone, country.code),
    }));
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
    "w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label htmlFor="nome" className="sr-only">
          Nome completo
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          className={`${inputBase} ${errors.nome ? "border-red-500" : "border-gray-200"}`}
        />
        {errors.nome && (
          <p className="mt-1 text-sm text-red-500">{errors.nome}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBase} ${errors.email ? "border-red-500" : "border-gray-200"}`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div ref={dropdownRef} className="relative">
        <label htmlFor="telefone" className="sr-only">
          Telefone
        </label>
        <div
          className={`flex items-center bg-gray-50 border rounded-xl transition-all
            focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500
            ${errors.telefone ? "border-red-500" : "border-gray-200"}`}
        >
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-3 text-gray-700 text-sm shrink-0
              hover:bg-gray-100 rounded-l-xl transition-colors focus:outline-none border-r border-gray-200"
            title="Selecionar país"
          >
            <span className="text-base leading-none">{selectedCountry.flag}</span>
            <span className="font-semibold text-xs">{selectedCountry.ddi}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            placeholder={selectedCountry.code === "BR" ? "WhatsApp com DDD" : "Número de telefone"}
            value={formData.telefone}
            onChange={handleChange}
            className="flex-1 bg-transparent px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm rounded-r-xl"
          />
        </div>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1.5 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-1 text-left">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm hover:bg-orange-50 transition-colors ${
                  selectedCountry.code === country.code ? "bg-orange-50/70 font-semibold text-orange-600" : "text-gray-700"
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
          <p className="mt-1 text-sm text-red-500">{errors.telefone}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#ffb800] hover:bg-[#e6a600] text-[#0a0a0a] font-bold rounded-2xl text-base
          transition-all duration-200 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5
          group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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

      <p className="text-xs text-center text-gray-400">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  );
}
