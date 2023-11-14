import { useState } from 'react';
import Content from './Content';

function Home() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Conditional Rendering</h1>
            {!show ? (
                <button onClick={() => setShow(!show)}>Xem giới thiệu</button>
            ) : (
                <button onClick={() => setShow(!show)}>Đóng giới thiệu</button>
            )}

            {show && (
                <div>
                    <Content />
                </div>
            )}
        </div>
    );
}

export default Home;
