pipeline {  
    agent any  
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'docker-compose ps'
                sh 'docker-compose kill'
                sh 'docker-compose rm --stop --force'
                sh 'docker-compose build --no-cache gateway'
                sh 'docker-compose build --no-cache house-construction'
                sh 'docker-compose build --no-cache user'
                sh 'docker-compose up --force-recreate  -d gateway'
                sh 'docker-compose up --force-recreate  -d house-construction'
                sh 'docker-compose up --force-recreate  -d user'
            }            
        }
    }
}