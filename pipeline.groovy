pipeline {
    agent any

    stages {
        stage('SCM checkout') {
            steps {
                retry(3) {
                    checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Madhushan11/Frontend.git']])
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t sakilamadhushanabc585/frontend .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run the new container
                    sh 'docker run -d -p 5001:3000 sakilamadhushanabc585/frontend'


                }
            }
        }
        stage('Show Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub_password1', variable: 'Dockerhub1')]) {
                    script {
                        sh "docker login -u sakilamadhushanabc585 -p ${Dockerhub1}"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
                    retry(3) {
                        echo 'Pushing Docker image to Docker Hub...'
                        sh 'docker push sakilamadhushanabc585/frontend'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
