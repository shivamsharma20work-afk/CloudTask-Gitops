pipeline {
    agent any

    environment {
        // Dashboard mein banayi hui Credential ID yahan use hogi
        DOCKER_HUB_CREDS = credentials('docker-hub-creds')
        DOCKER_HUB_USER  = 'shivam011'
        APP_NAME         = 'argo'
    }

    stages {
        stage('Clone Code') {
            steps {
                // GitHub se code uthane ke liye
                git branch: 'main', url: 'https://github.com/shivamsharma20work-afk/CloudTask-Gitops'
            }
        }

        stage('Docker Login') {
            steps {
                // Jenkins dashboard se token pull karke login karega
                sh "echo \$DOCKER_HUB_CREDS_PSW | docker login -u \$DOCKER_HUB_CREDS_USR --password-stdin"
            }
        }

        stage('Build & Push Backend') {
            steps {
                // Backend image build aur Docker Hub par push
                sh "docker build -t ${DOCKER_HUB_USER}/${APP_NAME}-backend:latest ./backend"
                sh "docker push ${DOCKER_HUB_USER}/${APP_NAME}-backend:latest"
            }
        }

        stage('Build & Push Frontend') {
            steps {
                // Frontend image build aur Docker Hub par push
                sh "docker build -t ${DOCKER_HUB_USER}/${APP_NAME}-frontend:latest ./frontend"
                sh "docker push ${DOCKER_HUB_USER}/${APP_NAME}-frontend:latest"
            }
        }
    }

    // Har build ke baad kya hona chahiye
    post {
        success {
            echo "Bhai party! Images Docker Hub par push ho gayi hain. 🚀"
        }
        failure {
            echo "Kuch gadbad ho gayi. Logs check kar! ❌"
        }
        always {
            // Jenkins workspace clean rakhta hai
            cleanWs()
        }
    }
}