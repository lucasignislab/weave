import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const CHECKOUT_URL = "#checkout";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
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
    if (phoneDigits.length < 10) {
      nextErrors.telefone = "Digite um telefone válido com DDD";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "telefone" ? formatPhone(value) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simula breve processamento antes de redirecionar.
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

      <div>
        <label htmlFor="telefone" className="sr-only">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          inputMode="tel"
          placeholder="WhatsApp com DDD"
          value={formData.telefone}
          onChange={handleChange}
          className={`${inputBase} ${errors.telefone ? "border-red-500" : "border-gray-200"}`}
        />
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
            Quero garantir minha vaga
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-500">
        Seus dados estão seguros. Não enviamos spam.
      </p>
    </form>
  );
}
