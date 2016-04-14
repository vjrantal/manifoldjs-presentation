## Using ManifoldJS to get more out of Websites

<i class="fa fa-linkedin"></i> [Ville Rantala](http://linkedin.com/in/villerantala)

<i class="fa fa-twitter"></i> [vjrantal](https://twitter.com/vjrantal)

<i class="fa fa-github"></i> [manifoldjs-presentation](https://github.com/vjrantal/manifoldjs-presentation)

----

## Agenda

* Hosted Web apps
* ManifoldJS introduction
* Offline
* Developer workflow

----

![Hosted Web apps](/pictures/hostedwebapps.jpg)


> Source: [Hosted Web Apps explained](http://www.thishereweb.com/hosted-web-apps-explained/)

----

## Benefits of hosted Web apps

<ul class="fa-ul" style="list-style: none;">
  <li class="fragment fade-in"><i class="fa-li fa fa-plus"></i> Reuse skills and assets</li>
  <li class="fragment fade-in"><i class="fa-li fa fa-plus"></i> Access to more APIs</li>
  <li class="fragment fade-in"><i class="fa-li fa fa-plus"></i> Flexible update cycle</li>
  <li class="fragment fade-in"><i class="fa-li fa fa-plus"></i> Reach users via stores</li>
  <li class="fragment fade-in"><i class="fa-li fa fa-plus"></i> More consistent runtime (possibility to bundle WebView on Android)</li>
</ul>

----

```
$ npm install -g manifoldjs
$ manifoldjs <url>
```

----

## ManifoldJS

![ManifoldJS overview](/pictures/manifold-overview.png)

----

## Offline

----

## Offline options

![Offline options](/pictures/offline-options.png)

----

## Developer workflow

----

## Developer workflow example

1. Push to GitHub
1. Commits trigger CI
  * AppVeyor for Windows / Android
  * Travis for OS X / iOS
1. Node.js server deployed to Azure
1. Testing with Selenium / Appium

----

## Wrapping up

----

## Call to action

* Pick any Website and [try it out](http://dxdevblog.azurewebsites.net/developerblog/real-life-code/2015/09/15/Using-ManifoldJS-to-Get-More-Out-of-Web-Sites.html) as hosted Web app
* Take a look at the [source code](https://github.com/vjrantal/manifoldjs-presentation)
* Engage the [ManifoldJS project](https://github.com/manifoldjs/ManifoldJS)
