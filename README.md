# Gamification Server

Gamification-server provides a framework for providing awards/points to users or teams and can be operated either standalone or integrated with other web-based applications. Based on the notion of badges used within other gamification systems. The gamification-server is implemented as an Express.js web application. This gamification server was built by [DevLeague](http://www.devleague.com/).


## APIs and remote usage

Gamification-server is designed so that other sites can send in "signals" that are parsed through a rules engine and generate points and badges.  Also, other sites and apps can pull in JSON to list badges that a user has.


### End Points

* GET `/api/player`
Returns an array of all the players

* POST `/api/player/new`
Creates a new player and returns the new player

* GET `/api/player/id/<PLAYER_ID>`
Returns the player's current stats, badges and achievements

* GET `/api/player/name/<PLAYER_NAME>`
Returns the player's current stats, badges and achievements

* GET `/api/player/<PLAYER_NAME>/badges`
Returns all the badges

* POST `/api/player/<PLAYER_NAME>/assign_badge`
Creates a new badge for the player and returns an array of all the players badges.



### Installation

* Make sure Node.js, NPM, MongoDB and Git are installed.

* Download and unpack [the project](https://github.com/devleague/gamification-server) on your computer in the directory of your choice. Or alternatively checkout from source:

```bash
$ git clone git@github.com:devleague/gamification-server.git
$ cd gamification-server
```

* Next, inside the project, you need to install the project's various NPM dependencies:

```bash
$ npm install
```

* And you should now be ready to spin up a development build of your new project:

```bash
$ npm start
```

* Navigate to [http://localhost:3000](http://localhost:3000) in your browser of choice.

## Contributing

If you'd like to contribute to this project, please make a pull request. We'll review the pull request and discuss the changes. All pull request contributions to this project will be released under the MIT license.

1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

## Credits

- [DevLeague](http://www.devleague.com/)
