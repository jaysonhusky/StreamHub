function hubInitialise(){
    var e, t, s, i = 0,

        n = ["Users_To_List_in_array"];

    function a(t) {
        $(t).prepend(e), ".online" != t && ".offline" != t || $("#user-image-" + i).css({
            background: s,
            "background-size": "55px"
        }), i++;
    }

    function o(i) {
        if (null === i.stream) t = i._links.channel.substr(38), $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/channels/" + t + "?client_id=REPLACE_WITH_YOUR_OWN_API_KEY",
            headers: {
                "Client-ID": "REPLACE_WITH_YOUR_OWN_API_KEY",
                "Accept": "application/vnd.twitchtv.v5+json"
            },
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function(t) {
                /*e = '<!-- T:Start --><div class="item  col-xs-3 col-lg-3" style="display:none;"><div class="thumbnail clearfix"><a href="https://twitch.tv/' + t.display_name + '" class="tstamp" title="' + t.display_name + ' is streaming. ' + t.game + '" target="_blank" style="cursor:pointer"><img src="/dogbomb/offline.jpg" alt="twt_profile" border="0" style="object-fit: cover;" width="100"/></a><div class="caption"><h4 class="h3 "><a href="' + t.display_name + '" target="_blank">' + t.display_name + '</a></h4><p class="caption-text">' + t.game + '</p><div class="price-buy-spacing"><div class="lead"></div><div></div></div></div></div></div><!-- T:End -->', s = null !== t.logo ? t.logo : "https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg", a("#squad");
                 */

                e = '', a("#squad");
            }
        });

        else if (422 == i.status || 404 == i.status) e = i.message, a("#squad");

        else {

            s = null !== i.stream.channel.logo ? i.stream.channel.logo : "https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg", t = i._links.channel.substr(38);
            var n = i.stream.channel.status;
            if (i.stream.viewers === 0) {
                vcount = '<span class="badge badge-pill badge-primary">' + i.stream.viewers + ' Viewers</span> ';
            } else if (i.stream.viewers == 1) {
                vcount = '<span class="badge badge-pill badge-primary">' + i.stream.viewers + ' Viewer</span> ';
            } else if (i.stream.viewers > 1) {
                vcount = '<span class="badge badge-pill badge-primary">' + i.stream.viewers + ' Viewers</span> ';
            } else {
                vcount = "";
            }
            if (i.stream.channel.mature === true) {
                mat = '<span class="badge badge-pill badge-danger">Mature</span> ';
            } else {
                mat = "";
            }
            if (i.stream.stream_type == "rerun") {
                stype = '<span class="badge badge-pill badge-info">Re-Run</span> ';
                mc_add_to_view = "";
            } else {
                stype = "";
                mc_add_to_view = '<br/><span class="badge badge-pill badge-info" onclick="mc(\'' + i.stream.channel.display_name + '\');" style="cursor:pointer;">Add To Multicam</span>';
            }
            smsg = vcount + mat + stype + mc_add_to_view;

            e = '<!-- T:Start --><div class="item  col-xs-3 col-lg-3"><div class="thumbnail clearfix"><a href="' + i.stream.channel.url + '" class="tstamp" title="' + i.stream.channel.display_name + ' is streaming. ' + i.stream.game + '" target="_blank" style="cursor:pointer"><img src="' + i.stream.preview.medium + '" alt="twt_profile" border="0" style="object-fit: cover;"/></a><div class="caption"><h4 class="h3 "><a href="' + i.stream.channel.url + '" target="_blank">' + i.stream.channel.display_name + '</a></h4><p class="caption-text"><i class="fa fa-gamepad" style="font-size:24px;vertical-align: middle;"></i> ' + i.stream.game + '</p><div class="price-buy-spacing"><div class="lead">' + smsg + '</div><div></div></div></div></div></div><!-- T:End -->', a("#squad");

        }
    }


    function r() {
        $(".offline-users, .online-users").removeClass("focus"), $(".all-users").addClass("focus"), $(".online, .offline, .unavailable").removeClass("hidden");
    }
    n = function(e) {
        for (var t, s, i = e.length; 0 !== i;) s = Math.floor(Math.random() * i), t = e[i -= 1], e[i] = e[s], e[s] = t;
        return e;
    }(n);

    for (var l = 0; l < n.length; l++) $.ajax({
        type: "GET",
        headers: {
            "Client-ID": "REPLACE_WITH_YOUR_OWN_API_KEY"
        },
        url: "https://api.twitch.tv/kraken/streams/" + n[l] + "?client_id=REPLACE_WITH_YOUR_OWN_API_KEY",
        dataType: "jsonp",
        data: {
            format: "json"
        },
        success: function(e) {
            o(e);
        },
        error: function() {
            console.log("unable to access json");
        }
    });
}

$(window).scroll(function() {
    var sc = $(window).scrollTop();
    if (sc > 100) {
        $("#header-sroll").addClass("small");
    } else {
        $("#header-sroll").removeClass("small");
    }
});

function YouTubeStreamers() {
    var YT_Streamers = ["users-to-list"];
    //YT_Streamers = FairPlay(YT_Streamers); // Randomise display of users, fair exposure!
    YT_Streamers.forEach(function(entry) {

        /*	$('#squad').append('<!-- T:Start --><div class="item  col-xs-3 col-lg-3"><div class="thumbnail clearfix"><a href="https://youtube.com/c/' + entry + '/live" class="tstamp" target="_blank" style="cursor:pointer"><img src="/hub/playbutton.png?s='+entry+'" alt="twt_profile" border="0" style="object-fit: cover;" width="100"/></a><div class="caption"><h4 class="h3 "><a href="https://youtube.com/c/' + entry + '/live" target="_blank">' + entry + '</a></h4><p class="caption-text">YouTube</p><div class="price-buy-spacing"><div class="lead"></div><div></div></div></div></div></div><!-- T:End -->');*/

        // YT Support is temp removed
    });
}

jQuery(document).ready(function($) {
    $('#list').click(function(event) {
        event.preventDefault();
        $('#squad').addClass('list-group-wrapper').removeClass('grid-group-wrapper');
    });
    $('#grid').click(function(event) {
        event.preventDefault();
        $('#squad').removeClass('list-group-wrapper').addClass('grid-group-wrapper');
    });
});
