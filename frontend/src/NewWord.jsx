import { useState } from "react";

function NewWord() {

    const [words, setWords] = useState("");
    const [newWord, setNewWord] = useState("");

    const getNewWord = async (e) => {

        e.preventDefault();

        const arr_words = words.split(",").map(item => item.trim());

        const params = new URLSearchParams();
        arr_words.forEach(item => params.append("arr", item));

        // const res = await fetch(`http://backend:8000/create?${params}`);
        const res = await fetch(`/api/create?${params}`);
        const data = await res.json();

        setNewWord(data);

    }

    return (<>
        <h2>TASK 3</h2>
        <form onSubmit={getNewWord}>
            <div className="row  g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="inputWords" className="col-form-label">Words</label>
                </div>
                <div className="col-auto">
                    <input 
                        type="text" 
                        id="inputWords" 
                        className="form-control" 
                        aria-describedby="wordHelpInline" 
                        placeholder="word1,word2,word3"
                        value={words}
                        onChange={(e) => setWords(e.target.value)}
                        required/>
                </div>
                <label htmlFor="resultOutput" className="col-auto">Result:</label>
                {newWord.new_word ? <output id="resultOutput" className="col-auto">{newWord.new_word}</output> : <output id="resultOutput" className="col-auto">{newWord?.description}</output>}
            </div>
            <div className="col-auto mb-3">
                <span id="wordHelpInline" className="form-text">
                Enter the words separated by commas.
                </span>
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
    </>);

}

export default NewWord;