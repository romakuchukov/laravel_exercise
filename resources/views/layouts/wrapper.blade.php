<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('imgs/favicon.png') }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sidebar-nav.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/colors/blue-dark.css') }}" id="theme" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div id="wrapper">
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top m-b-0">
            <div class="navbar-header"> <a class="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i class="fa fa-bars"></i></a>
                <div class="top-left-part"><a class="logo" href="index.html"><b><img src="imgs/pixeladmin-logo.png" alt="home" /></b><span class="hidden-xs"><img src="imgs/pixeladmin-text.png" alt="home" /></span></a></div>
                <ul class="nav navbar-top-links navbar-right pull-right">
                    <li>
                        <a class="profile-pic" href="#"> <img src="imgs/varun.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">Steave</b> </a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-header -->
            <!-- /.navbar-top-links -->
            <!-- /.navbar-static-side -->
        </nav>
        <!-- Left navbar-header -->
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse slimscrollsidebar">
                <ul class="nav" id="side-menu">
                    <li style="padding: 10px 0 0;">
                        <a href="index.html" class="waves-effect"><i class="fa fa-clock-o fa-fw" aria-hidden="true"></i><span class="hide-menu">Dashboard</span></a>
                    </li>
                    <li>
                        <a href="profile.html" class="waves-effect"><i class="fa fa-user fa-fw" aria-hidden="true"></i><span class="hide-menu">Profile</span></a>
                    </li>
                    <li>
                        <a href="basic-table.html" class="waves-effect"><i class="fa fa-table fa-fw" aria-hidden="true"></i><span class="hide-menu">Basic Table</span></a>
                    </li>
                    <li>
                        <a href="fontawesome.html" class="waves-effect"><i class="fa fa-font fa-fw" aria-hidden="true"></i><span class="hide-menu">Icons</span></a>
                    </li>
                    <li>
                        <a href="map-google.html" class="waves-effect"><i class="fa fa-globe fa-fw" aria-hidden="true"></i><span class="hide-menu">Google Map</span></a>
                    </li>
                    <li>
                        <a href="blank.html" class="waves-effect"><i class="fa fa-columns fa-fw" aria-hidden="true"></i><span class="hide-menu">Blank Page</span></a>
                    </li>
                    <li>
                        <a href="404.html" class="waves-effect"><i class="fa fa-info-circle fa-fw" aria-hidden="true"></i><span class="hide-menu">Error 404</span></a>
                    </li>
                </ul>
                <div class="center p-20">
                    <span class="hide-menu"><a href="http://wrappixel.com/templates/pixeladmin/" target="_blank" class="btn btn-danger btn-block btn-rounded waves-effect waves-light">Upgrade to Pro</a></span>
                </div>
            </div>
        </div>
        <!-- Left navbar-header end -->
        <!-- Page Content -->
        @yield('content')
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
    <!-- jQuery -->
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>