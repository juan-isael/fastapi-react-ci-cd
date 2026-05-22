import { useState } from "react";
import { createWord } from "./services/api";

function NewWord() {

    const [words, setWords] = useState("");
    const [newWord, setNewWord] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getNewWord = async (e) => {

        try{
            e.preventDefault();
            setLoading(true);
            setError("");

            const data = await createWord(words);

            setNewWord(data);
        } catch (err) {
            setError(`Something went wrong`);
            console.log(err);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="card shadow h-100">
            <div className="card-body p-4">
                <h2>CREATE NEW WORD</h2>
                <form onSubmit={getNewWord}>
                    <div className="mt-3 mb-3">
                        <label htmlFor="inputWords" className="form-label">Words</label>
                        <input 
                            type="text" 
                            id="inputWords" 
                            className="form-control mb-2" 
                            aria-describedby="wordHelpInline" 
                            placeholder="word1,word2,word3"
                            value={words}
                            onChange={(e) => setWords(e.target.value)}
                            required/>
                        <span id="wordHelpInline" className="form-text">
                        Enter the words separated by commas.
                        </span>
                    </div>
                    {loading && <p>Loading...</p>}

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    {newWord && (
                        <div className="row align-items-center">
                            <div className="col-3 mb-3">
                                <label htmlFor="resultOutput">Result:</label>
                            </div>
                            {newWord.new_word 
                                ? <output id="resultOutput" className="col-9 alert alert-success">{newWord.new_word}</output> 
                                : <output id="resultOutput" className="col-9 alert alert-warning">{newWord?.description}</output>
                            }
                        </div>
                    )}
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default NewWord;