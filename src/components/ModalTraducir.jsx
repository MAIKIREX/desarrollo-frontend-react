import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ModalTraducir({ showTraductorWord, handleTraductorWord }) {
    // Estado local para manejar la palabra y el idioma
    const [palabra, setPalabra] = useState("");
    const [idioma, setIdioma] = useState("");
    const [resultado, setResultado] = useState(null);

    // Acceder al diccionario global
    const diccionario = useSelector((state) => state.word); // Asegúrate de que `state.word` sea correcto

    // Manejar la acción de traducir
    const handleTraducir = (e) => {
        e.preventDefault();

        // Buscar la palabra en el diccionario
        const palabraEncontrada = diccionario.find(
            (entry) => entry.spanish === palabra || entry.english === palabra || entry.portuguese === palabra
        );
        console.log('palabraEncontrada',palabraEncontrada)

        if (palabraEncontrada) {
            // Si la palabra existe, buscar la traducción según el idioma seleccionado
            let traduccion;
            switch (idioma) {
                case "spanish":
                    traduccion = palabraEncontrada.spanish;
                    break;
                case "english":
                    traduccion = palabraEncontrada.english;
                    break;
                case "portuguese":
                    traduccion = palabraEncontrada.portuguese;
                    break;
                default:
                    traduccion = "Idioma no válido";
            }
            setResultado(traduccion);
        } else {
            // Si la palabra no existe, mostrar una alerta
            alert("La palabra no existe en el diccionario");
            setResultado(null);
        }
    };

    if (!showTraductorWord) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-4 bg-[#FD151B] rounded-xl shadow-xl relative">
                <form onSubmit={handleTraducir} className="flex flex-col items-center justify-center bg-[#FD151B] border-none">
                    <h2 className="text-xl font-bold mb-4">Traductor USIP</h2>
                    <p>¿Qué palabra desea traducir en el diccionario?</p>
                    <p className="mb-6">Agregue su palabra y después el idioma de traducción</p>
                    <div className="grid grid-cols-6 justify-center items-center gap-2 mb-4">
                        <div className="col-span-2">Palabra a traducir:</div>
                        <div className="col-span-4">
                            <input
                                className="py-2 px-4 rounded-xl text-black"
                                type="text"
                                placeholder="Palabra"
                                value={palabra}
                                onChange={(e) => setPalabra(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-span-2">Idioma de traducción:</div>
                        <div className="col-span-4">
                            <select
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={idioma}
                                onChange={(e) => setIdioma(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Selecciona un idioma
                                </option>
                                <option value="spanish">Español</option>
                                <option value="english">Inglés</option>
                                <option value="portuguese">Portugués</option>
                            </select>
                        </div>
                        {/* Mostrar resultado de la traducción */}
                        {resultado && (
                            <p className="text-center col-span-6 text-gray-200 bg-gray-600 rounded-xl py-2 px-4">
                                Traducción: {resultado}
                            </p>
                        )}
                    </div>
                    <button type="submit" className="py-2 px-4 bg-[#2C0E37] rounded-xl hover:bg-[#4d1e5f]">
                        Traducir
                    </button>
                    <span
                        onClick={handleTraductorWord}
                        className="absolute top-3 right-3 py-1 px-3 rounded-full bg-[#2C0E37] cursor-pointer hover:bg-[#4d1e5f] text-center"
                    >
                        x
                    </span>
                </form>
            </div>
        </div>
    );
}

export default ModalTraducir;
