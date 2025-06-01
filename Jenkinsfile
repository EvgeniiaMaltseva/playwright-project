pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh 'docker build -t playwright-test:latest .'
                }
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                    echo 'Running Playwright test in Docker container...' 
                    sh '''
                        docker run --rm \
                            -v ${WORKSPACE}/test-results:/app/test-results \
                            -v ${WORKSPACE}/playwright-report:/app/playwright-report \
                            playwright-test:latest
                    '''
                }
            }
        }
    }
    post {
        always {
            script {
                echo 'Cleaning up dangling Docker images...' 
                sh 'docker image prune -f'
            }
            publishHTML([ 
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            archiveArtifacts artifacts: 'test-results/**'
        }
        failure {
            script {
                echo 'Tests failed! Check the console output and archived artifacts.'
            }
        }
    }
} 