import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="container navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52">
                        <li><a>CONTACT US</a></li>
                        <li>
                            <a>MENU</a>
                            <ul className="p-2">
                                <li><Link to="menu">OUR MENU</Link></li>
                                <li><Link to="shop">OUR SHOP</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col text-center">
                        <a className="btn btn-ghost upper-case text-xl">Bistro Boss</a>
                        <p className="uppercase">restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu uppercase menu-horizontal px-1">
                        <li><Link to="/">HOME</Link></li>
                        <li><a>CONTACT US</a></li>
                        <li><Link to="menu">OUR MENU</Link></li>
                        <li><Link to="shop">OUR SHOP</Link></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body text-black">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    DASHBOARD
                                </a>
                            </li>
                            <li><a>PROFILE</a></li>
                            <li><a>LOG OUT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;