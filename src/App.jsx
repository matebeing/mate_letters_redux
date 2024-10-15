import { useSelector } from 'react-redux';
import AboutCard from "./components/AboutCard/Index";
import LetterCard from "./components/LetterCard";
import Navbar from "./components/Navbar";

const App = () => {
    const letters = useSelector(state => state.letterCreate.value);

    console.log(letters)
    return (
        <div className="py-5 lg:max-w-[500px] lg:mx-auto sm:mx-5">
            <Navbar />
            <header>
                <AboutCard />
            </header>

            <main>
                <h2 className="font-bold mt-20 mb-5">
                    MINHAS CARTAS
                </h2>
                <section className="flex flex-col gap-5">
                    {letters.length > 0 ? (
                        letters.map((letter, index) => (
                            <LetterCard
                                key={index}
                                id={index}
                                title={letter.titulo}
                                content={letter.conteudo}
                                sender={letter.remetente}
                                recipient={letter.destinatario}
                            />
                        ))
                    ) : (
                        <p>Sem cartas disponíveis</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default App;
