# 🚀 Next.js DevOps Portfolio

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-purple)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

## 🧩 Overview

This project showcases a robust DevOps pipeline for a Next.js application. It demonstrates key practices including:
*   **Containerization** with Docker.
*   **Automated CI/CD** using GitHub Actions.
*   **Container Registry Integration** with GitHub Container Registry (GHCR).
*   **Kubernetes Deployment** on a local Minikube cluster.

This repository serves as a practical example of how to streamline development, testing, and deployment processes for modern web applications.

---

## ⚙️ Setup Instructions

To get this project up and running locally, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/umamahiii/nextjs-devops-portfolio.git
    cd nextjs-devops-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Install Docker**
    Download and install Docker Desktop from: [https://www.docker.com/get-started](https://www.docker.com/get-started)
    *Ensure Docker is running before proceeding.*

4.  **Install Minikube**
    *Using Chocolatey (Windows):*
    ```bash
    choco install minikube
    ```
    *(For other operating systems, refer to the official Minikube documentation.)*

5.  **Install kubectl**
    *Using Chocolatey (Windows):*
    ```bash
    choco install kubernetes-cli
    ```
    *(For other operating systems, refer to the official Kubernetes documentation.)*

---

## 💻 Local Development

You have a few options to run the Next.js application locally:

### Run the App Directly
```bash
npm run dev

Access the application at: http://localhost:3000
## Run using Docker
1. **Build the Docker Image:**
```Bash
docker build -t nextjs-app .
Run the Docker Container:
```
docker run -p 3000:3000 nextjs-app

## Access the application at: http://localhost:300

## 🤖 CI/CD Workflow
**The project incorporates an automated CI/CD pipeline powered by GitHub Actions, defined in .github/workflows/docker.yml. This workflow performs the following actions on every push to the main branch (or specified branches):**
Builds and Tests the Next.js application.
Builds a Docker image for the application.
Pushes the Docker image to GitHub Container Registry (GHCR).
**An example of the pushed Docker image tag:**
```bash
ghcr.io/umamahiii/nextjs-devops-portfolio:latest
```

## ☸️ Kubernetes Deployment (Minikube)

Deploy the containerized Next.js application to your local Minikube cluster:

1.  **Start Minikube**
    ```bash
    minikube start --driver=virtualbox
    ```
    *(You can specify a different driver if needed, e.g., `--driver=docker`)*

2.  **Apply Kubernetes Manifests**
    ```bash
    kubectl apply -f k8s/deployment.yaml
    kubectl apply -f k8s/service.yaml
    ```

3.  **Check Pod and Service Status**
    Verify that your deployment and service are running:
    ```bash
    kubectl get pods
    kubectl get svc
    ```

4.  **Access the Application**
    Minikube will provide a URL to access your deployed application:
    ```bash
    minikube service nextjs-service --url
    ```
    Example URL: `http://192.168.59.100:32000`
    Open this URL in your web browser to see the running Next.js app.

### 📁 Kubernetes Directory Structure
k8s/
├── deployment.yaml # Defines the application's deployment (replicas, container image, health probes)
└── service.yaml # Exposes the application externally via a NodePort service

## 🔁 Restart or Update Deployment

To apply changes or restart your deployment after updating the Docker image (e.g., pushing a new `latest` tag to GHCR):

### Rollout Restart:
```bash
kubectl rollout restart deployment nextjs-deployment
```

Reapply All Manifests:
(This is useful for structural changes to deployment.yaml or service.yaml)

```bash
kubectl delete -f k8s/
kubectl apply -f k8s/
```

### 🧹 Clean Up
**When you're finished, you can stop or delete your Minikube cluster:**
```bash
Stop Minikube:

minikube stop
```

(This preserves the cluster state for a quicker restart later)
Delete the Minikube Cluster Completely:
```bash
minikube delete
```
(This removes all Minikube-related resources and data)

### 👩‍💻 Author
**Uma Maheswari S  
Trivandrum, Kerala**
**LinkedIn Profile** (Please replace with your actual LinkedIn URL)
**GitHub Profile** (Please replace with your actual GitHub URL)

### 🧾 Summary of Technologies
**Tool**	          Purpose
**Next.js**	        Frontend framework for building the web application
**Docker**	        Containerization of the Next.js application
**GitHub Actions**	CI/CD automation for building, testing, and pushing Docker images
**GHCR**	GitHub    Container Registry for storing Docker images
**Kubernetes**	    Container orchestration system for deployment and management
**Minikube**	      Tool for running a single-node Kubernetes cluster locally
**kubectl**	        Command-line tool for interacting with Kubernetes clusters
**Project Goal:**   To demonstrate a complete and functional DevOps pipeline, showcasing the integration of Next.js, Docker, GitHub Actions, and Kubernetes (Minikube).
