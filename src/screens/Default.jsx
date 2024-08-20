import Logo from "./Default/.components/Logo";
import Description from "./Default/.components/Description";
import OpenLink from "../components/OpenLink";
import Lessoninfo from "../components/Lessoninfo";
import Contador from "./Default/.components/Contador";

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador/>
                <Logo />
                <Description />
                <OpenLink title="Leatn React " url="https://reactjs.org" />
                <OpenLink
                    title="My React Project (GitHub)"
                    url="https://github.com/MAIKIREX/desarrollo-frontend-react"
                />
                <Lessoninfo number="1:" info="Introduccion a React y estructura del proyecto"/>
                <Lessoninfo number="2:" info="Context API para la gestion del estado global en aplicaciones React"/>
            </header>
        </>
    );
};

export default Default;
