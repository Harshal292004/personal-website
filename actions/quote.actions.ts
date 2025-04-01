export async function getRandomQuote() {
    const response= await fetch("/api/get_quote",
        {
            method:"GET",
            headers: { "Content-Type": "application/json" },
        }
    ) 
    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error(data.error || "Failed to get quote");
    }
    return {"author":data.author,"text":data.text};
}