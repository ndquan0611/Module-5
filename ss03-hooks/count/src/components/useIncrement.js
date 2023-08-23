import { useState } from "react";

export function useIncrement(value) {
    const [count, setCount] = useState(value);

    const increse = () => {
        setCount((prev) => prev + value);
    };

    return [count, increse];
}
