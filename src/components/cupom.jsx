import { useState } from "react";

function Cupom() {
  const [showCoupon, setShowCoupon] = useState(true);

  const handleCloseCoupon = () => {
    setShowCoupon(false);
  };
  return (
    <div>
      {/* Cupom */}
      {showCoupon && (
        <div className="w-full bg-blue-600 flex items-center justify-center text-white p-2 gap-2 text-sm">
          <img src="/images/icon/ticket-percent.svg" alt="Ícone de cupom" />

          <p>30% de desconto — Tempo Limitado!</p>

          <div className="flex items-center gap-1 border-b-2 border-white max-md:hidden">
            <a href="/" className="text-white">
              Compre Agora
            </a>
            <img src="/images/icon/arrow-right.png" alt="icone de seta" className="w-4 h-4"/>
          </div>

          <div
            className="absolute right-1 cursor-pointer"
            onClick={handleCloseCoupon}
          >
            <img src="/images/icon/x.svg" alt="icone de x" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cupom;
