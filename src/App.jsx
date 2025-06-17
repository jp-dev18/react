import { FacebookLogo, InstagramLogo, LinkedinLogo, Sun } from "phosphor-react"
import { useState } from "react";
import Botao from "./components/Botao/Botao";

function App() {
 const storedDarkMode = localStorage.getItem("darkMode");
 const [darkMode, setDarkMode] = useState(storedDarkMode === "true");
  
 function handleChangeMode() {
  // O operador de navegação `!` inverte o valor booleano de `darkMode`.
  // Se darkMode for ´true´, ele se tornará `false`, e vice-versa.
  // Isso é usado para alternar entre os modos claro e escuro

  localStorage.setItem("darkMode", !darkMode);
  setDarkMode(!darkMode);
 }

 // if e else 
 // if (darkMode) {
 // } else {
 //
 // }

 // darkMode === true ? algumacoisa : outracoisa

 return (
    <main className={`h-screen w-full overflow-hidden ${darkMode === true ? "bg-slate-900" : "bg-white" } transition-all`}>
      <header className="flex justify-end p-4">
        <button 
        onClick={handleChangeMode}
        className="p-2 hover:bg-gray-200 text-black rounded-lg cursor-pointer transition duration-300">
          <Sun size={20} />
        </button>
      </header>


      <main className="h-full w-full flex justify-center items-center overflow-hidden">
        <section className="border rounded-lg border-gray-500 min-w-96 flex items-center justify-center gap-4 p-6 flex-col">
          <img src="https://github.com/jp-dev18.png" alt="foto do usuário" className="border-4 border-gray-300 w-32 h-32 rounded-full hover:scale-350 transition-all" />

          <h1 className={`font-bold text-2xl ${darkMode ? "text-white" : "text-black"}`}>Pedro Maciel</h1>
      <p className={`text-slate-400 ${darkMode ? "text-white" : "text-black"}`}>Desenvolvedor Full-Stack</p>

          <section className={`w-full space-y-4 ${darkMode ? "text-white" : "text-black"}`}>	
            <Botao>

            <a
                target="_blank"
                href="https://www.instagram.com/sant0forte/?next=%2F" className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
            >
                <InstagramLogo size={32} />
                <p>Instagram</p>
            </a>

        </Botao>
            <Botao>

            <a
                target="_blank"
                href="https://www.linkedin.com/in/joao-pedro-maciel-ferreira-3256b936a/" className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
            >
                <LinkedinLogo size={32} />
                <p>Linkedin</p>
            </a>

        </Botao>
            <Botao>

            <a
                target="_blank"
                href="https://www.facebook.com/Joao.Pedro.mofi" className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
            >
                <FacebookLogo size={32} />
                <p>Facebook</p>
            </a>

        </Botao>
          </section>
        </section>
      </main>
    </main>
  );
}

export default App
