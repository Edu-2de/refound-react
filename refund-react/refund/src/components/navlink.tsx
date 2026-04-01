import { Link, type LinkProps } from "react-router-dom";
import { tv } from "tailwind-variants";
import Text from "./text";

export const navLinkVariants = tv({
    base: `text-gray-200 hover:text-green-100 active:text-green-100`,
});

interface CustomNavLinkProps extends LinkProps {}

export default function NavLink({
    children,
    className,
    ...props
}: CustomNavLinkProps) {
    return (
        <Link {...props}>
            <Text
                className={navLinkVariants({ className })}
                variant="heading-sm-semibold"
            >
                {children}
            </Text>
        </Link>
    );
}
