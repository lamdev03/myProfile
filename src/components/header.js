const Header = () => {
    return `
    <style>
    header {
        min-height: 1vh;
        color: var(--color-white);
        overflow: hidden;
        padding: 0 !important;
    }</style>
        <header>
            <div class="flex justify-between p-4 bg-green-300">
                <ul class="flex items-center space-x-4">
                    <li><a href="#/admin/user">UserAdminPage</a></li>
                    <li><a href="#/admin/project">ProjectAdminPage</a></li>
                    <li><a href="#/admin/profile">MyProfile</a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
                <div>2</div>
            </div>
        </header>
    `;
};
export default Header;