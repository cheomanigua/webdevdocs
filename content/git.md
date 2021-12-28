---
title: 'Git'
description: 'This is the meta description for this page'
---

import { Message } from '@theme-ui/components';

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  It is assumed that you are issuing all the <strong>Git</strong> commands from the <strong>root</strong> directory of your project.
</Message>

Below are shown the most common git commands. To see these commands in use in real case scenarios, move down to the section [Ordinary operations](#ordinary-operations). 

- **git init**: Create a new **git** repository in the curren directory.
- **git status**: Checks which files have changed in the working directory and are ready to be added to the staging area.
- **git checkout [file]**: Remove last edits on the file in the working directory so the file does not appear when running `git status`
- **git add [file]**: Adds the selected changed files or all changed files (`git add .`) from the working directory to the staging area.
- **git reset HEAD [file]**: Removes file from the staging area.
- **git commit**: Add files to the local respository by making a snapshot of the of the current state of the directory as per files added in the staging area.
- **git reset --soft HEAD^**: Removes file from the local repository and puts it again in the staging area.
- **git push**: Pushes the new commits in the local repository to the remote repository.
- **git pull**: Pulls the remote repository commits into the local repository. It's a way to update the local repository.



### Ordinary operations

#### Creating a remote repository in GitHub:

* [Create a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo) on *GitHub*
* Then move to the root directory of your local project and download this `.gitignore` file:
  * For [Gatsby](https://drive.google.com/file/d/1Gjd28wj7tGGPjzh0JFAy3LNhOZovSG5r/view?usp=sharing)
  * For [React](https://drive.google.com/file/d/17PUFFPg2N5r4xaguBbtooMIu7LFI35JE/view?usp=sharing)


#### Creating a new local repository

```
git init
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin https://github.com/mygitaccount/myrepository.git
git push -u origin master
```

#### Updating remote repository
```
git add . # or git add -A
git commit -m 'changed some stuff'
git push
```

#### Updating local repository from remote repository
```
$ git pull
```

#### Get information about the remote repository

```
git remote -v
git remote show origin
git config --get remote.origin.url
```

If there are several machines working with local respositories from a common remote repositories, before pushing to the remote repository from one of the local repositories, we must pull the information from the remote repository, as it may have changed due to another machine pushing changes to it.


#### Push an existing repository from the command line
```
git remote add origin https://github.com/mygitaccount/myrepository.git
git branch -M main
git push -u origin main
```

### Other operations

- Cloning a remote repository: `git clone https://github.com/mygitaccount/myrepository.git`
- See what you haven't git added yet: `git diff [filename]`
- See what you have git added already: `git diff --cached [filename]`
- See list of files commited and ready to be pushed: `git diff --cached --stat origin/master`
- See differences between working directory and local repository: `git diff HEAD`
- See differences between local repository and remote repository: `git diff master origin/master`
- See commits historical: `git log`
- See modified files in each commit: `git log --stat`
- See changes in a commit: `git show [commit]`


### Useful commands

- Edit last commit (edit or add new file to last commit): `git commit --amend`
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

#### See merged branches

`git branch --merged`

#### Deleting branches

- Local: `$ git branch -d testing`
- Remote: `$ git push origin --delete testing`

### Branches Workflow

```
git branch newbranch
git checkout newbranch
[edit existing file/s or create new file/s]
[git add and git commit]
git push -u origin newbranch
[edit, add, commit and push to origin newbranch as needed]
git checkout master
git pull origin master
git merge newbranch
git push origin master
```


# SSH to GitHub

With SSH keys, you can connect to GitHub without supplying your username or password at each visit. You'll need to perfom the steps below for each computer you intend to use to connect to your GitHub repository.

#### Generating new SSH, adding it to SSH agent and setting SSH URL to repo

1. Checking for existing SSH keys:

`ls -al ~/.ssh`

If there is no results, generate a new SSH key.

2. Generate the SSH key, substituting in your GitHub email address:

`$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

3. (Optional) Start the ssh-agent in the background:

`eval "$(ssh-agent -s)"`

4. (Optional) Add key to ssh-agent:

`$ ssh-add ~/.ssh/id_rsa`

**Note**: Steps 3 and 4 are optional, because the **ssh-agent** is used to store passphrase if you choose to create a passphrase while creating the SSH key. This way you only need to enter the passphrase once.

#### Adding a new SSH key to your GitHub account

1. Open your `~/.ssh/id_rsa.pub` file and copy the content
2. Go to GitHub ➡️ Settings ➡️ SSH and GPG keys ➡️ New SSH key
3. Paste the SSH key into the 'Key' field. Add a descriptive label for the 'Title' field.

### Switching remote URLs from HTTPS to SSH/SSH to HTTPS

HTTPS TO SSH
```
$ git remote set-url origin git@github.com:mygitaccount/myrepository.git
```
SSH TO HTTPS
```
$ git remote set-url origin https://git@github.com:mygitaccount/myrepository.git
```
Verify that the remote URL has changed: `$ git remote -v`

More info at [GitHub](https://help.github.com/en/github/using-git/changing-a-remotes-url).

## Two-factor authentication

If you have enabled two-factor authentication in your GitHub account, you must create a Security Key in order to operate from the GitHub repository when using **https**. The steps belows only need to be performed once. The security key will work in any computer you use to connect to your GitHub account, as long as you know what is the security key.

1. Go to GitHub ➡️ Settings ➡️ Developer settings ➡ Personal access tokens ➡ Generate new token
2. In the new page that loads, check the **repo** scope checkbox and type a meaningful note in the **note** text box.
3. Click on *'Generate token'*
4. Copy the new generated personal access token in a secure location because you won't be able to see it again.
5. When you clone a repository, you will be prompted to type the username. Type the personal access token.
6. When prompted to type the password, leave it blank and press `Enter`
7. From that point on, you will operate without adding any credential. 


# Bare Git repository

Bare Git repositories are great to keep all your *dotfiles* aka *config files* in a repository. This way, if you reinstall the operating system again, you can clone the bare repository and have all the config files ready.

```
git init --bare $HOME/.cfg
echo "alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'" >> $HOME/.bashrc
config config --local status.showUntrackedFiles no
```

- The first line creates a folder `~/.cfg` which is a Git bare repository that will track our files.
- Then we create an alias config which we will use instead of the regular git when we want to interact with our configuration repository.
- We set a flag - local to the repository - to hide files we are not explicitly tracking yet. This is so that when you type config status and other commands later, files you are not interested in tracking will not show up as untracked.

### Usage

For this bare repository, instead of using the command `git`, we use the command `config`.
```
config add .bashrc
config commit -m 'created .bashrc'
config remote add origin https://github.com/mygitaccount/myrepository.git
config push -u origin master
```

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  DO NOT use <strong>config add .</strong> or <strong>config add -A</strong>. Always specify the files/directories you want to add. Otherwise you will add the whole directories and files configured with the `--work-tree` parameter.
</Message>
