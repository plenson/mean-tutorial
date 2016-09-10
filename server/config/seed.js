'use strict';

var Game = require('../api/game/game.model');
var User = require('../api/user/user.model');

Game.find({}).remove(function() {
  Game.create({
    name : 'Halo 5',
    platform : 'Xbox One',
    genre: 'Shooter'
  },{
    name : 'Fallout 4',
    platform : 'PlayStation 4',
    genre: 'Role-Playing'
  },{
    name : 'Super Smash Bros.',
    platform : 'Wii U',
    genre: 'Fighting'
  },{
    name : 'Pokemon X',
    platform : '3DS',
    genre: 'Role-Playing'
  },{
    name : 'Halo 4',
    platform : 'Xbox 360',
    genre: 'Shooter'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});