angular.module('BS.services', ['firebase'])

.factory('Rooms', function($firebase){
  var addRoom = function(roomInfo) {
    var ref = new Firebase('https://resplendent-inferno-1306.firebaseio.com/rooms');
    var sync = $firebase(ref);
    var rooms = sync.$asArray();

    return rooms.$add(roomInfo)
    .then(function(newChildRef) {
      return newChildRef.key();
    })
    .catch(function(data) {
      console.log('IN THE CATCH')
      console.error(data)
    })
  };

  var getRoom = function(roomId) {
    var ref = new Firebase('https://resplendent-inferno-1306.firebaseio.com/rooms/' + roomId);
    var room = $firebase(ref).$asObject();

    return room;
  };

  return {
    addRoom: addRoom,
    getRoom: getRoom
  };
})
