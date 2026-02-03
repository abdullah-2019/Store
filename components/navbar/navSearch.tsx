import { Input } from "../ui/input";

function NavSearch() {
    return <Input type="search"
        placeholder="Search..."
        className="max-w-sm dark:bg-muted"
    />;
}

export default NavSearch;