<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{config('app.name')}}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link rel="icon"
          type="image/png"
          href="/images/favicon.png">
</head>
<body>

<div id="app">
    <main-app/>
</div>

<script src="{{asset('js/app.js')}}"></script>

@if(config('app.env') == 'local')
    <script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
            ':35729/livereload.js?snipver=1"></' + 'script>')
    </script>
@endif
<script type="text/javascript">
    (function() {
        'use strict';
        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

        function menu() {
            var menu = $('.main-menu');

            menu.on('click', '.item-link', function(e){
                var $this = $(this),
                    li = $this.parent();

                if(li.hasClass('has-sub')) {
                    e.preventDefault;

                    if(li.hasClass('active')) {
                        li.removeClass('active');
                    } else {
                        menu.find('.menu-item').removeClass('active');
                        li.addClass('active');
                    }
                }
            });
        }

        $(document).ready(function() {
            if (isTouchDevice) {
                $('body').addClass('touch-device');
            }

            $('.navbar-button').on('click', function(e){
                $(this).closest('.site-container').toggleClass('open-sidebar');
            });

            menu();

            $('[data-toggle="tooltip"]').tooltip();

            //Addition navbar
            $('.nav-item').on('show.bs.dropdown', function () {
                $($(this).find('.nav-link').data('navbar')).addClass('open');
            });
            $('.nav-item').on('hide.bs.dropdown', function () {
                $($(this).find('.nav-link').data('navbar')).removeClass('open');
            });


        });

        $(window).on('load', function(){
            $.ready.then(function(){
                $('body').addClass('loaded');
            });
        });

        //Window Resize
        (function() {
            var delay = (function(){
                var timer = 0;
                return function(callback, ms){
                    clearTimeout (timer);
                    timer = setTimeout(callback, ms);
                };
            })();

            //Functions
            function resizeFunctions() {

            }

            if(isTouchDevice) {
                $(window).bind('orientationchange', function() {
                    delay(function(){
                        resizeFunctions();
                    }, 50);
                });
            } else {
                $(window).on('resize', function() {
                    delay(function(){
                        resizeFunctions();
                    }, 50);
                });
            }
        }());
    })();
</script>
</body>
</html>
