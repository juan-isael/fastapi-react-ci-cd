export async function addItem(item, price) {
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

    if (!response.ok) {
        throw new Error("Request failed");
    }

    return response.json();
}

export async function buyItem(item) {
    const params = new URLSearchParams();
    params.append("key", item);

    // const res = await fetch(`http://localhost:8000/buy?${params}`);
    const response = await fetch(`/api/buy?${params}`);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    return response.json();
}

export async function createWord(words) {

    const arr_words = words.split(",").map(item => item.trim());

    const params = new URLSearchParams();

    arr_words.forEach(word => {
        params.append("arr", word);
    });

    const response = await fetch(`/api/create?${params}`);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    return response.json();
}