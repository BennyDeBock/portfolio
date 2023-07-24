---
title: "How to contribute to open source as a junior developer - My experience"
author: De Bock Benny
date: July 2nd, 2022
tags: 
  - open source
  - junior
excerpt: Have you ever been in a position where you want to contribute to open source projects, but you don't know where to start? Check out my experiences here!
---
Hello there!

Have you ever been in a position where you want to contribute to open source projects, but you don't know where to start? I sure have, but through my internship at [Broken Hands](https://www.brokenhands.io/), I was able to gain experience in open source, more specifically in the [Vapor](https://github.com/vapor/vapor) ecosystem. As such I want to share these experiences and tips with you.

## Finding an open source project

Finding a project you want to contribute to can be daunting, as hundreds or thousands of developers can be actively contributing to these projects and there are so many of them. My advice for you is to look either for an open source project that you are using in any of your projects. Or alternatively, if you want to gain experience in a certain programming language, search for projects in that language.

On GitHub you can do this by searching any keyword that might interest you (a good one is open source) and filter the results on the programming language you would like to work in. If you don't find the language of your choice in the list, go to the advanced search feature. In there, you can specify the exact language you're looking for. 

Another way to find project to contribute to is by exploring this [GitHub topic](https://github.com/topics/good-first-issue) page with good first issues. The filtering of these issues is not as expansive as the advanced search, but for popular languages, this shouldn't be a problem.

There are also some great sites that can help you in your search such as:
- [goodfirstissue.dev](https://goodfirstissue.dev/) 
- [goodfirstissues.com](https://goodfirstissues.com/) 

## I've found a project, what now?

Now that you have found a project you would like to work on, it might be hard to know where to begin.

### README

A good start would be to read the README of the project. This can contain useful information about the project, as well as how you can contribute or the guidelines to contributing. They can also include other contributors and where you can find the community to ask questions or to chat (e.g. Discord, Slack, etc.).

### Project Boards

Although the chances of these are lower, some projects might have a project board available with beginner issues. These are a great way to get an introduction into the project and to start off your open source career. These can gain you some confidence.

If there are no project boards with beginner issues, you can also go to the issues tab and search by these criteria: `is:open label:"good first issue"`. This will show you issues that aren't resolved yet, and they're a great starting point to get familiarized with the project.

> Note: In the best case scenario, the issue you pick should have instructions on how to recreate the bug, or the specific circumstances it happened under. If this is not the case, you can ask the creator of the issue if they are able to share how to recreate it.

### Create a fork

In most projects, you won't be allowed to create a branch on the main project. Thus, you must create a fork of the project. You can do this by clicking on the fork button in the top right corner of the repository.
![The header of a repository, which includes the fork button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3kzhowtsumaswu55u478.png)

By doing this, you will copy the repository to your own personal GitHub or any other organization that you are the owner of.
![An example of creating a fork](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6saxrhvrkygckl6vvbpk.png)

Once you have forked the repository, you can start working on a fix for the issue you have chosen.

### Testing is important

You can fix an issue, but how did you manage to replicate the issue? To avoid someone else having to replicate the issue, but also to make sure that the behavior that was faulty doesn't come back, you should write tests. Writing these tests will make your code more robust, as you can check for scenarios that pass and scenarios that fail. But you also create a guarantee towards the future that the unexpected issue from earlier cannot come back when it's being iterated upon, as it is an extra check now.

### I have fixed the issue, now what?

You have fixed the issue, great! But this fix is not yet available in the original repository. We do this by creating a pull request. Normally, when creating a pull request, this is done from a branch of the repo, to the main/master branch. However, since we created our own clone of the repository, this is not possible.  

Though it can be hard to see, you have the option to compare across forks of the repository.
![An example of how you can't by default pick forks for creating pull requests](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hzhbh8tkfl3sdfwi6pwj.png)

By choosing this option, you have have to pick the repository that you forked, along with the branch you have worked on to be able to see the differences in code. If there aren't any merge conflicts, then feel free to hit that `Create pull request` button.
![Example of creating a fork](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5so7ex4bilqrhh60ypgw.png)

#### Writing a proper pull request

To create a proper pull request, it is important to shortly describe in the title of the pull request what it tries to solve/add. You can go into more detail in the comment section of the pull request as to which files you have changed, the behavior you have adjusted, as well as which issue it relates to. The latter can be done by typing something similar to `Resolves #<number>` where the `<number>` is the ID of the issue you are referencing.

An example:
![An example of a merged pr](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vz3579zzyo5lb3tvuhvd.png)
 
> Note: It is also possible to create a draft pull request. This means that you can show others that you are working on the problem already, but you are not able to release it yet as working code. You can use this to get feedback beforehand from the main developers or the community.

#### Getting a pull request accepted

Once you have created a pull request successfully, some automated tests might be running. If they all pass, and there are no merge conflicts then you should see something like this:

![No Issues with merging](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4hut3pj4xgmfjx7qijsf.png)

This does not yet mean that your contribution has been accepted. In a lot of cases, the incoming pull requests need to be approved by the core team. They may request changes and you can go into discussions about why that is (or isn't) a good idea. Once you have gained the approvals, then your work is done.
 
## Congratulations!

You have successfully contributed your (possibly) first pull request to an open source project. This may be the first of many more to come. Just remember that you can do more than you think, if you set your mind to it. 

For me personally, the main takeaway I had from working in open source was that I shouldn't be afraid to interact with the community, ask questions and even make mistakes. We all start somewhere. Contributing to open source is a great way to get experience, getting better as a developer, as well as making connections with other developers.
