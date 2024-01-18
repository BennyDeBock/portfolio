---
title: "Software Versioning: A brief introduction"
author: De Bock Benny
date: January 18th, 2024
tags: 
  - junior
  - versioning
excerpt: 
Have you ever been in a position where you want to contribute to open source projects, but you don't know where to start? Check out my experiences here!
---
Hello there!

As part of my current job, I've had to work out/adopt a versioning system. "Why?" you may inquire. A fantastic question, and to answer it, I'll provide a brief introduction to versioning and its benefits.

We've probably all come in contact with versioning at some point. Be it libraries and frameworks you've used, products you've bought or even the games you've played. Every time something gets updated, a new version is created. However, the key question is:

## What is versioning?

If we take a look at Techopedia, Software Versioning is the process of numbering various releases of a software for internal usage and release marking. Simply put, it is a method of tracking and managing software changes. Each version reflects a unique state of the program at a certain moment in its release cycle.

## How can we recognise when versioning is used?

When software is coupled with versioning practices, they are usually combined with a version number. This number usually consists of numerical and/or alphanumeric components that convey information about the program's evolution as well as its compatibility with previous or future releases of the software.

Some of the most common versioning schemes are listed below:
1. Sematic Versioning (SemVer): The most popular method of versioning you'll find online. SemVer uses the `major.minor.patch` syntax, with `major` referring to software-breaking changes, `minor` referring to backward-compatible additions, and `patch` referring to backward-compatible bug fixes.

2. Date-based Versioning: Another typical method of versioning, the version number is based on the release date. Typically seen in the format of `YYYY.MM.DD` or `YYYY-MM-DD`. It provides a clear chronological order of releases, but it does not specify the extent or nature of the modifications.

3. Build Number: Where previously mentioned schemes used a sequence of numbers, some software employs a build number. This is a unique identification assigned to each build of the software. Build numbers can be sequential or include information such as timestamps or revision numbers, although this is not a requirement.

## Why should I use versioning?

Now that we've covered some of the most prevalent versioning techniques, why would we employ them? There are really several reasons why you should utilize versioning.

1. Tracking changes: Depending on the scheme you use, you may easily observe what has changed between software releases. This aids in the identification of new features, bug fixes, security upgrades, and other developments...

2. Compatability management: Perhaps most importantly, versioning allows developers and users to determine if a certain version is compatible with what they are working on. Consider a project that requires you to routinely update your dependencies. If the dependence has a good versioning scheme, you can estimate how much labor it will take to update it.

3. Documentation and communication: Versioning is similar to preserving a record describing the history of the software. It explains how the codebase evolved and the decisions that led to the change. Usually, changes to the versioning number are accompanied by a full explanation of what happened and why. This communicates efficiently with all of its users.

4. Release management: Versioning is essential for controlling and coordinating software releases. It assists in the planning and prioritization of feature releases, bug fix updates, and patch releases. . It also assists users with identifying and installing the correct version of the software.

## Closing words

For the aforementioned project, we chose to use the SemVer versioning method, which has resulted in improved documentation and change detection.

As you can see, introducing versioning may be extremely beneficial not just for increasing team communication and documenting your code, but also for clients/users that utilize your products. It enables teams to retain a disciplined approach to change management while avoiding compatibility difficulties.


For additional reading on the topic, I recommend checking out these articles!
- [SemVer](https://semver.org/)
- [Application Versioning Strategies by Alexander Kozhenkov](https://medium.com/javarevisited/application-versioning-strategies-de353a84faaa)
- [Best practices for your API versioning strategy](https://www.linkedin.com/pulse/best-practices-your-api-versioning-strategy-omar-ismail/)
