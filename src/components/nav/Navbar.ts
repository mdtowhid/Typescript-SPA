export default class Navbar {
  static navbar: string = `
    <div class="container">
        <div class="row">
            <nav class="z-depth-0">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo right">TypeScript SPA</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down top-menu-items-ul">
                        <li ref=""><a href="javascript:void(0)" component="home">Home</a></li>
                        <li><a href="javascript:void(0)" component="blogs">Blogs</a></li>
                        <li><a href="javascript:void(0)" component="employees">Employees</a></li>
                        <li><a href="javascript:void(0)" component="table">Table</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    `;
}
