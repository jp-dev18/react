import { InstagramLogo } from "phosphor-react";

function Botao(props) {
    console.log(props);
    return (
        <button className="cursor-pointer flex justify-center items-center gap-4 w-full rounded-lg border border-gray-400 overflow-hidden">
            {props.children}
        </button>
    );
}

export default Botao;