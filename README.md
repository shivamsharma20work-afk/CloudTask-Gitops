🚀 CloudTask-GitOps: End-to-End Automated DevOps Pipeline
This project is a Full-Stack Task Management Application deployed using a modern GitOps workflow. It demonstrates a complete CI/CD lifecycle where manual intervention is eliminated, ensuring that the application remains in a "Desired State" on a Kubernetes cluster.

🏗️ Architecture & Tools
The project integrates industry-standard tools to create a robust delivery pipeline:

Frontend: React.js

Backend: Node.js / Express.js

Database: MongoDB (Stateful deployment with PV/PVC for data persistence)

Orchestration: Kubernetes (Local Cluster / Minikube)

CI Tool: Jenkins (Automated builds, Dockerization, and pushing to Registry)

Containerization: Docker

CD (GitOps): ArgoCD (Synchronizing Git state with the K8s cluster)


🛠️ The Pipeline Workflow
Code Commit: Developer pushes code to the GitHub repository.

Continuous Integration (CI): Jenkins is configured with Poll SCM (every 5 minutes). It detects changes, builds new Docker images for Frontend and Backend, and pushes them to Docker Hub.

Continuous Deployment (CD): ArgoCD monitors the /k8s directory in this repository.

GitOps Sync: As soon as a change is detected in the manifests (or triggered by a sync), ArgoCD pulls the latest images and updates the Kubernetes pods in the argo-app namespace.



🚀 Setup & Deployment
1. Kubernetes Namespace
Create the dedicated namespace for the application:
    kubectl create ns argo-app

2. Jenkins Configuration
Install the Docker Pipeline and Git plugins.

Add Docker Hub credentials with the ID docker-hub-creds.

Set up a Pipeline job pointing to this repo and enable Poll SCM with H/5 * * * *.


3. ArgoCD Installation
Connect ArgoCD to this repository and set the destination namespace to argo-app. Enable Auto-Sync and Self-Heal for a true GitOps experience.


🔥 Key DevOps Features
Persistence: MongoDB uses Persistent Volumes to ensure no data is lost even if pods are restarted.

Automated Scaling: The infrastructure is ready for Horizontal Pod Autoscaling (HPA).

Self-Healing: If a pod crashes or is manually deleted, ArgoCD and K8s automatically bring it back to the state defined in Git.



👤 Author
Shivam Sharma DevOps Enthusiast | Cloud & Automation Specialist