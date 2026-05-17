import { useState } from "react";

function Dictionary() {

    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("/api/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                key: item,
                value: price,
            }),
        });

        const data = await response.json();
        setResult(data);
        // console.log(result);
    };


    return (<>
        <h2>TASK 1</h2>
        <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center mb-3">
                <label htmlFor="InputItem" className="col-auto col-form-label">Item</label>
                <div className="col-auto">
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
            <div className="row g-3 align-items-center mb-3">
                <label htmlFor="InputPrice" className="col-auto col-form-label">Price</label>
                <div className="col-auto">
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
            <button type="submit" className="btn btn-secondary mb-3">Add</button>
            {result && (
                <div className="row g-3 align-items-center mb-3">
                    <h6>Items:</h6>
                    <ul className="col-auto list-group mb-3">
                            {Object.entries(result.dictionary).map(([key, value]) => (
                                <li className="list-group-item list-group-item-secondary" key={key}>
                                {key} - ${value}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </form>
    </>);
}

export default Dictionary;