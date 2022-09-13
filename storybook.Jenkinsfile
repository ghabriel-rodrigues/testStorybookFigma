def apps = [
  staging: [
    roleAccount: '383845628234',
    role: 'StagingCrossAccoutSharedJenkinsPowerAccess'
  ],
  production: [
    roleAccount: '955662339390',
    role: 'ProdCrossAccountSharedCIRole'
  ]
]
pipeline {
  agent {
    docker {
      image 'gupy/node-typescript:node16-13-1-typescript4-4-4'
      registryUrl 'https://139818044667.dkr.ecr.us-east-1.amazonaws.com'
      registryCredentialsId 'ecr:us-east-1:aws-ecr-push-pull-role'
      reuseNode true
    }
  }

  parameters {
    choice(
      choices: 'staging\nproduction',
      description: 'production or staging?',
      name: 'ENVIRONMENT'
    )
  }

  stages {
    stage('Build Storybook') {
      steps {
        sh "make build-storybook"
      }
    }

    stage('Deploy Storybook - Staging') {
      when {
        expression {
          params.ENVIRONMENT == 'staging'
        }
      }

      steps {
        script {
          item ->
            withAWS(
            roleAccount: "${apps.get(params.ENVIRONMENT).roleAccount}",
            role: "${apps.get(params.ENVIRONMENT).role}")
          {
            sh "~/aws-bin/aws s3 cp ./storybook-static/ s3://storybook-ds2.hmg.gupy.io --recursive --cache-control max-age=0,no-cache,no-store,must-revalidate"
          }
        }
      }
    }

    stage('Deploy Storybook - Production') {
      when {
        expression {
          params.ENVIRONMENT == 'production'
        }
      }

      steps {
        script {
          item ->
            withAWS(
            roleAccount: "${apps.get(params.ENVIRONMENT).roleAccount}",
            role: "${apps.get(params.ENVIRONMENT).role}")
          {
              sh "~/aws-bin/aws s3 cp ./storybook-static/ s3://storybook-ds2.gupy.io --recursive --cache-control max-age=0,no-cache,no-store,must-revalidate"
          }
        }
      }
    }
  }
}
