fetch("data/resources.json")
	.then(response => response.json())
	.then(data => {
		const item = data.items[0];

		const container = document.createElement("div");
		container.innerHTML = `
		<h2>${item.nume}</h2>
		<p><strong>Tip:</strong> ${item.type}</p>
		<p><strong>Locație:</strong> ${item.location}</p>
		<p><strong>Program:</strong></p>
		<ul>
			${Object.entries(item.program)
				.map(([zi, ore]) => `<li>${zi}: ${ore}</li>`)
				.join("")}
		</ul>
		<p><strong>Tags:</strong> ${item.tags.join(", ")}</p> `;

		document.body.appendChild(container);
	})

	.catch(err => console.error("Eroare la încărcarea JSON-ului:", err));