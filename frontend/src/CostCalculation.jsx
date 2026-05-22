import { useState } from "react";
import { buyItem } from "./services/api";

function CostCalculation() {

    const [item, setItem] = useState("");
    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const sendData = async (e) => {

        try {
            e.preventDefault();
            setLoading(true);
            setError("");

            const data = await buyItem(item)

            setItem("");
            setResult(data);
        } catch (err) {
            setError(`Something went wrong`);
            console.log(err);
        } finally {
            setLoading(false);
        }

    };

    const clearCart = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await buyItem("clean_checkout");

            setResult(data);

        } catch (err) {
            setError("Something went wrong");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="card shadow h-100">
            <div className="card-body p-4">
                <h2 className="card-title mb-4">SELECT ITEMS</h2>
                <div className="row">
                    <form className="col-auto" onSubmit={sendData}>
                        <div className="row align-items-center mb-3">
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
                            <div className="mb-3 mt-3">
                                {loading && <p>Loading...</p>}

                                {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                                )}
                                
                                {result && (
                                    <span id="statusMessage" className="form-text">{result.message}</span>
                                )}
                            </div>
                        </div>
                        <button id="add" type="submit" className="col-auto btn btn-secondary">Add To Car</button>
                        <button
                            id="delete"
                            type="button" 
                            className="col-auto btn btn-danger ms-3" 
                            onClick={clearCart}
                        > Clear cart
                        </button>
                    </form>
                    <div className="card bg-light mt-3"> {/*style="max-width: 5rem;"*/}
                        <div className="card-header bg-light">CHECKOUT</div>
                        <div className="card-body bg-light">
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
            </div>
        </div>
    );
}

export default CostCalculation;