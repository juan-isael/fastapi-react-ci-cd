import { useState } from "react";
import { addItem } from "./services/api";

function Dictionary() {

    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            setLoading(true);
            setError("");

            const data = await addItem(item, price);
            setResult(data);
        } catch (err) {
            setError(`Something went wrong`);
            console.log(err);
        } finally {
            setLoading(false);
        }
  
    };


    return (
        <div className="card shadow h-100">
            <div className="card-body p-4">
                <h2>ADD ITEMS</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="InputItem" className="form-label">Item</label>
                        <div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="InputItem" 
                                placeholder="i.e. Sandia"  
                                value={item}
                                onChange={(e) => setItem(e.target.value)} 
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPrice" className="form-label">Price</label>
                        <div>
                            <input 
                                type="number"
                                min="0"
                                className="form-control" 
                                id="InputPrice" 
                                placeholder="$$$"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {loading && <p>Loading...</p>}

                    {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                    )}
                    <button type="submit" className="btn btn-secondary mb-3">Add</button>
                        <div className="row align-items-center mb-3">
                            <h6>Items:</h6>
                            {result ? (
                                <ul className="col-auto list-group mb-3">
                                    {Object.entries(result.dictionary).map(([key, value]) => (
                                        <li className="list-group-item list-group-item-secondary" key={key}>
                                        {key} - ${value}
                                        </li>
                                    ))}
                                </ul>
                            ) : <p className="text-muted">No items added</p>}
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Dictionary;