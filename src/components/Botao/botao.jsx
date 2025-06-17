function Botao({ children, onClick }) {
  return (
    <button onClick={onClick} className="border rounded-lg border-gray-400 cursor-pointer flex items-center justify-center gap-4 w-full overflow-hidden">
      {children}
    </button>
  );
}

export default Botao;