---
title: "Git"
description: "This is the meta description for this page"
---
import { Message } from '@theme-ui/components';

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  It is assumed that you are issuing all the <strong>Git</strong> commands from the <strong>root</strong> directory of your project.
</Message>

Below are shown the most common git commands. To see these commands in use in real case scenarios, move down to the section [Ordinary operations](#ordinary-operations). 

#### git init

Create a new **git** repository in the curren directory.

#### git status

Checks which files have changed and are ready to be added to the staging area.

#### git add

Adds the selected changed files or all changed files (`git add .`) to the staging area.

#### git commit

Makes a snapshot of the of the current state of the directory as per files added in the staging area.

#### git push

Pushes the new commits to the remote repository.

#### git pull

Pulls the remote repository commits into the local repository. It's a way to update the local repository.


### Ordinary operations

#### Creating a remote repository in GitHub:

* [Create a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo) on *GitHub*
* Then move to the root directory of your local project and download this `.gitignore` file:
  * For [Gatsby](https://drive.google.com/file/d/1Gjd28wj7tGGPjzh0JFAy3LNhOZovSG5r/view?usp=sharing)
  * For [React](https://drive.google.com/file/d/17PUFFPg2N5r4xaguBbtooMIu7LFI35JE/view?usp=sharing)


#### Creating a new local repository

```
$ git init
$ git add .
$ git commit -m 'first commit'
$ git remote add origin https://github.com/mygitaccount/myrepository.git
$ git push -u origin master
```

#### Updating remote repository
```
$ git add . # or git add -A
$ git commit -m 'changed some stuff'
$ git push
```

#### Updating local repository from remote repository
```
$ git pull
```

If there are several machines working with local respositories from a common remote repositories, before pushing to the remote repository from one of the local repositories, we must pull the information from the remote repository, as it may have changed due to another machine pushing changes to it.

### Other operations

#### Removing file from git commit

`$ git reset HEAD <file>`

#### Removing file from staging area

`$ git rm --cached <file>`

#### Cloning a remote repository

`git clone https://github.com/mygitaccount/myrepository.git`

#### See list of files ready to be pushed

`$ git diff --stat --cached origin/master`

#### See differences between local repository and remote repository

`$ git diff master origin/master`


### Useful commands

- Don't update a file: `git checkout file.txt`
- Setting your Git username for every repository in your computer:
`$ git config --global user.name "John Doe"`
- Set your commit email address in Git:
`git config --global user.email "email@example.com"` 


## Cloning vs Pulling

**Cloning** will download the whole GitHub repository to your local machine. You can now either start a new project with that repository or you can collaborate with that repository:

1. If you want to start a new project, you must delete the `.git` directory (to remove the original remote push repository). You then can `git init` and add a different new remote repository.
2. If you want to collaborate, you just keep the `.git` directory and push normally.

**Pulling** will download only the updated information of the GitHub repository in relation to your local repository. You will **push** to the original remote repository afterward. 

## Branches

Branching means you diverge from the main line of development and continue to do work **without messing** with that main line.

#### Creating a new branch

`$ git branch testing`

#### Listing branches

`$ git branch -a`

#### Show where the branch pointers (`HEAD`) are pointing

`$ git log --oneline --decorate`

#### Switching Branches

`$ git checkout testing`

This moves `HEAD` to the `testing` branch. All new commits from this point will only affect the `testing` branch. If you switch back to `master` and commit from there, the commit will only affect `master`. You have diverted your project in two separated branches.'

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  For the new branch to be fully separated from the master branch, you must <strong>commit</strong> the changes in the new branch.
</Message>

#### Merging branches

Move to the master branch and then merge with testing branch:

`$ git checkout master`

`$ git merge testing`

You can delete now testing branch:

`$ git branch -d testing`

#### Deleting branches

- Local: `$ git branch -d testing`
- Remote: `$ git push origin --delete testing`


# SSH to GitHub

With SSH keys, you can connect to GitHub without supplying your username or password at each visit. You'll need to perfom the steps below for each computer you intend to use to connect to your GitHub repository.

All intructions below have to be performed only once. After doing it for the first time, your terminal can use SSH in any local repository.

#### Generating new SSH, adding it to SSH agent and setting SSH URL to repo

1. Checking for existing SSH keys:

`ls -al ~/.ssh`

If there is no results, generate a new SSH key.

2. Generate the SSH key, substituting in your GitHub email address:

`$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

3. Start the ssh-agent in the background:

`eval "$(ssh-agent -s)"`

4. Add key to ssh-agent:

`$ ssh-add ~/.ssh/id_rsa`

5. Set a SSH url for the existing repo (**Note**: This step is necessary only for SSH servers under a secure connection, https, like GitHub).

`$ git remote set-url origin git@github.com:mygitaccount/myrepository.git`

#### Adding a new SSH key to your GitHub account

1. Open your `~/.ssh/id_rsa.pub` file and copy the content
2. Go to GitHub ➡️ Settings ➡️ SSH and GPG keys ➡️ New SSH key
3. Paste the SSH key into the 'Key' field. Add a descriptive label for the 'Title' field.

## Two-factor authentication

If you have enabled two-factor authentication in your GitHub account, you must create a Security Key in order to operate from the GitHub repository when using **https**. The steps belows only need to be performed once. The security key will work in any computer you use to connect to your GitHub account, as long as you know what is the security key.

1. Go to GitHub ➡️ Settings ➡️ Developer settings ➡ Personal access tokens ➡ Generate new token
2. In the new page that loads, check the **repo** scope checkbox and type a meaningful note in the **note** text box.
3. Click on *'Generate token'*
4. Copy the new generated personal access token in a secure location because you won't be able to see it again.
5. When you clone a repository, you will be prompted to type the username. Type the personal access token.
6. When prompted to type the password, leave it blank and press `Enter`
7. From that point on, you will operate without adding any credential. 

