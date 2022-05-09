import "./View.css";

const View = (props) => {
    return (
        <section>
            <div className="view-tausta s-teksti view-section">
                <h2>This is your input:</h2>
                <p><span className="viewTeksti">First name: </span>{props.firstName}</p>
                <p><span className="viewTeksti">Last name: </span>{props.lastName}</p>
                <p><span className="viewTeksti">Phone: </span>{props.phone}</p>
                <p><span className="viewTeksti">Message: </span>{props.message}</p>
            </div>
        </section>
    )
}

export default View;