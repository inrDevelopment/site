export default function CustomFooter() {
  return (
    <div className="mt-10 w-full bg-blue-900 py-5">
      <div className="flex items-start justify-between !px-70 !py-5">
        {/* Logo */}
        <div>
          <img src="/logos/logo_inr.svg" alt="Logo INR" />
        </div>

        {/* Central do Assinante */}
        <div>
          <p className="font-semibold text-white">Central do Assinante:</p>
          <p className="text-white">(11) 2959-0220</p>
          <p className="text-white">faleconosco@inrpublicacoes.com.br</p>
        </div>

        {/* Localização */}
        <div>
          <p className="font-semibold text-white">Localização:</p>
          <p className="text-white">
            Rua Voluntários da Pátria, 2.468 - 23º andar
          </p>
          <p className="text-white">Santana - São Paulo/SP - CEP.02402-000</p>
        </div>
      </div>
    </div>
  );
}
