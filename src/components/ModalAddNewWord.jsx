import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddWord } from "../Redux/dictionary/dictionaryActions"; // Verifica que la ruta sea correcta

function ModalAddNewWord({ showAddWord, handleAddWord }) {
    const dispatch = useDispatch();
    const diccionario = useSelector(state => state.word)
    
    // Estado local para los valores del formulario
    const [formData, setFormData] = useState({
        spanish: '',
        english: '',
        portuguese: ''
    });
    console.log('diccionario', diccionario)
    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch a Redux con los datos del formulario
        dispatch(setAddWord(formData));
        // Limpiar formulario
        setFormData({ spanish: '', english: '', portuguese: '' });
        // Cerrar modal
        handleAddWord();
    };

    if (!showAddWord) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-4 bg-[#EFD6BD] rounded-xl shadow-xl relative w-[90%] max-w-lg text-black">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-[#EFD6BD] border-none">
                    <h2 className="text-xl font-bold mb-4">Traductor USIP</h2>
                    <div className="grid grid-cols-6 justify-center items-center gap-2 mb-4">
                        <div className="col-span-2">Español:</div>
                        <div className="col-span-4">
                            <input
                                className="py-2 px-4 rounded-xl text-black w-full"
                                type="text"
                                name="spanish"
                                value={formData.spanish}
                                onChange={handleChange}
                                placeholder="Palabra en español"
                                required
                            />
                        </div>
                        <div className="col-span-2">Inglés:</div>
                        <div className="col-span-4">
                            <input
                                className="py-2 px-4 rounded-xl text-black w-full"
                                type="text"
                                name="english"
                                value={formData.english}
                                onChange={handleChange}
                                placeholder="Word in English"
                                required
                            />
                        </div>
                        <div className="col-span-2">Portugués:</div>
                        <div className="col-span-4">
                            <input
                                className="py-2 px-4 rounded-xl text-black w-full"
                                type="text"
                                name="portuguese"
                                value={formData.portuguese}
                                onChange={handleChange}
                                placeholder="Palavra em português"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-[#2C0E37] rounded-xl text-white"
                    >
                        Agregar
                    </button>
                    <span
                        onClick={handleAddWord}
                        className="absolute top-3 right-3 py-1 px-3 rounded-full bg-[#2C0E37] text-white cursor-pointer"
                    >
                        x
                    </span>
                </form>
            </div>
        </div>
    );
}

export default ModalAddNewWord;
