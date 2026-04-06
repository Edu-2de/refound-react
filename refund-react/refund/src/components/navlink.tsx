import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { tv } from "tailwind-variants";
import Text from "./text";

export const navLinkVariants = tv({
    base: `text-gray-200 hover:text-green-100`,
    variants: {
        isActive: {
            true: "text-green-100",
            false: "text-gray-200",
        },
    },
    defaultVariants: {
        isActive: false,
    },
});

interface CustomNavLinkProps extends Omit<
    NavLinkProps,
    "className" | "children"
> {
    className?: string;
    children: React.ReactNode;
}

export default function NavLink({
    children,
    className,
    ...props
}: CustomNavLinkProps) {
    return (
        <RouterNavLink {...props}>
            {/* O RouterNavLink injeta o isActive para você usar! */}
            {({ isActive }) => (
                <Text
                    className={navLinkVariants({ isActive, className })}
                    variant="heading-sm-semibold"
                >
                    {children}
                </Text>
            )}
        </RouterNavLink>
    );
}
