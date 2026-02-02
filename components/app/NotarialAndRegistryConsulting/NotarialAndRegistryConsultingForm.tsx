import { brazilianStates } from "@/lib/data/brazilianStates";
import { useState } from "react";

export default function NotarialAndRegistryConsultingForm() {
  const [tipoPessoa, setTipoPessoa] = useState<"fisica" | "juridica">("fisica");
  const states = brazilianStates;

  return (
    <div
      className="mt-10 w-full px-4"
      style={{ border: "2px solid #1565C0", borderRadius: 8 }}
    >
      <form className="flex w-full flex-col gap-4 p-4">
        {/* Linha 1: Nome + Qualificação */}
        <p className="text-2xl font-medium">Informações do consulente</p>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            {/* <label
              htmlFor="name"
              className="text-foreground mb-1 text-sm font-medium"
            >
              Nome
            </label> */}
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nome"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <select
              id="qualification"
              name="qualification"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            >
              <option value="">Qualificação</option>
              <option value="advogado">Titular</option>
              <option value="contador">Designado</option>
              <option value="estudante">Substituto</option>
              <option value="escrevente">Escrevente</option>
              <option value="auxiliar">Auxiliar</option>
              <option value="contador">Contador</option>
              <option value="outras">Outras</option>
            </select>
          </div>
        </div>

        {/* Linha 2: Email + Telefone */}
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            {/* <label
              htmlFor="email"
              className="text-foreground mb-1 text-sm font-medium"
            >
              Email
            </label> */}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Telefone"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <p className="text-2xl font-bold">
          Informações do cartório/escritório/empresa a que vinculado o
          consulente
        </p>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            {/* <label
              htmlFor="phone"
              className="text-foreground mb-1 text-sm font-medium"
            >
              Denominação
            </label> */}
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Denominação"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex-0.5 flex flex-col">
            <input
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <input
              id="street"
              name="street"
              type="text"
              placeholder="Rua"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex-0.5 flex flex-col">
            <input
              id="number"
              name="number"
              type="text"
              placeholder="Número"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              placeholder="Bairro"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <input
              id="complement"
              name="complement"
              type="text"
              placeholder="Complemento"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            <input
              id="county"
              name="county"
              type="text"
              placeholder="Comarca"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <input
              id="municipality"
              name="municipality"
              type="text"
              placeholder="Município"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <select
              id="state"
              name="state"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            >
              <option value="">Estado</option>
              {states.map((item) => (
                <option value={item.nome} key={item.id}>
                  {item.sigla}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col">
            <input
              id="holderemail"
              name="holderemail"
              type="text"
              placeholder="Email do Titular/Sócio"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <p className="text-2xl font-bold">
          Informações para pagamento e cobrança{" "}
          <span style={{ color: "red" }}>
            (exclusivo para consultas avulsas)
          </span>
        </p>
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
          {/* Coluna 1: Tomador dos Serviços */}
          <div className="flex flex-2 flex-col justify-center">
            <input
              id="serviceRecipient"
              name="serviceRecipient"
              type="text"
              placeholder="Tomador dos Serviços"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Coluna 2: Radio buttons */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex gap-6">
              <label className="flex items-center gap-1 text-base">
                {" "}
                {/* texto maior */}
                <input
                  type="radio"
                  name="tipoPessoa"
                  value="fisica"
                  checked={tipoPessoa === "fisica"}
                  onChange={() => setTipoPessoa("fisica")}
                  className="accent-primary"
                />
                Física
              </label>
              <label className="flex items-center gap-1 text-base">
                {" "}
                {/* texto maior */}
                <input
                  type="radio"
                  name="tipoPessoa"
                  value="juridica"
                  checked={tipoPessoa === "juridica"}
                  onChange={() => setTipoPessoa("juridica")}
                  className="accent-primary"
                />
                Jurídica
              </label>
            </div>
          </div>

          {/* Coluna 3: CPF/CNPJ */}
          <div className="flex flex-1 flex-col justify-center">
            <label
              htmlFor="documento"
              className="text-foreground mb-1 text-sm font-medium"
            >
              {/* {tipoPessoa === "fisica" ? "CPF" : "CNPJ"} */}
            </label>
            <input
              id="documento"
              name="documento"
              type="text"
              placeholder={tipoPessoa === "fisica" ? "CPF" : "CNPJ"}
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col justify-center">
            <input
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-4 flex-col justify-center">
            <input
              id="street"
              name="street"
              type="text"
              placeholder="Rua"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-2 flex-col justify-center">
            <input
              id="number"
              name="number"
              type="text"
              placeholder="Número"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col justify-center">
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              placeholder="Bairro"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <input
              id="complement"
              name="complement"
              type="text"
              placeholder="Complemento"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col justify-center">
            <input
              id="municipality2"
              name="municipality2"
              type="text"
              placeholder="Município"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <select
              id="state"
              name="state"
              className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
            >
              <option value="">Estado</option>
              {states.map((item) => (
                <option value={item.nome} key={item.id}>
                  {item.sigla}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
