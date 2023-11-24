document.addEventListener("DOMContentLoaded", async () => {
	const url = 'https://real-time-finance-data.p.rapidapi.com/currency-news?from_symbol=USD&to_symbol=EUR&language=en';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ea5eb936abmsha55cc9997488031p14d584jsn8ee9d63fcfbc',
			'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		console.log('Response Status:', response.status);
		console.log('Response Status Text:', response.statusText);
		const result = await response.json();
		console.log('Response Content:', result);

		const newsData = result.data || {};
		const articles = newsData.news || [];

		if (articles.length > 0) {
			const newsContainer = document.getElementById("news-container");

			articles.forEach(article => {
				const newsItem = document.createElement("div");
				newsItem.classList.add("news-item");

				const title = document.createElement("h2");
				title.textContent = article.article_title;

				const description = document.createElement("p");
				description.textContent = article.article_title;

				const link = document.createElement("a");
				link.href = article.article_url;
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