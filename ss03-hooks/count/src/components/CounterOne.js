import { useIncrement } from "./useIncrement";

function CounterOne() {
    const [count, setCount] = useIncrement(1);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={setCount}>Add 1</button>
        </div>
    );
}

export default CounterOne;
