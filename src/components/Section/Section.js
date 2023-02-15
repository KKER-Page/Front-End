function Section(props) {
    return (

        <section>
            <div className="second-container container">
                <h1>{props.title}</h1>
                <p>{props.ftext}</p>
                <p>{props.stext}</p>
                <div className="flags">
                    <div className="flag">
                        <img src="../images/flags/angola-flag.png" alt="Flag of Russia" />
                        <p>AO</p>
                    </div>
                    <div className="flag">
                        <img src="../images/flags/poland-flag.png" alt="Flag of Angola" />
                        <p>PL</p>
                    </div>
                    <div className="flag">
                        <img src="../images/flags/russian-flag.png" alt="Flag of Polond" />
                        <p>RU</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section