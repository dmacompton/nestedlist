;(function ($) {
    $.fn.compton = function(tasks) {
        var $elem = this;
        if (tasks == undefined || tasks.length <= 0) return;

        for (var i = 0, count = tasks.length; i < count; i++) {
            if(tasks[i].type == 'user') {
                $('<h1/>', {html: '<i class="fa fa-user"></i>' + tasks[i].text}).appendTo(this);
            } else if(tasks[i].type == 'group') {
                $('<h1/>', {html: '<i class="fa fa-users"></i>' + tasks[i].text}).appendTo(this);
            }
        }

    };
})(jQuery);


// <script>
// var task = [
//     {
//         type: 'user',
//         text: 'user_name',
//         child: [{
//             type: 'user',
//             text: 'user_name'
//         }]
//     }, {
//         type: 'group',
//         text: 'group_name',
//         child: [{
//             type: 'user',
//             text: 'user_name'
//         }]
//     }
// ];
//
// $($('#dma').compton(task));
// </script>