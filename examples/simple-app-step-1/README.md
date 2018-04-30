# Static web page deploy & hosting 
___

Hi! In this guide, I am going to show you the easiest way to deploy your simple html, css and (optionally) javascript website in minutes! In this tutorial, we will use [NOW](https://zeit.co/now), which is a new personal favourite, and most important, you don't need to setup a git repo in order to deploy! The are pros and cons, but we will discuss those later. What matters for now, is make your page available to the internet! 

## File structure  

Here is my personal project file structure.

```
simple-app-step-1/
	index.css
	index.html
	index.js
```

Feel free to experiment with this, but make sure you have an ```index.html``` on your project root - this will be the default entry point of your web page. 

If you don't know where to start, I have made a skeleton for you, you can find it [here](https://github.com/leonorpan/web-dev-docs/tree/master/examples/simple-app-step-1) - feel free to download the code it and play with it 

## Download and install NOW

There are several ways to use now on your local machine
* [Now desktop](https://zeit.co/download)  
* [Now CLI](https://zeit.co/download#now-cli) 
* or via npm ```$ npm install -g now```

If you get stuck, [now docs](https://zeit.co/docs) is amazing! 
I recommend you however, if you are a beginner to start with the desktop app, as it **can work even in machines that don't have node installed!** Amazing, isn't it!

## Sign up and verify your account

If you used the Desktop app, that should be straight forward - you will asked to signup/login during the installation process. 

If you are using [Now CLI](https://zeit.co/download#now-cli)  , you can simply register on [zeit](https://zeit.co) and run ``` $ now login```

But, to be fair, [Now docs](https://zeit.co/docs) are way better than me on documenting this process.

## Deploy!

You can drag and drop your project folder on the now desktop app, but I want to show you how amazing it is to deploy with a single command.

In your project's root directory (in my case ```simple-app-step-1```) run

``` $ now```

🎉 🎉  

Your website is deployed and you got a URL like that:

[https://simple-app-step-1-zpmmcnugsv.now.sh/](https://simple-app-step-1-zpmmcnugsv.now.sh/) ( [code](https://github.com/leonorpan/web-dev-docs/tree/master/examples/simple-app-step-1) )

Now you can share your coolness!

🎉 🎉 

## What's next

I will teach you how to deploy your app with just a button,
