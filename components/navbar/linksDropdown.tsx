import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-4 max-w-[100px]">
                    <LuAlignLeft className="w-6 h-6" />
                    <span className="sr-only">Open links menu</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
                {links.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default LinksDropdown;
