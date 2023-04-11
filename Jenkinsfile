pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
//                 sh 'npm run build'
                sh 'npm run pack'
            }
        }
     stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
