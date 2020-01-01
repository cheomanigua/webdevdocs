---
title: "Git"
description: "This is the meta description for this page"
---
import { Message } from '@theme-ui/components';

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  It is assumed that you are issuing all the <strong>Git</strong> commands from the <strong>root</strong> directory of your project.
</Message>

* First you have to [create a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo) on *GitHub*
* Then move to the root directory of your project and download the `.gitignore` file:
  * For [Gatsby](https://drive.google.com/file/d/1Gjd28wj7tGGPjzh0JFAy3LNhOZovSG5r/view?usp=sharing)
  * For [React](https://drive.google.com/file/d/17PUFFPg2N5r4xaguBbtooMIu7LFI35JE/view?usp=sharing)
* Issue these commands:

```
$ git init
$ git add .
$ git commit -m 'first commit'
$ git remote add origin https://github.com/mygitaccount/myrepository.git
$ git push -u origin master
```

### Updating remote repository
```
$ git add . # or git add -A
$ git commit -m 'changed some stuff'
$ git push
```

### Updating local repository from remote repository
```
$ git pull
```

### Removing file from git commit

`$ git reset HEAD <file>`

### Removing file from staging area

`$ git rm --cached <file>`

### Updating local repository
```
$ git pull
```

### git pull
If there are several machines working with local respositories from a common remote repositories, before pushing to the remote repository from one of the local repositories, we must pull the information from the remote repository, as it may have changed due to another machine pushing changes to it.


### Useful commands

- See changes: `$ git status`
- Keep your local version updated: `$ git pull`
- Don't update a file: `git checkout file.txt`
- Clone a repository:
`git clone https://github.com/mygitaccount/myrepository.git`
- Setting your Git username for every repository in your computer:
`$ git config --global user.name "John Doe"`
- Set your commit email address in Git:
`git config --global user.email "email@example.com"` 

## GitHub as backup

If you messed up your local repository beyond repair, don't worry. You can restore the project from the repository at GitHub. Follow these steps:

1. Completely delete the directory of your project in your local machine:

  `$ sudo rm -r project`

2. Create a new empty directory where to accommodate the new backup project from GitHub:

  `$ mkdir project`

3. Get into the new directory:

  `$ cd project`

4. Initialize Git:

  `$ git init`

5. Add the repository from GitHub:

  `$ git remote add origin https://github.com/mygitaccount/myrepository.git`

6. Incorporate the last changes of the current branch from your GitHub repository. As there is no repository in our local machine, it will download the whole repository from GitHub:

  `$ git pull origin master`

7. Push the current branch and set the remote as upstream

 `$ git push --set-upstream origin master`


## Cloning vs Pulling

**Cloning** will make an exact copy of the GitHub repository to your local machine so you can start a new project, but you will **never push** again to the original repository, but to a new repository.

**Pulling** will download only the updated information of the GitHub repository to your current project. You will **push** to the original repository afterward. In addition, you can use the **pull** command to restore a messed up local repository, as explained at the section [GitHub as backup](#github-as-backup).

## SSH to GitHub

With SSH keys, you can connect to GitHub without supplying your username or password at each visit.

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

## Branches

Branching means you diverge from the main line of development and continue to do work **without messing** with that main line.

### Creating a new branch

`$ git branch testing`

### Show where the branch pointers (`HEAD`) are pointing

`$ git log --oneline --decorate`

### Switching Branches

`$ git checkout testing`

This moves `HEAD` to the `testing` branch. All new commits from this point will only affect the `testing` branch. If you switch back to `master` and commit from there, the commit will only affect `master`. You have diverted your project in two separated branches.

### Listing branches

`$ git branch -a`

### Deleting branches

- Local: `$ git branch -d testing`
- Remote: `$ git push origin --delete testing`

### See differences between local repository and remote repository

`$ git diff master origin/master`

If we don't know the branches to look up, issue:

`$ git branch -a`

### See list of files ready to be pushed

`$ git diff --stat --cached origin/master`

