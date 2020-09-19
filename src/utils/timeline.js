export const showTimeline = function (containerId, sequencerResults, onClickHandler) {
  var events = [];
  for (var i in sequencerResults) {
    var s = sequencerResults[i];
    for (var j in s.tag) {
      for (var k in s.sequences) {
        var event = {
          text: {
            text: '<a onclick="onClickHandler(' + s.sequences[k].start_time + ')">' + s.tag[j] + '</a>'
          }
        };
        event.start_date = {
          year: Math.floor(s.sequences[k].start_time)
        };
        event.end_date = {
          year: Math.floor(s.sequences[k].stop_time)
        };
        event.unique_id = "start-" + s.sequences[k].start_time;
        events.push(event);
      }
    }
  }
  window.timeline = new window.TL.Timeline(
    containerId,
    { events: events },
    {
      scale: 'cosmological',
      start_at_end: true,
      hash_bookmark: false,
      zoom_sequence: [0.5]
    }
  );
  var fixTimelineDisplay = function () {
    window.timeline.setZoom(0);
    window.timeline.updateDisplay();
    ['BCE', 'Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec'].forEach(function (txt) {
      document.querySelectorAll('.tl-timeaxis span')
        .forEach(item => {
          if (item.innerText.indexOf(`${txt}`) !== -1) {
            item.remove();
          }
        });
    });
  };
  var addTimelineHooks = function () {
    document.querySelectorAll('.tl-timemarker').forEach(item => {
      const t = parseFloat(item.id.substr(6));
      item.addEventListener('click', () => onClickHandler(t));
    });
  };
  window.setTimeout(fixTimelineDisplay, 500);
  window.setTimeout(addTimelineHooks, 500);
  window.setTimeout(fixTimelineDisplay, 1000);
  window.addEventListener('resize', fixTimelineDisplay);
};