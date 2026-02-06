pipeline {
    agent any
    environment {
        DOCKER_HUB_USER = 'shivam011'
        APP_NAME = 'argo'
        // 'docker-hub-creds' wo ID hai jo tum Jenkins Credentials mein banaoge
        DOCKER_CREDS = credentials('docker-hub-creds')
    }
    stages {
        
        stage('Docker Login') {
            steps {
                // $DOCKER_CREDS_PSW aur $DOCKER_CREDS_USR Jenkins apne aap provide karega
                sh "echo \$DOCKER_CREDS_PSW | docker login -u \$DOCKER_CREDS_USR --password-stdin"
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