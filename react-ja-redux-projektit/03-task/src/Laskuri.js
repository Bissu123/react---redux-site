import React, { useState } from 'react';

const Laskuri = () => {
    const [lkm, setLkm] = useState(0);
    const [eka, setEka] = useState(0);

    const [nimi, setNimi] = useState("banaani");

    const lisaa = () => { setLkm(lkm + 1); setNimi("appelsiini"); }
    const lisaaEka = () => { setEka(eka + 1); setNimi("banaani"); }
    const nollaa = () => {
        setLkm(0);
        setEka(0);
    }

    return (
        <div>
            <p>{lkm} + {eka} = {lkm+eka}</p>
            <button onClick={lisaa}>Paina</button>
            <button onClick={lisaaEka}>Lisää</button>
            <button onClick={nollaa}>Nollaa</button>
            <p>{nimi}</p>
        </div>
    );
}

export default Laskuri;