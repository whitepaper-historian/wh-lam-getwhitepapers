//This pipeline assumes the following plugins exist on the Jenkins instance:
//TBD

pipeline {
	agent any

	stages {
		stage('Build') {
			//Nothing here at the moment
		}

		stage('Test') {
			//Nothing here either. I should set a linter here.
		}

		stage('Deploy') {
			sh('zip package.zip lambda/index.js')
			sh('aws lambda update-function-code --function-name GetWhitepapers-DEV')
			sh('rm package.zip')
		}
	}
}