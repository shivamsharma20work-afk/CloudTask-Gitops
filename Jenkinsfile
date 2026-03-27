pipeline {
    agent any

    environment {
        AWS_REGION= 'ap-south-1'
        AWS_ACCOUNT_ID= '288096932508'
    }

    stages{
        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t backend-image:latest ./backend
                docker build -t frontend-image:latest ./frontend
                '''
            }
        }
        stage('ECR Login') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: "aws-credentials-id",
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]){
                    sh '''
                    aws ecr get-login-password --region $AWS_REGION | \
                    docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.$AWS_REGION.amazonaws.com
                    '''
                }
            }
        }   
    }
}