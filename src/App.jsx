import { InstagramLogo, LinkedinLogo, Sun, WhatsappLogo } from "phosphor-react"
import Botao from "./components/Botao/botao";

function App() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <header className="flex justify-end p-4">
        <button className="p-2 hover:bg-gray-200 text-black rounded-lg cursor-pointer transition duration-300">
          <Sun size={20} />
        </button>
      </header>


      <main className="h-full w-full flex justify-center items-center overflow-hidden">
        <section className="border rounded-lg border-gray-500 min-w-96 flex items-center justify-center gap-4 p-6 flex-col">
          <img src="https://github.com/jp-dev18.png" alt="foto do usuário" className="border-4 border-gray-300 w-32 h-32 rounded-full" />

          <h1 className="font-bold text-2xl">Pedro Maciel</h1>
          <p className="text-slate-400">Desenvolvedor Full-Stack</p>

          <section className="w-full space-y-4">
            <Botao>

            <a
                target="_blank"
                href="https://www.instagram.com/sant0forte/?next=%2F" className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
            >
                <InstagramLogo size={32} />
                <p>INSTAGRAM</p>
            </a>

        </Botao>
            <Botao>

            <a
                target="_blank"
                href="https://www.instagram.com/sant0forte/?next=%2F" className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
            >
                <LinkedinLogo size={32} />
                <p>INSTAGRAM</p>
            </a>

        </Botao>
            <Botao>

            <a
                target="_blank"
                href="https://www.instagram.com/sant0forte/?next=%2F" className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
            >
                <InstagramLogo size={32} />
                <p>INSTAGRAM</p>
            </a>

        </Botao>
          </section>
        </section>
      </main>
    </main>
  );
}

export default App
