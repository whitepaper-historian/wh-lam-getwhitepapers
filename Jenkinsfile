//This pipeline assumes the following plugins exist on the Jenkins instance:
//TBD

pipeline {
	agent any

	stages {
		stage('Deploy') {
			steps{
				sh('rm -f package.zip')
				sh('zip -j package.zip lambda/index.js')
				sh('/root/.local/bin/aws lambda update-function-code --function-name GetWhitepapers --zip-file fileb://package.zip')
				sh('rm package.zip')
			}
		}
	}
}
