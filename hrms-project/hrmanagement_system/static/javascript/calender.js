

$(document).ready(function () {
  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'mon'
  },
  events: '/all_events',
  selectable: true,
  selectHelper: true,
  editable: true,
  eventLimit: true,
  select: function (start, end, allDay) {
    $('#event_entry_modal').modal('show');
    var title = prompt("Enter Event Title");
    if (title) {
        var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
        var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
        $.ajax({
            type: "GET",
            url: '/add_event',
            data: {'title': title, 'start': start, 'end': end},
            dataType: "json",
            success: function (data) {
                calendar.fullCalendar('refetchEvents');
                alert("Added Successfully");
            },
            error: function (data) {
                alert('There is a problem!!!');
            }
        });
    }
},  

  });

});