# Simplest possible deploy of a static website

Hi awesome people! 

In this guide, I am going to show you the easiest way to deploy your html, css and (optionally) javascript website in minutes for free! 

We will use [NOW](https://zeit.co/now), which is a new favourite of mine. 

[Here](https://simple-app-step-1-zpmmcnugsv.now.sh/) is an example of a simple website I deployed with ```NOW```

## Are you a complete beginner?

That's great, as I think [NOW](https://zeit.co/now) is the best deployment option for beginners.

* No need to setup git
* Every time you deploy your app, you get a new URL that is permanent unless you remove it (which is great for learning, as you can collect the URLs and compare your progress)
* If you add ``` /_src ``` on any url of a ``` NOW ``` url, you will see the code behind it! That way you can share your code with teachers, classmates etc together with your website! [Check it out!](https://simple-app-step-1-zpmmcnugsv.now.sh/_src)

The great advantage of that, while you are working on your projects, you will have several versions of it, and easy access to the code of all that versions. This is a form of version control - but beware - is great for now, but **CANNOT** replace ``` git```

The disadvantage of a new URL every time you deploy is that if you share your app with someone, and you update it later on - they will still have the old version - unless you send them a new URL. So, it's not recommended for using it outside of development.


## File structure  

Here is my personal project file structure.

```
app/
	index.css
	index.html
	index.js
```

Feel free to experiment with the file structure, but make sure you have an ```index.html``` on your project root - this will be the default entry point of your web page. 

If you don't know where to start, I have made a skeleton for you, you can find it [here](https://github.com/leonorpan/web-dev-docs/tree/master/examples/simple-static-deploy/app) - feel free to download the code and play!

## Download and install NOW

There are several ways to use ```NOW``` on your local machine
* [Now desktop](https://zeit.co/download)  
* [Now CLI](https://zeit.co/download#now-cli) 
*  or via npm ```$ npm install -g now```

If you are a beginner, I recommend you start with the [Now desktop](https://zeit.co/download)  , as it **even works in machines where node isn't installed!** Amazing, isn't it?

For the rest of this tutorial, I will only go through [Now desktop](https://zeit.co/download), which is the recommended way to use ```NOW``` according to the official [ docs](https://zeit.co/docs) 

Personally I always prefer CLI tools and I think you should really try [Now CLI](https://zeit.co/download#now-cli)  after your first deploy, but I try to keep this guide as simple as possible.

## Sign up and verify your account

Once you have downloaded and installed ```NOW```, just open the ```Now Desktop``` app and sign in/login to your account.


## Deploy!

1. You can drag and drop your project on the ```NOW``` app!

[How it works](https://zeit.co/download#how-it-works)

[Five minute guide](https://zeit.co/docs)


## 🎉 You are done! 🎉  

Now you can share the coolness!
