pipeline {  
    agent any  
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'docker version'
                sh 'docker-compose version'
                sh 'docker-compose ps'
                sh 'docker-compose kill'
                sh 'docker-compose rm --stop --force'
                sh 'docker-compose build --no-cache gateway user house-construction'
                sh 'docker-compose up --force-recreate -d gateway user house-construction'
            }            
        }
    }
}