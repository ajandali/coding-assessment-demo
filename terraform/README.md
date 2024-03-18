# Terraform
## Getting started

### Terraform installation 
- To install terraform on your mac, follow the below steps:
  * run the following command to install terraform on your mac using brew `brew install terraform`
  * Confirm the installation by running `terraform version`


    ### Terraform config files
    - To deploy an infrastructure seamlesly with just one command, you can do that using terraform code by following the best recommendations below
      * Separate the aws resources deployment into separate .tf files eg. nat.tf vpc.tf
      * The file names are self explanatory and refer to the service that the code is responsible for creating
     
    ### Terraform code
    - Writing your code
      * you can start writing your own custom infrastructure by pulling terraform templates from this website [https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources]
