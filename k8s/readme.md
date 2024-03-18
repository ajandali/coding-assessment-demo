# Kubernetes Deployment
## Deploy your first node.js App
- Follow the following instructions to deploy your first app to kubernetes eks cluster
  * create the necessary files (storage.yaml, secrets.yaml, deployment.yaml)
  * run the following command on each of the files to deploy them `kubectl apply -f <file.yaml>`
  * to deploy the encrypted secrets you have to decrypt them while applying them to the kubernetes cluster by running this command `sops -d mysql-secret.enc.yaml| kubectl apply -f -`
  * [Optional] run `"kubectl get secrets" or "kubectl get pvc" or "kubectl get pods"` to check if the previous step was successful
 
## Secure your secrets 
- Encrypt your mysql secrets using sops and amazon kms using the following steps:
  * install sops on your mac by running this command on your terminal `brew install sops`
  * configure the .sops.yaml rules and place it in the home directory of your repo
  * Create the kms key and give the permissions to encrypt/decrypt to the desired iam user/role
  * place the kms key arn in the .sops.yaml config file
  * run the following command to encrypt the secrets `sops -e secrets.yaml > secrets.enc.yaml`
  * delete the unencrypted secrets file from the repo
 
    **You can automate this encryption process in the pipeline**
