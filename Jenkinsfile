pipeline { 
    agent any
    
    stages {

	stage('Build Container'){
	   steps{
	       sh 'docker compose build'
	   }
	}

	stage('Deploy Container'){
	    steps{
		sh 'docker compose down'
		sh 'docker compose up -d'
	    }
	}

	stage('Verify Container'){
	    steps{
		sh 'docker ps'
	    }
	}
    }
}
