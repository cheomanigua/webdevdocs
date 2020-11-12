---
title: 'GitHub'
description: 'GitHub reference and documentation'
---

# GitHub Pages

You can create static sites with **GitHub Pages**:

1. Create a repository and name it with the extension `github.io`, for instance `mysite.github.io`
2. Push the content of your local repository
3. Go to **Settings** -\> **GitHub Pages** -\> Select **master** Branch -> Click **Save** button
4. If you don't want to use HTTPS, untick **Enforce HTTPS**
5. You can visit your site checking the link on '*Your site is ready to be published at*'

More info at [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site)

### Updating the website

1. Edit the content of your local repo
2. Push the changes
3. GitHub will automaticaly integrate the update and deploy the new site

### Adding a custom domain

**Note**: It is PARAMOUNT to follow the exact order of these steps.

1. Select your repository
2. Go to **Settings** -\> **Github Pages** -\> **Custom Domain**
3. Enter the name of your naked domain in the text box and click **Save**
4. A `CNAME` file will be created in your GitHub repository. Don't forget **pull** that file into your local respository.
5. Add the following **CNAME** record in your domain register: `www` pointing to `mysite.github.io`
6. Add the following **A** records as `@` in your domain register :
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
7. For **Enforce HTTPS** to work, you have to wait for a while:
> Not yet available for your site because the certificate has not finished being issued.
> Please allow 24 hours for this process to complete. (mydomain.com) 
8. Refresh the page after a couple of minutes and tick **Enforce HTTPS**


#### Drawback

The SSL certificate will only work for the naked domain. **http://www.mydomain.com** will trigger a nasty warning in the browser. To fix this there are two options:

1. (Recommended) Create a forwarding rule in you domain host that redirect requests to **www** to your naked domain. In Google Domains you can achieve this by using *Synthetic Records*:
  - Delete the CNAME record for **www**
  - Go to section **Synthetic records**
  - Subdomain forward - Subdomain: www -\> Destination URL: mydomain.com
  - Temporary redirect (302)
  - Forward path
  - Enable SSL
  - Google Domains will complain this message, but just wait a couple of minutes and it will ok:
  > This synthetic record has an error and will not function correctly:
  > The SSL Certificate for this domain hasn't been created yet. This process may take up to 24 hours to complete.

2. (Less recommended) Change the name of your custom domain in GitHub pages from **mydomain.com** to **www.mydomain.com**, and then change it back to **mydomain.com**
  - This will generate a new SSL certificate for **www.mydomain.com**. So, we have the original certificate for **mydomain.com** and the the new certificate for **www.mydomain.com**.
  - However, the only certificate that will be auto renewed will be the one for the custom domain active in GitHub pages. The other one will expire in 3 months. 
