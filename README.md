<div style="display:flex; align-items: center">
  <img src="src/Assets/images/Redberry-Logo.png" alt="drawing" width="100" style="margin-right: 20px" />
  <h1 style="position:relative; top: -6px" >Covid Questionaire</h1>
</div>

---

Covid Questionaire collects information about the covid situation and work preferences from users.

#

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Git commit rules](#git-commit-rules)
    - [Commit Structure](#commit-structure)
    - [Commit types](#commit-types)
- [Resources](#resources)

## Prerequisites

- <img src="readme/assets/NodeJs.png" width="40" style="position: relative; top: 8px" /> _Node JS @12.X and up_
- <img src="readme/assets/Npm.png" width="40" style="position: relative; top: 4px" /> _npm @6 and up_

#

## Tech Stack

- <img src="readme/assets/React.png" height="25" style="position: relative; top: 4px" /> [React @18.0.0](https://reactjs.org) - front-end framework
- <img src='readme/assets/ReactHookForm.png'  height="25" style="position: relative; top: 4px" /> [React Hook Form @7.30.0](https://react-hook-form.com/) - flexible and extensible forms with easy-to-use validation.
- <img src="readme/assets/TailwindLogo.png" height="18" style="position: relative; top: 4px" /> [tailwindcss @3.0.24](https://tailwindcss.com/) - css framework

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/covid19-Var-Saba.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

or

```sh
yarn install
```

3\. after that you can run Covid Questionaire application from terminal:

```sh
npm start
```

Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

You can learn more in the [Create React App documentation.](https://create-react-app.dev/docs/getting-started/)
To learn React, check out the [React documentation.](https://reactjs.org/)

#

## Project Structure

```bash
├─── readme   # readme assets
├─── src      # project source codes
│    ├── Assets      # project images and fonts
│    ├── Components  # project components
│    │   ├── CovidInputs           # input components of covid page
│    │   ├── CovidPolicyInputs     # input components of covid policy page
│    │   ├── IdentificationInputs  # input components of identification page
│    │   ├── Reusables             # reusable components
│    │   ├── svgs                  # svg assets
│    │   └── VaccinatedInputs      # input components of vaccinated page
│    │       └── Suggestions       # suggestion components
│    ├── context      # context api
│    ├── Layouts      # reusable layout component
│    ├── Pages        # project pages
│    ├── UI           # wrapper component
- .eslintrc.json      # eslint config file
- .gitignore          # gitignore config file
- .prettierrc.js      # prettier config file
- jsconfig.json       # config file for absolute path
- package.json        # dependency manager configurations
- tailwind.config.js  # tailwindcss config file

```

#

## Git commit rules

#### Commit Structure

```sh
1 type(scope)!: commit short description
2
3 commit long description
```

The first line is the head of the commit which contains a brief description of what was done

```sh
1 chore: update Redberry logo animation
```

Commit may also have a body that contains a detailed description. By omitting one line from the head of the commit, the body of the commit is written. For example:

```sh
3 example: I am the body of this commit, treat me well please...
```

All commits have a type: feat, fix, refactor, etc.

Absolutely every commit contains a type and a brief description.

```sh
1 type: short description
```

There is another way to make the commit more readable and accurate.
One such way is a scoop. Scoop is written in parentheses after the type before we write a colon and a brief description. Structurally it looks like this.

```sh
1 type(scope): short description
```

In Scope you will see "title" which specifies what we are talking about. For example:

```sh
1 feat(page): build covid page
```

#

#### Commit types

| type     | description                                                              |
| -------- | ------------------------------------------------------------------------ |
| fix      | fix any bug                                                              |
| feat     | new functionality added                                                  |
| refactor | the code has been improved without changing the functionality            |
| chore    | routine, less noticeable changes                                         |
| wip      | have not completed the specific functionality and it is not finished yet |

#

## Resources

- [Application Design [Figma]](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3)
- [Application Design Prototype](https://www.figma.com/proto/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3&starting-point-node-id=1%3A2&scaling=contain)
- [Font [BPG Arial]](https://fonts.ge/ka/font/13/BPG-Arial)
