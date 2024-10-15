import { Link } from 'react-router-dom';
import LetterBackground from '../../assets/cardBackground.png'

const LetterCard = ({title, content, sender, recipient, id}) => {
    
    return (
        <Link to={`letter/${id}`}>
            <article className="w-full max-h-10 px-10 py-28 rounded-lg bg-no-repeat bg-cover" style={{backgroundImage: `url(${LetterBackground})`}}>
                <h1 className='text-2xl font-bold line-clamp-1'>{title}</h1>
                <ul className='text-sm mt-5' >
                    <li>
                        <strong>Remetente:</strong> {sender}
                    </li>
                    <li>
                        <strong>Destinatário:</strong> {recipient}
                    </li>
                </ul>
            </article>
        </Link>
    )
}

export default LetterCard;