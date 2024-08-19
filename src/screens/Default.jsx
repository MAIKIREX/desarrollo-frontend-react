import Logo from "../components/Logo"
import Description from '../components/Description';
import Content from '../components/Content';

const Default = () => {
  return (
    <>
      <header className='App-header'>
        <Logo />
        <Description />
        <Content />
      </header>
    </>
  );
}

export default Default;