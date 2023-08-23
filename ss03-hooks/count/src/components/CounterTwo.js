import { useIncrement } from "./useIncrement";

function CounterTwo() {
    const [count, setCount] = useIncrement(2);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={setCount}>Add 2</button>
        </div>
    );
}

export default CounterTwo;
