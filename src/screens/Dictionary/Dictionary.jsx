import React, { useState } from "react";
import ModalAddNewWord from "../../components/ModalAddNewWord"
import ModalDelateWord from "../../components/ModalDelateWord"
import ModalTraducir from "../../components/ModalTraducir"

function Dictionary() {
  // to Add New Word
  const [showAddWord,setShowAddWord ] = useState(false)
  const handleAddWord = ()=>{
    setShowAddWord(!showAddWord)
  }
  // Delete a Word
  const [showDeleteWord,setShowDeleteWord ] = useState(false)
  const handleDeleteWord = ()=>{
    setShowDeleteWord(!showDeleteWord)
  }
  // traductor a Word
  const [showTraductorWord,setShowTraductorWord ] = useState(false)
  const handleTraductorWord = ()=>{
    setShowTraductorWord(!showTraductorWord)
  }


  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[#8A8D91] text-gray-300'>
      <div className='bg-[#028090] p-10 rounded-xl shadow-xl'>
        <div className='mb-4'>
          <h1 className='font-bold text-6xl text-center mb-4'>DICTIONARY USIP</h1>
          <p>Este <span className='text-xl font-medium text-black'>modulo (diccionario)</span> corresponde <span className='text-xl font-medium text-black'>al recuperatorio del </span> <span className='text-red-600 font-medium text-xl'>modulo-7</span> ReactJS, <span className='text-xl font-medium text-black'>URL:</span> </p>
        </div>
        <div className='flex justify-around mb-4'>
          <div onClick={()=>handleAddWord()} className='bg-[#FD151B] py-2 px-4 rounded-xl cursor-pointer'>Agregar Palabra</div>
          <div onClick={()=>handleDeleteWord()} className='bg-[#037971] py-2 px-4 rounded-xl cursor-pointer'>Eliminar Palabra</div>
        </div>
        <div className='flex justify-center items-center'>
          <div onClick={()=>handleTraductorWord()} className='bg-[#9FA0C3] py-2 px-4 rounded-xl text-black cursor-pointer'>Traducir</div>
        </div>
      </div>
      <ModalAddNewWord showAddWord={showAddWord} handleAddWord={handleAddWord} />
      <ModalDelateWord showDeleteWord={showDeleteWord} handleDeleteWord={handleDeleteWord}/>
      <ModalTraducir showTraductorWord={showTraductorWord} handleTraductorWord={handleTraductorWord}/>
    </div>
    
  )
}

export default Dictionary