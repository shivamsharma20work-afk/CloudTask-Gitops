pipeline {
    agent any

    environment {
        AWS_REGION= 'ap-south-1'
        AWS_ACCOUNT_ID= '288096932508'
        REPO_NAME= "todo-repo"
        BUILD_TAG= "${BUILD_NUMBER}"

        IMAGE_BACKEND = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:backend-${BUILD_TAG}"
        IMAGE_FRONTEND = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${REPO_NAME}:frontend-${BUILD_TAG}"
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
        stage('TAG & PUSH')  {
            steps{
                sh '''
                docker tag backend-image $IMAGE_BACKEND
                docker tag frontend-image $IMAGE_FRONTEND

                docker push $IMAGE_BACKEND
                docker push $IMAGE_FRONTEND
                '''
            }
        }
    }
}