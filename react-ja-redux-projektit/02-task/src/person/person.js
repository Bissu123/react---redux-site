import './person.css';


const person = (props) => {
    return (
        <section className='Person'>
            <p className='punainen'>Hello, my name is {props.name}, and i am {props.age} years old.</p>
        </section>
    );
}

export default person;