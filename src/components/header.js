import React , {Component} from 'react';

class Header extends Component {
    render(){
    return (
    <div><header>
    <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

        <div className="float-left">
            <span data-activates="slide-out" className="button-collapse">
                <i className="fa fa-bars"></i>
            </span>
        </div>

        <div className="breadcrumb-dn mr-auto">
            <ol className="breadcrumb header-breadcrumb">
                <li className="breadcrumb-item">
                    <span> Trang Chủ</span>
                </li>
            </ol>
        </div>

        <ul className="nav navbar-nav nav-flex-icons ml-auto">
            <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i className="fa fa-user"></i> Tài Khoản</span>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <span className="dropdown-item waves-effect waves-light">Đăng Ký</span>
                    <span className="dropdown-item waves-effect waves-light">Đăng Nhập</span>
                    <span className="dropdown-item waves-effect waves-light">Đăng Xuất</span>
                </div>
            </li>
        </ul>

    </nav>

</header>
</div>
  );
}
}

export default Header;
