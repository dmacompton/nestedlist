var obj = '[{"id":1},{"id":2,"children":[{"id":3}]},{"id":4}]';
var obj = '[{"id":1},{"id":2,"children":[{"id":3,"children":[{"id":4,"children":[{"id":6,"children":[{"id":7},{"id":5}]}]}]}]},{"type":"user","id":8,"children":[{"type":"user","id":9,"children":[{"type":"user","id":10,"children":[{"type":"user","id":11,"children":[{"type":"user","id":12}]}]}]}]}]';

function buildItem(item) {

    var html = "<li class='dd-item dd3-item ' data-id='" + item.id + "' id='" + item.id + "'>"
        + "<div class='dd-handle dd3-handle'>Drag</div>"
        + "<div class='dd3-content' name='" + item.id + "'>Item " + item.id + "</div>";

    if (item.children) {

        html += "<ol class='dd-list'>";
        $.each(item.children, function (index, sub) {
            html += buildItem(sub);
        });
        html += "</ol>";

    }

    html += "</li>";
    return html;
}

function buildFromString(str) {
    var html = '';
    $.each(JSON.parse(str), function (index, item) {
        html += buildItem(item);
    });
    $('#nestable').find('ol').append(html);
}

buildFromString(obj);

/////////////////////////////////////////////////
var updateOutput = function(e) {
    var list   = e.length ? e : $(e.target),
        output = list.data('output');
    if (window.JSON) {
        output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
    } else {
        output.val('JSON browser support required for this demo.');
    }
};

$('#nestable').nestable().on('change', updateOutput);



updateOutput($('#nestable').data('output', $('#nestable-output')));

///////////////////////
function minMaxId(selector) {
    var min=null, max=null;
    $(selector).each(function() {
        var id = parseInt($(this).data('id'), 10);
        if ((min===null) || (id < min)) { min = id; }
        if ((max===null) || (id > max)) { max = id; }
    });
    return {min:min, max:max};
}

var nestablecount = minMaxId('.dd-item').max + 1;
$('#appendnestable').click(function () {

    $('ol.outer').append(
        '<li class="dd-item dd3-item" data-id="' + nestablecount + '" data-type="user">' +
            '<div class="dd-handle dd3-handle">Drag</div>' +
            '<div class="dd3-content" name="' + nestablecount + '">Item ' + nestablecount + '</div>' +
        '</li>');
    nestablecount++;
});

$('#send').click(function () {
    console.log(JSON.stringify($('#nestable').nestable('serialize')))
});
