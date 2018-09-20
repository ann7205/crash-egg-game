// console.log('test');

var countDownNum = 60;
// var timeOut;
var runningObjects;
var countedTargets = 0;
// var randomCell;

function timedCount() {
  countDownNum = countDownNum - 1;
  var minutes = Math.floor(countDownNum / 60);
  var seconds = countDownNum % 60;
  $('.countdown').text(minutes + ':' + seconds);
  // timeOut = setTimeout(timedCount, 1000);
  // objects();
  if (countDownNum === 0) {
    // clearTimeout(timeOut);
    clearInterval(runningObjects);
    $('.object').removeClass('object'); // need to specify class
    $('.effect').removeClass('effect');
    $('td').html('');
    alert('Times Up!');
  }
}

var song = document.querySelector("#music");
var soundEffect = document.querySelector("#sound-effect");

function togglePlayPause() {
  song.paused ? song.play() : song.pause();
  song.volume = 0.1;
}

function gameStart() {
  timedCount();
  runningObjects = setInterval(objects, 1000);
}

function gameStop() {
  // clearTimeout(timeOut);
  clearInterval(runningObjects);
  alert('Pause!');
}

function restartGame() {
  countedTargets = 0;
  $('.counting').text(countedTargets);
  countDownNum = 60;
  runningObjects = setInterval(objects, 1000);
}

function objects() {
  $('td').removeClass('object');
  var selectCell = Math.ceil(Math.random() * 9);
  //  var selectCell = 2
  randomCell = $('.cell-' + selectCell);
  randomCell.removeClass('effect')
  randomCell.html('')
  randomCell.addClass('object');
  timedCount();
}


$('td').click(function(event) {
  soundEffect.play();
  var targetObject = $(event.target);
  $('td').html('');
  $('td').removeClass('effect');
  var divBox = $('<div class="cell-box"></div>');
  if (targetObject.is('.object')) {
    targetObject.append(divBox);
    targetObject.addClass('effect');
    countedTargets = countedTargets + 1;
    $('.counting').text(countedTargets);
  }
})

//=========================================================================
//another way to do it
// if (targetObject.is('.object')) {
// divSize = divBox.css('height', '7em');
// divImg = divSize.css('background-image', 'url("images/egg-yolk.jpg")');
// imgSize = divImg.css('background-size', 'cover');
// targetObject.append(divBox, divSize, divImg, imgSize);

//use setInterval function to countdown
// var timeOn, timedCount, remainingCount;
// $('.start-btn').click(function(event) {
//   event.preventDefault();
//   $('p').text('total time: 2 minutes');
//   timeOn = 120;
//   timedCount = setInterval(test, 1000);
// })

// function test() {
//   timeOn--;
//   var minutes = Math.floor(timeOn / 60);
//   var seconds = timeOn % 60;
//   // var seconds = Math.floor((playTime / 1000) % 60);
//   // var minutes = Math.floor((playTime / 1000 / 60) % 60);
//   $('h4').text(minutes + ':' + seconds);
//   if (timeOn === 0) {
//     clearInterval(timedCount);
//     $('p').text('Times Up!');
//   }
// }

// $('.pause-btn').click(function(event) {
//   event.preventDefault();
//   clearInterval(timedCount, alert('Pause!'));
// })

//another way
// var intervalID = window.setInterval(myCallback, 2000);
//
// function myCallback() {
//   $('td').removeClass('hamster');
//   // $('.hamster').removeClass();
//   var selectCell = Math.ceil(Math.random() * 9);
//   var randomCell = $('.cell-' + selectCell);
//   randomCell.addClass('hamster');
//   console.log(selectCell);
// }