async function searchTorrent() {

  const query = document
    .getElementById("searchInput")
    .value;

  const response = await fetch(`/search?q=${query}`);

  const torrents = await response.json();

  const resultsDiv = document
    .getElementById("results");

  resultsDiv.innerHTML = "";

  if (torrents.length === 0) {
    resultsDiv.innerHTML = `
      <p>No torrents found.</p>
    `;
    return;
  }

  torrents.forEach(torrent => {

    resultsDiv.innerHTML += `
      <div class="card">

        <h2>${torrent.name}</h2>

        <p><strong>Size:</strong> ${torrent.size}</p>

        <p><strong>Seeders:</strong> ${torrent.seeders}</p>

        <p><strong>Leechers:</strong> ${torrent.leechers}</p>

        <a href="${torrent.magnet}">
          <button class="download-btn">
            Download Magnet
          </button>
        </a>

      </div>
    `;
  });
}
