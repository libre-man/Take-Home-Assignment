# CodeGrade Take-Home assignment

Welcome to the take-home assignment of CodeGrade. The goal of this assignment is
to create a small app that uses the API of Codegrade. The goal of this app is to
allow users to login using their CodeGrade credentials, and show them a list of
all their courses.

To get started let's first install all the needed dependencies. You can do this
by running `npm ci` in the main folder the take-home assignment. Now you should
be able to run the project skeleton, you can do this by running `npm run
serve`. If you navigate to [http://localhost:8080]([http://localhost:8080]) you
should be able to see welcome page that allows you to login.

By default all requests done to `/api` from the javascript/typescript bundle are
proxied through to [app.codegra.de](http://app.codegra.de). As you probably
don't have any accounts there let's create some. To do this we are going to use
the ["Course Enroll Link"](https://help.codegrade.com/user-reference/courses-general/members#course-enroll-links)
link feature. You should have been provided with two course enroll links, in
which you can create as many users as you'd like.

At this point you should have a working skeleton and multiple CodeGrade
users. We can finally start writing some code! Again: the goal of this app is to
create a simple version of the CodeGrade home page, using typescript and
Vue. The skeleton contains some stub methods and TODO comments, below are the
requirements and stretch goals.

## Requirements
- [ ] After logging in, I can see all my courses.
- [ ] Each course is rendered by its own component.
- [ ] The data of a course is contained in a class.
- [ ] For each course the amount of assignments is visible.
- [ ] After logging in I don't need to login again when I reload.

## Stretch Goals
Here are some ideas to extend beyond the MVP. Definitely don't implement all of
these!

- [ ] Handle errors, all errors in CodeGrade have the same format, see the
      [documentation](https://docs.codegra.de/api) for information about this
      format.
- [ ] Improve styling, because "het oog wil ook wat".
- [ ] Also show the assignments for each course.
- [ ] Make it possible to search/filter courses.
- [ ] Make it possible to logout again, maybe also refactor the way the access
      token is stored?
- [ ] Write some documentation?



## Reading material
The skeleton uses some dependencies that CodeGrade also uses internally, here
are some of them, ordered by importance + obscurity:

- [Purify](https://gigobyte.github.io/purify/): Allows us to use ADTs like
  `Maybe` in typescript.
- [vue-tsx-support](https://github.com/wonderful-panda/vue-tsx-support): Allows
  static typing for Vue components, including their props.
- [vue-strict-prop](https://github.com/wonderful-panda/vue-strict-prop): Allows
  for better + easier typing of props in Vue.
- [axios](https://github.com/axios/axios): Libary used to do HTTP requests, you
  are welcome to switch it out for `fetch`.
- [Vue](https://vuejs.org/): The main framework used in the CodeGrade frontend.
