import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Creators } from "../../store/reducers/letter";


const Modal = () => {
    const letters = useSelector(state => state.letter.value);

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

 
    const [formData, setFormData] = useState({
      titulo: '',
      conteudo: '',
      remetente: '',
      destinatario: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data:', formData);
      dispatch(Creators.create(formData));
      toggleModal()
  
      setFormData({
        titulo: '',
        conteudo: '',
        remetente: '',
        destinatario: '',
      });

      console.log(letters)

  
    };
  
    const handleCancel = () => {
      toggleModal()
      setFormData({
        titulo: '',
        conteudo: '',
        remetente: '',
        destinatario: '',
      });
    };
  return (
    <div className="flex justify-center items-center ">
      <button
        onClick={toggleModal}
        className='font-bold p-5 rounded-sm '
      >
        Write
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
           <div className="w-[500px] p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Escrever Carta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label htmlFor="titulo" className="block text-gray-700">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="conteudo" className="block text-gray-700">Conteúdo</label>
                    <textarea
                        id="conteudo"
                        name="conteudo"
                        value={formData.conteudo}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        rows="5"
                        required
                    ></textarea>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="remetente" className="block text-gray-700">Remetente</label>
                    <input
                        type="text"
                        id="remetente"
                        name="remetente"
                        value={formData.remetente}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="destinatario" className="block text-gray-700">Destinatário</label>
                    <input
                        type="text"
                        id="destinatario"
                        name="destinatario"
                        value={formData.destinatario}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    </div>

                    <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        Create
                    </button>
                    </div>
                </form>
                </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
