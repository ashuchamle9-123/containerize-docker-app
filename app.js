const http = require("http");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Logging (important for DevOps)
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Routing
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "🚀 Welcome to containerize-docker-app App",
      status: "Running",
      timestamp: new Date(),
      hostname: os.hostname()
    }));
  }

  else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "UP",
      uptime: process.uptime(),
    }));
  }

  else if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      platform: os.platform(),
      cpu: os.cpus().length,
      memory: os.totalmem(),
    }));
  }

  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      error: "Route not found"
    }));
  }
});

// Error Handling
server.on("error", (err) => {
  console.error("Server Error:", err);
});

// Start Server
server.listen(PORT, () => {
  console.log(`✅ containerize-docker-app running on port ${PORT}`);
});
