//This pipeline assumes the following plugins exist on the Jenkins instance:
//TBD

pipeline {
	agent any

	stages {
		stage('Deploy') {
			steps{
				sh('zip package.zip lambda/index.js')
				sh('aws lambda update-function-code --function-name GetWhitepapers-DEV')
				sh('rm package.zip')
			}
		}
	}
}