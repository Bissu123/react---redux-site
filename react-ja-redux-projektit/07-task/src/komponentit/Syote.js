import React from "react";
import './Syote.css'
import Laske from "./Laske";
import { useState } from "react";

const Syote = () => {
    const [ekaLuku, setEkaLuku] = useState(0);
    const [tokaLuku, setTokaLuku] = useState(0);

    return (
        <section className="lomake">
            <form className="lukuLomake">
                <div className="vierekkainHyvin">
                    <label htmlFor="ekaLuku">Ensimmäinen luku: </label>
                    <input type="number" name="ekaLuku" id="ekaLuku"
                        onChange={(e) => setEkaLuku(e.target.value)} />
                </div>
                <div className="vierekkainHyvin">
                    <label htmlFor="tokaLuku">Toinen luku: </label>
                    <input type="number" name="tokaLuku" id="tokaLuku"
                        onChange={(e) => setTokaLuku(e.target.value)} />
                </div>
            </form>
            <Laske ekaLuku={ekaLuku} tokaLuku={tokaLuku}/>
        </section>
    );
};

export default Syote;