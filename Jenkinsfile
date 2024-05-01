pipeline {
    agent any

    environment {
        nodejs = 'C:\\Program Files\\nodejs\\node.exe'
        npm = 'C:\\Program Files\\nodejs\\npm.cmd'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat "\"${npm}\" install"
            }
        }
    }
    stages {
        stage('Build App') {
            steps {
                bat "\"${npm}\" run build"
            }
        }
    }
    stages {
        stage('Run App') {
            steps {
                bat "\"${nodejs}\" index.js"
            }
        }
    }
}