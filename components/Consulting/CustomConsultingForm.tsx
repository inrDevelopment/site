import { brazilianStates } from "@/lib/data/brazilianStates";

export default function CustomConsultingForm() {
  const states = brazilianStates;

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl px-4">
      <form className="w-full space-y-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-foreground text-sm font-medium">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 w-full rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="qualification"
            className="text-foreground text-sm font-medium"
          >
            Qualificação
          </label>

          <select
            id="qualification"
            name="qualification"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          >
            <option value="">Selecione uma opção</option>
            <option value="advogado">Titular</option>
            <option value="contador">Designado</option>
            <option value="estudante">Substituto</option>
            <option value="escrevente">Escrevente</option>
            <option value="auxiliar">Auxiliar</option>
            <option value="contador">Contador</option>
            <option value="outras">Outras</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="registryOffice"
            className="text-foreground text-sm font-medium"
          >
            Serventia
          </label>
          <textarea
            id="registryOffice"
            name="registryOffice"
            rows={4}
            className="border-input bg-background focus:ring-ring focus:border-ring rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="address"
            className="text-foreground text-sm font-medium"
          >
            Endereço
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-foreground text-sm font-medium">
            Cidade
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="qualification"
            className="text-foreground text-sm font-medium"
          >
            Estado
          </label>

          <select
            id="state"
            name="state"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          >
            <option value="">-</option>
            {states.map((item) => (
              <option value={item.nome} key={item.id}>
                {item.sigla}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-foreground text-sm font-medium"
          >
            E-Mail{" "}
            <span style={{ color: "red" }}>(Informar apenas um e-mail)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="phone"
            className="text-foreground text-sm font-medium"
          >
            Telefone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 91234-5678"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="fax" className="text-foreground text-sm font-medium">
            Fax
          </label>

          <input
            id="fax"
            name="fax"
            type="tel"
            placeholder="(11) 91234-5678"
            className="border-input bg-background focus:ring-ring focus:border-ring h-10 rounded-md border px-3 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="question"
            className="text-foreground text-sm font-medium"
          >
            Pergunta
          </label>
          <textarea
            id="question"
            name="question"
            rows={20}
            className="border-input bg-background focus:ring-ring focus:border-ring rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-4 text-sm font-medium transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
