# React Training

- Learn
  - https://www.udemy.com/course/react-firebase/

## Setup

```
$ git clone git@github.com:tayutaedomo/idobatakaigi.git
$ cd idobatakaigi
$ touch .bash_history
$ docker-compose build
$ docker-compose run --rm app yarn install
$ docker-compose up
```

## Build

```
$ docker-compose run -rm app yarn run build
```

Launch a local server with built packages.

```
$ cd build
$ npx http-server
```

## Deploy

```
$ ./node_modules/.bin/firebase login
$ ./node_modules/.bin/firebase init
```

```
$ ./node_modules/.bin/firebase deploy
```
