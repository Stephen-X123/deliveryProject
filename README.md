# Delivery Project Overview

哈喽，大家好，来这就没错了

# Directory Hierarchy
- root
	- DesignDocuments
	- DeliveryProject-Frontend

Note: DeliveryProject-Backend lives at '[ZiyiLiao/DeliveryProject-Backend](https://github.com/ZiyiLiao/DeliveryProject-Backend)'

# How to start working on this project
1. open DeliveryProject-Frontend/front-end-react-app
2. npm install 
3. run the command 'npm start' in your terminal

# How to contribute
1. Fork this repository
2. Clone your forked repository to local
3. Add upstream
    * Contribute to the repository if you open in Github desktop (then the upstream is already added)
    * `git remote add upstream <this_repo_url>`
    * Check git `git remote -v`
        - Should have 
        ```
        upstream        https://github.com/Stephen-X123/deliveryProject.git (fetch)
        upstream        https://github.com/Stephen-X123/deliveryProject.git (push)
        ```
4. \[Optional\] Merge upstream to your main branch
    1. `git fetch upstream`
    2. `git checkout upstream/main`
    3. `git pull`
    4. `git checkout main`
    5. `git merge`
    6. `git push origin`
5. Checkout a new branch based on the latest code
    1. `git checkout -b OWLY-<your_name>-<function>-<version>`
    2. Made some changes
    3. `git commit -am “<your_branch_name>: messages”`
    4. `git push origin`
6. Create pull request
    1. We should have someone write some comments on the code
