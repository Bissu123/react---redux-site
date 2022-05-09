import React from "react";

const Laske = (props) => {
    let ekaLuku = props.ekaLuku;
    let tokaLuku = props.tokaLuku; 
    let sj = eukilede(ekaLuku, tokaLuku);

    function eukilede(a, b) {
        var R;
        while ((a % b) > 0)  {
          R = a % b;
          a = b;
          b = R;
        }
        return b;
      }

    return (
        <div>
            <p>Suurin yhteinen jaettava luvuilla {ekaLuku} ja {tokaLuku} on {sj}</p>
        </div>
    );
};

export default Laske;