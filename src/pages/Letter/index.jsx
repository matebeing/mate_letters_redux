import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar"
import { useParams } from 'react-router-dom';

const Letter = () => {
    const letters = useSelector(state => state.letterCreate.value);
    const { id } = useParams();

    return (
        <main className="py-5 lg:max-w-[500px] lg:mx-auto sm:mx-5">
            <Navbar/>

            <article className="my-20">
                <h1 className='text-2xl font-bold line-clamp-1'>{letters[id].titulo}</h1>
                <ul className='text-sm mt-5' >
                    <li>
                        <strong>Remetente:</strong> {letters[id].remetente}
                    </li>
                    <li>
                        <strong>Destinatário:</strong> {letters[id].destinatario}
                    </li>
                </ul>
                <p className="my-10">{letters[id].conteudo}</p>
            </article>
        </main>
    )
}

export default Letter