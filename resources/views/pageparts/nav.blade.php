<!-- Navigation -->
<nav class="navbar navbar-default navbar-static-top m-b-0">
    <div class="navbar-header">
        <a class="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse">
            <i class="fa fa-bars"></i>
        </a>
        <div class="top-left-part">
            <a class="logo" href="index.html">
                <b>
                    <img src="imgs/pixeladmin-logo.png" alt="home">
                </b>
                <span class="hidden-xs">
                    <img src="imgs/pixeladmin-text.png" alt="home">
                </span>
            </a>
        </div>
        <ul class="nav navbar-top-links navbar-right pull-right">
            <!-- Authentication Links -->
            @guest
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="{{ route('register') }}">Register</a></li>
            @else
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu">
                        <li>
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    </ul>
                </li>
            @endguest
        </ul>
        <!-- <ul class="nav navbar-top-links navbar-right pull-right">
            <li>
                <a class="profile-pic" href="#">
                    <img src="imgs/varun.jpg" alt="user-img" width="36" class="img-circle">
                    <b class="hidden-xs">Steave</b>
                </a>
            </li>
        </ul> -->
    </div>
    <!-- /.navbar-header -->
    <!-- /.navbar-top-links -->
    <!-- /.navbar-static-side -->
</nav>