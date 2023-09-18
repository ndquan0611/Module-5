import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import config from "../../config";
import * as libraryService from "../../services/libraryService";

function List() {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await libraryService.get();
            setLibrary(result);
        };
        fetchApi();
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-4">
                <h3>Library</h3>
                <Link to={config.routes.create} className="btn btn-success d-flex align-items-center">
                    Add a new Book
                </Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {library.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={`/update/${item.id}`} className="btn btn-primary ms-2">
                                    Update
                                </Link>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;
