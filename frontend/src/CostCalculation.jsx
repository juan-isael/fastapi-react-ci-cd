import { useState } from "react";

function CostCalculation() {

    const [item, setItem] = useState("");
    const [result, setResult] = useState(null);

    const sendData = async (e) => {

        e.preventDefault();

        const params = new URLSearchParams();
        params.append("key", item);

        // const res = await fetch(`http://localhost:8000/buy?${params}`);
        const res = await fetch(`/api/buy?${params}`);
        const data = await res.json();

        setItem("");
        setResult(data);

    };

    return (<>
        <h2>TASK 2</h2>
        <div className="row">
            <form className="col-auto" onSubmit={sendData}>
                <div className="row g-3 align-items-center mb-3">
                    <label htmlFor="InputValue" className="col-auto col-form-label">Item</label>
                    <div className="col-auto">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="InputValue" 
                            placeholder="i.e. Shoes"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            aria-describedby="statusMessage"
                            required
                        />
                    </div>
                </div>
                <div className="col-auto mb-3">
                    {result && (
                        <span id="statusMessage" className="form-text mb-3">{result.message}</span>
                    )}
                </div>
                <button id="add" type="submit" className="col-auto btn btn-secondary mb-3">Add To Car</button>
                <button
                    id="delete"
                    type="submit" 
                    className="col-auto btn btn-secondary mb-3 ms-3" 
                    onClick={() => setItem("clean_checkout")}
                > Delete car
                </button>
            </form>
            <div className="col-auto card border-dark mb-3"> {/*style="max-width: 5rem;"*/}
                <div className="card-header">CHECKOUT</div>
                <div className="card-body">
                    <h6 className="card-title">PRODUCTS</h6>
                    <ul className="list-group mb-3">
                        {result?.items && (
                            Object.entries(result.items).map(([index, item]) => (
                                <li className="list-group-item list-group-item-secondary" key={index}>
                                    {item}
                                </li>
                            ))
                        )}
                    </ul>
                    <div className="row">
                        <h6 className="col card-title fw-light">SUBTOTAL</h6>
                        <h6 className="col card-title text-end fw-light">${result?.subtotal && (result.subtotal)}</h6>
                    </div>
                    <div className="row">
                        <h6 className="col card-title fw-light">TAX</h6>
                        <h6 className="col card-title text-end fw-light">{result?.tax && (result.tax)}%</h6>
                    </div>
                    <div className="row mt-3">
                        <h6 className="col card-title">TOTAL</h6>
                        <h6 className="col card-title text-end">${result?.total && (result.total)}</h6>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CostCalculation;