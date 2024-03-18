# Coding Assessment using terraform
## Introduction
This project is fully dedicated for coding assessment that will assess the capabilities of a candidate in terms of coding, IAC, Security by deploying the infrastructure using terraform and setting up kubernetes cluster

## - How to Start
* Clone the github repo https://github.com/ajandali/coding-assessment-demo.git to your local machine then perform the following to deploy your first infrastrcuture using terraform
- After successfully cloning the repo, run the following command `terraform init` to check for the validity of your terraform code
- Once you have ran `terraform init` successfully with no errors, run `terraform apply` to deploy the infrastructure.

**you have to wait for 20min at least for the infrastructure to finish deploying**
- run `kubectl get svc` to test your connection to the eks cluster 

**You are now all set to start deploying applications to your eks cluster!**
