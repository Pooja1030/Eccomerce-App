# 🛒 MERN E-Commerce Platform with DevOps CI/CD & Monitoring

A production-style full-stack MERN E-Commerce platform built with modern DevOps practices including Docker, Jenkins CI/CD pipelines, Nginx reverse proxy, Prometheus monitoring, Grafana dashboards, and containerized deployments.

This project demonstrates both **Full Stack Development** and **DevOps Engineering** skills by combining scalable application architecture with automated deployment and monitoring workflows.

---

# 🚀 Project Highlights

## ✅ Full Stack MERN Application

* Modern responsive e-commerce platform
* JWT authentication & authorization
* Product and order management
* Stripe payment integration
* Admin dashboard
* Shopping cart functionality

## ✅ DevOps & Infrastructure

* Dockerized multi-container architecture
* Jenkins CI/CD pipelines
* Automated Docker image builds
* Docker Hub image publishing
* Reverse proxy with Nginx
* Prometheus monitoring stack
* Grafana dashboards
* Blackbox monitoring
* Container monitoring with cAdvisor
* Infrastructure provisioning using Terraform

---

# 🏗️ Architecture

```text
Client
   ↓
Nginx Reverse Proxy
   ↓
Frontend (React)
   ↓
Backend API (Node.js + Express)
   ↓
MongoDB Database

Monitoring Stack:
Prometheus → Grafana
        ↓
Node Exporter
cAdvisor
Blackbox Exporter

CI/CD:
GitHub → Jenkins → Docker Build → Docker Hub
```

---

# 📦 Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Stripe API

## DevOps & Infrastructure

* Docker
* Docker Compose
* Jenkins
* Nginx
* Prometheus
* Grafana
* cAdvisor
* Blackbox Exporter
* Node Exporter
* Terraform

---

# ✨ Features

# 👤 User Features

* Secure JWT Authentication
* Browse Products
* Search & Filter Products
* Add to Cart
* Place Orders
* Stripe Payment Gateway
* Cash on Delivery
* Order History
* Responsive UI
* Toast Notifications

---

# 🛠️ Admin Features

* Add Products
* Edit Products
* Delete Products
* Manage Orders
* Update Order Status
* Inventory Management
* Dashboard Analytics

---

# ⚙️ DevOps Features

## Dockerized Application

The application is fully containerized using Docker Compose.

Containers include:

* Frontend
* Backend
* Admin Panel
* MongoDB
* Nginx Reverse Proxy

---

## Jenkins CI/CD Pipeline

Automated pipeline includes:

* Source Code Checkout
* Docker Image Build
* Multi-Service Deployment
* Container Verification
* Docker Hub Push
* Webhook Trigger Support

---

## Monitoring Stack

Integrated monitoring stack:

* Prometheus Metrics Collection
* Grafana Dashboards
* cAdvisor Container Monitoring
* Node Exporter System Metrics
* Blackbox Endpoint Monitoring

---

# 📁 Project Structure

```bash
Eccomerce-App/
│
├── frontend/
├── backend/
├── admin/
├── nginx/
├── docker-compose.yml
├── Jenkinsfile
├── terraform/
│
├── monitoring/
│   ├── prometheus/
│   ├── grafana/
│   ├── blackbox/
│
└── README.md
```

---

# 🐳 Docker Setup

## Clone Repository

```bash
git clone https://github.com/Pooja1030/Eccomerce-App.git

cd Eccomerce-App
```

---

# 🔐 Environment Variables

## Backend `.env`

```env
MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret
```

## Frontend `.env`

```env
REACT_APP_API_URL=http://localhost:5000
```

---

# 🚀 Run Using Docker Compose

```bash
docker compose up --build
```

---

# 🌐 Application Ports

| Service     | Port  |
| ----------- | ----- |
| Frontend    | 3000  |
| Backend     | 5000  |
| Admin Panel | 3002  |
| MongoDB     | 27017 |
| Jenkins     | 8080  |
| Prometheus  | 9090  |
| Grafana     | 3001  |

---

# 📊 Monitoring Stack

## Prometheus

Collects:

* System metrics
* Container metrics
* Application availability

## Grafana

Visualizes:

* CPU usage
* Memory usage
* Container health
* Docker metrics
* Uptime monitoring

---

# 🔄 Jenkins Pipeline

The Jenkins pipeline automates:

```text
GitHub Push
    ↓
Webhook Trigger
    ↓
Jenkins Build
    ↓
Docker Image Build
    ↓
Container Deployment
    ↓
Verification
```

---

# 🧱 Terraform Infrastructure

Terraform is used for:

* Docker container provisioning
* Multi-environment setup
* Workspace management
* Infrastructure lifecycle management
* Remote state practice

---

# 📌 Docker Hub Images

Published Docker images:

* pooja1030/ecommerce-frontend:v1
* pooja1030/ecommerce-backend:v1
* pooja1030/ecommerce-admin:v1

---


# 🧪 Future Improvements

* Kubernetes Deployment
* AWS Infrastructure Deployment
* Terraform AWS Modules
* GitHub Actions CI/CD
* SSL with Certbot
* Load Balancer Integration
* Blue-Green Deployments
* Auto Scaling
* Helm Charts

---

# 🤝 Contribution

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added feature"
```

4. Push to branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👩‍💻 Author

## Pooja Sawant

DevOps Engineer | Cloud Engineer | MERN Stack Developer

* GitHub: https://github.com/Pooja1030

---

# ⭐ Acknowledgements

* React.js
* Node.js
* MongoDB
* Docker
* Jenkins
* Prometheus
* Grafana
* Terraform
* Nginx
* Stripe
