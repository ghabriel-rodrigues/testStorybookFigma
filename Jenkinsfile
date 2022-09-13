pipeline {
  agent any
  options { disableConcurrentBuilds() }

  parameters {
      choice(
        name: 'RELEASE_TYPE',
        description: 'The release type',
        choices: 'none\nprepatch\npreminor\npremajor\npatch\nminor\nmajor'
      )
      text(
        name: 'RELEASE_CHANGES',
        description: 'The changes to add to the change log'
      )
      text(
        name: 'BRANCH_NAME',
        description: 'The branch to be used when cloning repo',
        defaultValue: 'main'
      )
  }

  stages {
    stage ('Check release type parameter') {
      when {
        expression { (params.RELEASE_TYPE == 'none') }
      }

      steps {
        script {
          error('You must define the release type before go')
        }
      }
    }

    stage ('Clear local repo directory') {
      steps {
        sh ('rm -rf repository')
      }
    }

    stage ('Clone the package repository') {
      steps {
        sshagent (credentials: ['slave-github-ssh']) {
          script {
            sh("""
              git clone -b ${params.BRANCH_NAME} git@github.com:gupy-io/design-system-v2.git  ./repository
            """)
          }
        }
      }
    }

    stage ('Build') {
      steps {
        lock('same-image-for-publishers') {
          sh "make build"
        }
      }
    }

    stage ('Publish package') {
      environment {
        RELEASE_TYPE = "${params.RELEASE_TYPE}"
        RELEASE_CHANGES = "${params.RELEASE_CHANGES}"
        REPOSITORY_TYPE = "node"
        IMAGE_VERSION = "16.13.1"
      }
      steps {
        withCredentials([[
            $class: 'AmazonWebServicesCredentialsBinding',
            credentialsId: 'AWS_SHARED_ACC_JENKINS_USER',
            accessKeyVariable: 'AWS_ACCESS_KEY_ID',
            secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
        ]]) {
          sshagent (credentials: ['slave-github-ssh']) {
            script {
              sh('make publish-package')
            }
          }
        }
      }
    }
  }
}
