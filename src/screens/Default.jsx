import Logo from "./.components/Logo";
import Description from "./.components/Description";
import OpenLink from "../components/OpenLink";

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink title="Leatn React " url="https://reactjs.org" />
                <OpenLink
                    title="My React Project (GitHub)"
                    url="https://github.com/MAIKIREX/desarrollo-frontend-react"
                />
            </header>
        </>
    );
};

export default Default;
