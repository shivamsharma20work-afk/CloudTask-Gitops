pipeline {
    agent any
    
    environment {
        DOCKER_HUB_CREDS = credentials('docker-hub-creds')
        DOCKER_HUB_USER  = 'shivam011'
        APP_NAME         = 'argo'
    }
    stages {
        stage('Checkout') {
            steps {
                // Dashboard ki settings ko reuse karega, do baar mehnat nahi hogi
                checkout scm
            }
        }
        stage('Docker Login') {
            steps {
                sh "echo \$DOCKER_HUB_CREDS_PSW | docker login -u \$DOCKER_HUB_CREDS_USR --password-stdin"
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