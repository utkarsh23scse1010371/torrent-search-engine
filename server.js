const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"));

const torrents = [
  {
    id: 1,
    name: "Skyrim Anniversary Edition",
    size: "12 GB",
    seeders: 1200,
    leechers: 200,
    magnet: "magnet:?xt=urn:btih:skyrim123"
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    size: "70 GB",
    seeders: 950,
    leechers: 150,
    magnet: "magnet:?xt=urn:btih:cyberpunk123"
  },
  {
    id: 3,
    name: "The Witcher 3",
    size: "35 GB",
    seeders: 1500,
    leechers: 300,
    magnet: "magnet:?xt=urn:btih:witcher123"
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    size: "110 GB",
    seeders: 2100,
    leechers: 400,
    magnet: "magnet:?xt=urn:btih:rdr2123"
  }
];

app.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const results = torrents.filter(torrent =>
    torrent.name.toLowerCase().includes(query)
  );

  res.json(results);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
