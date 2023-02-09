function Section(props) {
    return (

        <section>
            <div className="second-container container">
                <h1>{props.title}</h1>
                <p>{props.ftext}</p>
                <p>{props.stext}</p>
                <div className="flags">
                    <img src="../images/flags/angola-flag.png" alt="Flag of Russia" />
                    <img src="../images/flags/poland-flag.png" alt="Flag of Angola" />
                    <img src="../images/flags/russian-flag.png" alt="Flag of Polond" />
                </div>
            </div>
        </section>

    )
}

export default Section