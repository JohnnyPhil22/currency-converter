document.addEventListener("DOMContentLoaded", async () => {
	const apiKey = "pub_334850cddf512573e77bbf35335817ddbdff7";
	const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=currency-exchange`;

	try {
		const response = await fetch(apiUrl);
		console.log('Response Status:', response.status);
		console.log('Response Status Text:', response.statusText);
		const result = await response.json();
		console.log('Response Content:', result);

		const articles = result.results || [];

		if (articles.length > 0) {
			const newsContainer = document.getElementById("news-container");

			articles.forEach(article => {
				const newsItem = document.createElement("div");
				newsItem.classList.add("news-item");

				const title = document.createElement("h2");
				title.textContent = article.title;

				const description = document.createElement("p");
				description.textContent = article.description;

				const link = document.createElement("a");
				link.href = article.url;
				link.textContent = "Read more";

				newsItem.appendChild(title);
				newsItem.appendChild(description);
				newsItem.appendChild(link);
				newsContainer.appendChild(newsItem);
			});
		} else {
			console.log("No articles found in the response.");
		}
	} catch (error) {
		console.error("Error fetching currency news:", error);
	}
});