# 🚀 containerize-docker-app

A simple yet powerful **Dockerized Node.js application** deployed on AWS EC2 and integrated with GitHub & Docker Hub for DevOps workflow practice.

---

# 📌 Project Overview

This project demonstrates how to:

* Build a Node.js application
* Containerize it using Docker
* Deploy it on AWS EC2
* Push code to GitHub
* Push Docker image to Docker Hub

---

# 🛠️ Tech Stack

* Node.js
* Docker
* AWS EC2
* Git & GitHub
* Docker Hub

---

# ☁️ Cloud Setup

* Cloud Provider: Amazon Web Services (AWS)
* Instance: EC2 (Ubuntu)
* Port: 3000 exposed

---

# ⚙️ Step-by-Step Setup

## 1️⃣ Launch EC2 Instance

* Launch Ubuntu EC2 instance from AWS
* Open ports:

  * SSH (22)
  * HTTP (80)
  * Custom (3000)

---

## 2️⃣ Connect to Server

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

---

## 3️⃣ Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

Add user to docker group:

```bash
sudo usermod -aG docker ubuntu
newgrp docker
```

---

## 4️⃣ Project Setup

```bash
mkdir containerize-docker-app
cd containerize-docker-app
```

---

## 5️⃣ Node.js App (app.js)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("🚀 Welcome to Containerized App");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## 6️⃣ Dockerfile

```dockerfile
FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

---

## 7️⃣ Build Docker Image

```bash
docker build -t containerize-docker-app .
```

---

## 8️⃣ Run Container

```bash
docker run -d -p 3000:3000 containerize-docker-app
```

---

## 9️⃣ Test Application

Open in browser:

```
http://your-ec2-ip:3000
```

---

# 📤 GitHub Deployment

## Initialize Git

```bash
git init
git add .
git commit -m "Initial commit"
```

## Push to GitHub

```bash
git remote add origin https://github.com/username/containerize-docker-app.git
git branch -M main
git push -u origin main
```

---

# 🐳 Docker Hub Deployment

## Login

```bash
docker login
```

## Tag Image

```bash
docker tag containerize-docker-app ashu72/containerize-docker-app:latest
```

## Push Image

```bash
docker push ashu72/containerize-docker-app:latest
```

---

# 📊 DevOps Workflow

```
GitHub → AWS EC2 → Docker → Docker Hub
```

---

# 🌳 Project Folder Structure (Tree Diagram)

```
containerize-docker-app/
│
├── app.js
├── package.json
├── Dockerfile
├── README.md
│
└── node_modules/ (auto generated)
```

GitHub → AWS EC2 → Docker → Docker Hub

---

# 🎯 Key Learnings

* Containerization using Docker
* EC2 deployment
* Git version control
* Image publishing on Docker Hub

---

# 👨‍💻 Author

Ashu Chamle

---

# ⭐ Future Improvements

* CI/CD using GitHub Actions
* NGINX reverse proxy
* Monitoring (Prometheus + Grafana)
