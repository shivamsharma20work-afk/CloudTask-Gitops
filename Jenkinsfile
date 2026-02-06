pipeline {
    agent any
    environment {
        DOCKER_HUB_USER = 'shivam011'
        APP_NAME = 'argotask'
    }
    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/shivam-sharma/CloudTask-Gitops.git'
            }
        }
        stage('Build & Push Backend') {
            steps {
                sh "docker build -t ${DOCKER_HUB_USER}/${APP_NAME}-backend:latest ./backend"
                sh "docker push ${DOCKER_HUB_USER}/${APP_NAME}-backend:latest"
            }
        }
        stage('Build & Push Frontend') {
            steps {
                sh "docker build -t ${DOCKER_HUB_USER}/${APP_NAME}-frontend:latest ./frontend"
                sh "docker push ${DOCKER_HUB_USER}/${APP_NAME}-frontend:latest"
            }
        }
    }
}