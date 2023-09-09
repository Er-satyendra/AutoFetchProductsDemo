![NPM](https://img.shields.io/npm/v/npm) ![](https://img.shields.io/badge/Eslint-^8.26.0-darkgreen) ![](https://img.shields.io/badge/React-^18.2.0-lightblue) ![](https://img.shields.io/badge/Prettier-^2.7.1-yellow) ![](https://img.shields.io/badge/Version-0.1.1-darkred) ![](https://img.shields.io/badge/node-v14.19.3-green) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

---

# products

products Project.

---

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install `products`.

```bash
$ yarn
$ yarn start
```

---

## Branches Guide

1. `main/master` : This will be an production deployed branch.

2. `develop` : This will be an _Work In Progress_ branch and **updated** branch.

3. `feature/{feature-name-branch}`: This will be an working branch of any developer who is developing an _feature_

4. `bugfix/{bug-fix-name}`: This branch should consist of fixes of any **upcoming/pending** bugs.

---

# Workflows : Guide

Like as maintaing code is necessary. The is also need of maintaining our GIT & it's branches. Therefore, we require an workflow guide to maintaing this as follows:

- Take an pull from `develop` branch

```bash
$ git fetch origin develop
$ git checkout develop
$ git pull origin develop
$ npm i
```

- **How To Create Branch?** : Let's assume you wanted to work on adding an feature to add an new page to routes named as : **`add-new-page`**. Then your branch's name would be **`feature/add-new-page`**. Thus you will follows:

```bash
/// DO Above Step First Everytime
$ git checkout develop // Run This only when you are not on develop branch
$ git pull origin develop // Always sync with remote
$ git checkout -b feature/add-new-page
```

-> Cheers you have now your own _feature branch_. !!!

- **What to do after adding feature?** : Now when you have done your work. It's time to add & commit & push changes. Thus you will follow:

```bash
$ git add .
$ git commit -m "satyendra added new page"
/// After this Pre-Commit Hook will be triggered and will verify your code.
/// Once Your commit is made up
$ git push origin feature/add-new-page // your branch name
```

So now finally your branch is on remote origin.

- **What's Next** : Now the Last and Remaining Tasks left is raising PR (Pull Request).

---

## Creating PR (Pull Requests)

1. Go To Your branch on Github Web App.

2. You will see an **contribute** button on branch.

3. Click on button and at bottom you will see an "**\*open pull request**" button. Click on it.

4. You will be redirected to an new page. Basically that's your PR page.

5. Now when you have open the page you will see `base:master` dropdown button. Click on it and select `develop` branch (as we need to merge it to develop branch).

6. Now Leave some comments of your work in the text box given below.

7. And Click on **Create pull request**.

And that's it. You have finally create an PR. Congratulations!!.

#### Maintained By : @satyendraSinghChouhan
