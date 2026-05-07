var membersTarget = 2245341;
var clubsTarget = 46328;
var eventsTarget = 828867;
var paymentsTarget = 19264;

function countUp(id, target) {
  var current = 0;
  var element = document.getElementById(id);
  
  var step = target / 2000;

  var timer = setInterval(function() {
    current += step;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.innerHTML = Math.floor(current).toLocaleString();

  }, 1);
}

