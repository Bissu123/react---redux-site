import React, { useState } from "react";


let index = 0;

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

const Anecdote = () => {
    const [anecdote0, setAnecdote0] = useState(0);
    const [anecdote1, setAnecdote1] = useState(0);
    const [anecdote2, setAnecdote2] = useState(0);
    const [anecdote3, setAnecdote3] = useState(0);
    const [anecdote4, setAnecdote4] = useState(0);
    const [anecdote5, setAnecdote5] = useState(0);
    const [anecdote6, setAnecdote6] = useState(0);

    const [activeAnecdote, setActiveAnecdote] = useState(anecdotes[index]);

    function pickAnecdote() {
        index = Math.floor(Math.random() * anecdotes.length)
        setActiveAnecdote(anecdotes[index])
    }

    function voteCurrent() {
        switch (index) {
            case 0:
                setAnecdote0(anecdote0 + 1);
                break;
            case 1:
                setAnecdote1(anecdote1 + 1);
                break;
            case 2:
                setAnecdote2(anecdote2 + 1);
                break;
            case 3:
                setAnecdote3(anecdote3 + 1);
                break;
            case 4:
                setAnecdote4(anecdote4 + 1);
                break;
            case 5:
                setAnecdote5(anecdote5 + 1);
                break;
            case 6:
                setAnecdote6(anecdote6 + 1);
                break;
        }
    }


    return (
        <div>
            <p className="strong">Anecdote of the Day</p>
            <div className="anecdote">
                <p>{activeAnecdote}</p>
            </div>
            <hr />
            <p className="strong">Choose random Anecdote</p>
            <div className="anecdoteBtn">
                {/* <button onClick={nextAnecdote}>Seuraava anekdootti</button> */}
                <button onClick={pickAnecdote}>Satunnainen anekdootti</button>
            </div>
            <hr />
            <p className="strong">Press "Vote" if this is Your favourite</p>
            <p className="medium">Otherwise press "Next Anecdote"</p>
            <div className="voteBtn">
                <button onClick={voteCurrent}>Äänestä tätä anekdoottia</button>
            </div>
            <hr />
            <p className="strong">Votes for each Anecdote</p>
            <div className="anecdoteVotes" id="anecdoteVotes">
                <div className="anecdoteVote0 votes">1.<span>{anecdotes[0]}</span><span>{anecdote0} ääntä</span></div>
                <div className="anecdoteVote1 votes">2.<span>{anecdotes[1]}</span><span>{anecdote1} ääntä</span></div>
                <div className="anecdoteVote2 votes">3.<span>{anecdotes[2]}</span><span>{anecdote2} ääntä</span></div>
                <div className="anecdoteVote3 votes">4.<span>{anecdotes[3]}</span><span>{anecdote3} ääntä</span></div>
                <div className="anecdoteVote4 votes">5.<span>{anecdotes[4]}</span><span>{anecdote4} ääntä</span></div>
                <div className="anecdoteVote5 votes">6.<span>{anecdotes[5]}</span><span>{anecdote5} ääntä</span></div>
                <div className="anecdoteVote6 votes">7.<span>{anecdotes[6]}</span><span>{anecdote6} ääntä</span></div>
            </div>
        </div>
    )
};

export default Anecdote;