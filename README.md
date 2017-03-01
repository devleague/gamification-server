#Gamification Server

Gamification-server provides a framework for providing awards/points to users or teams and can be operated either standalone or integrated with other web-based applications. Based on the notion of badges used within other gamification systems. The gamification-server is implemented as an Express.js web application, built by [DevLeague](http://www.devleague.com/).


##APIs and remote usage

Gamification-server is designed so that other sites can send in "signals" that are parsed through a rules engine and generate points and badges.  Also, other sites and apps can pull in JSON to list badges that a user has.

You can add the ``static/gamification-server-request.js`` file to any remote app and use the following code to add badges to your page. You will only need to have this one file and set up a proxy to make requests:

```javascript
<script src="/static/gamification-server-request.js"></script>
<script>
    $(document).ready(function() {
        gamification.init({
            server_url:"http://gamification-server.com/",
            project_names:"my_app,overall_game",
            user_name: "{{ request.user.username }}",
            $badge_container: $('#badge-container')
        });
    });
</script>
```

###Installation

* Make sure Node.js, NPM, and Git are installed.

* Download and unpack [the project](https://github.com/devleague/gamification-server) on your Raspberry Pi in the directory of your choice. Or alternatively checkout from source:

```
$ git clonegit@github.com:devleague/gamification-server.git
$ cd gamification-server
```

* Next, inside the project, you need to install the project's various NPM dependencies:

```
$ npm install
```

* And you should now be ready to spin up a development build of your new project:

```
$ npm start
```

* Navigate to [http://localhost:3000](http://localhost:3000) in your browser of choice.

##Contributing

If you'd like to contribute to this project, please make a pull request. We'll review the pull request and discuss the changes. All pull request contributions to this project will be released under the MIT license.

1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

##Credits

- [DevLeague](http://www.devleague.com/)
