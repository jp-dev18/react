function Botao({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex justify-center items-center gap-4 w-full rounded-lg border border-gray-400 overflow-hidden"
    >
      {children}
    </button>
  );
}

export default Botao;
