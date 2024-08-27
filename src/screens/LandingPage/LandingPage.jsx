const LandingPage = () => {
    return(
        <>
            <header className="LandingPage-header">
                <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </header>
            <section className="LandingPage-body">
                <h2> Bienvenido</h2>
                <hr />
                <p>Este modulo se centra en el uso de <strong>React</strong>, incluyendo la creacion de <strong>Componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong></p>
                <h2>Temas Cubiertos</h2>
                <hr />
                <div className="LandingPage-container">
                    <div>Componentes funcionales y de clase</div>
                    <div>Uso de <strong>React hooks</strong> como useState y useEffect</div>
                    <div>Creacion de <strong>custom hooks</strong> como useForm</div>
                    <div>Gestion de variables de estado con <strong>useState</strong></div>
                    <div>Gestion de estado global con <strong>Redux</strong></div>
                    <div>Integracion de <strong>Redux</strong> con <strong>React</strong></div>
                    <div>Publicando nuestra <strong>Pagina</strong> con <strong>GitHub Pages</strong></div>
                </div>
                <h2>Recursos adicionales</h2>
                <hr />
                <p>Para profundizar en los temas cubiertos, sonculta los siguientes recursos</p>
            </section>
            <footer className="LandingPage-footer">
                <p>2024 Modulo 7. Usip</p>
            </footer>
        </>
    )
}

export default LandingPage