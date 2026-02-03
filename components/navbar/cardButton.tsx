import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

function CardButton() {
    const numItemInCart = 9;

    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="relative"
        >
            <Link href="/cart" className="relative flex items-center justify-center">
                <LuShoppingCart className="h-5 w-5" />

                {numItemInCart > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        {numItemInCart}
                    </span>
                )}
            </Link>
        </Button>
    );
}

export default CardButton;
