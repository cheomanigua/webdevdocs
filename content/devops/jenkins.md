> The DevOps Pipeline

## Introduction

In this hands-on lab, you will create a DevOps pipeline all the way from making a code change to deploying that change to a production environment. One of the great benefits of DevOps comes from its focus on automated pipelines, and here you will have the opportunity to try one out so you can see it in action from a hands-on perspective. After completing this hands-on lab, you should have a basic idea of what it is like to use a DevOps pipeline to change the code and get those changes into production.

## Solution

You’ll need a GitHub account to complete this lab. Get the sample application source code from GitHub. Once there, click the **Fork** button. If it does not create the fork automatically, select your account to make sure the files are forked to your repository. This way, we have our own version of the files we can make changes to.

Then, click the **branches**, where we’ll see there are four branches listed.

### Execute the Initial Deployment

#### Set Up a Continuous Integration Server

  1.  Copy the public IP address of the CI server provided on the bottom of this tutorial, and paste it into a new browser tab with `:8080` appended to the end.
  2.  We’ll land at a Jenkins installation. Click the listed **devops-essentials-sample**.
  3.  Click **Configure** in the left-hand menu.
  4.  Click the **Branch Sources** tab.
  5.  Change the *Project Repository* to the URL of the fork we created.
  6.  Click **Save**. Back on the main page, we will see Jenkins is scanning and building the branches from the fork.

#### Create a Pull Request

  1.  On the bottom of this tutorial, copy the public IP address of the **production webserver**, and paste it into a new tab. We get a page saying, *DevOps is great*.
  2.  Back in GitHub, next to the `new-feature` branch, click **New pull request**.
  3.  Set the *base fork* dropdown to your personal fork.
  4.  Set the *base* dropdown to the **master** branch.
  5.  Make sure the compare dropdown is set to **new-feature**.
  6.  If you scroll down, you will see the changes are displayed in a code comparison. Once ready, select **Create pull request**.
  7.  Select **Merge pull request**, and then **Confirm merge**.
  8.  Back in the Jenkins server, select **devops-esentials-sample** and then **master**.
  9.  On the new page, select **build now** from the sidebar. A new build will begin.
  10.  When it gets to the *DeployToProd* stage, it will pause and wait for our input.
  11.  Copy the public IP of the *staging webserver* on the bottom of this tutorial, and paste it into a new browser tab. We should see a page that says *DevOps is awesome*, which means the code pull is working correctly.
  12.  Back in the Jenkins window, hover over the *DeployToProd* section and select **Proceed**.
  13.  Refresh our tab for the *production webserver* IP. We should see the updated text.

#### Run the “Broken” Deployment

  1.  Back on GitHub, in the **branches** tab, click **New pull request** for the *broken-feature* branch.
  2.  Set the *base fork* dropdown to your personal fork.
  3.  Set the *base* dropdown to the **master** branch.
  4.  Set the *compare** dropdown to **broken-feature**. This time, when we look at the bottom of the page, we will see that we have misspelled something.
  5.  Click **Create pull request**, then **Merge pull request**, and finally **Confirm merge**.
  6.  Back in the Jenkins tab, click **Build Now**.
  7.  Once it gets to the *DeployToProd* stage, hover over that section and select **Proceed**.
  8.  Refresh the tab with the *production webserver* IP address. We should see a misspelled word.

#### Roll Back the Broken Deployment

  1. Back on the Jenkins page, click on build **#2**.
  2. Click **Replay** and then **Run**.
  3. While that is building, check the *staging webserver* IP tab. It should revert back to the correct text.
  4. On the Jenkins page, hover over the *DeployToProd* section, and select **Proceed**.
  5. Once updated, our *production webserver* IP tab will show the correct text, meaning we have performed a successful rollback.

## Credentials

Use these credentials to follow along the tutorial

  | CI Server | Production Webserver | Staging Webserver |
  | :---: | :---: | :---: |
  | [3.87.83.22](http://3.87.83.22) | [34.224.31.157](http://34.224.31.157) | [54.147.220.55](http://54.147.220.55) |
  | cloud_user | cloud_user | cloud_user |
  | NNjnuLHDKi | NNjnuLHDKi | NNjnuLHDKi |
  | 10.0.1.97 | 10.0.1.86 | 10.0.1.141 |
