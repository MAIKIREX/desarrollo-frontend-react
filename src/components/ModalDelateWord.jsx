import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../Redux/dictionary/dictionaryActions"; // Asegúrate de que la ruta sea correcta

function ModalDelateWord({ showDeleteWord, handleDeleteWord }) {
    const [inputWord, setInputWord] = useState(''); // Estado local para capturar la palabra del input
    const dispatch = useDispatch();
    const dictionary = useSelector(state => state.word); // Accede al diccionario desde el estado global

    const handleInputChange = (e) => {
        setInputWord(e.target.value); // Actualiza el valor del input
    };

    const handleDelete = () => {
        // Verifica si la palabra ingresada existe en el diccionario
        const wordToDelete = dictionary.find(
            (word) => word.spanish === inputWord || word.english === inputWord || word.portuguese === inputWord
        );

        if (wordToDelete) {
            // Si encuentra la palabra, despacha la acción para eliminarla
            dispatch(deleteWord(wordToDelete));
            handleDeleteWord(); // Cierra el modal
        } else {
            alert("La palabra no se encuentra en el diccionario.");
        }
    };

    if (!showDeleteWord) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className="p-4 bg-[#EFD6BD]  rounded-xl shadow-xl relative">
                <div className="flex flex-col items-center justify-center text-black">
                    <h2 className="text-xl font-bold mb-4">Traductor USIP</h2>
                    <p>¿Qué palabra desea eliminar del diccionario?</p>
                    <p className="mb-6">Puede escribir su palabra en ESPAÑOL, INGLÉS o PORTUGUÉS</p>
                    <div className="grid grid-cols-6 justify-center items-center gap-2 mb-4">
                        <div className="col-span-2">Palabra:</div>
                        <div className="col-span-4">
                            <input
                                className="py-2 px-4 rounded-xl text-black"
                                type="text"
                                placeholder="Ingrese la palabra"
                                value={inputWord} // Asocia el valor del input con el estado
                                onChange={handleInputChange} // Actualiza el estado al escribir
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleDelete}
                        className="py-2 px-4 bg-[#2C0E37] rounded-xl text-gray-300"
                    >
                        Eliminar
                    </button>
                    <span
                        onClick={handleDeleteWord}
                        className="absolute top-3 right-3 py-1 px-3 rounded-full bg-[#2C0E37] cursor-pointer text-gray-300"
                    >
                        x
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ModalDelateWord;
