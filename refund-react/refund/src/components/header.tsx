import cn from "classnames";
import type React from "react";
import Button from "./button";
import NavLink from "./navlink";
import Logo from "../assets/images/Logo.svg?react";

export interface HeaderProps extends React.ComponentProps<"header"> {}

export default function Header({ className, ...props }: HeaderProps) {
    return (
        <header
            className={cn(
                "flex items-center justify-between w-full",
                className,
            )}
            {...props}
        >
            <Logo />
            <nav className="flex gap-5">
                <div className="flex items-center justify-center">
                    <NavLink to={"/"}>Solicitacoes de reembolso</NavLink>
                </div>

                <Button size="md">Nova solicitação</Button>
            </nav>
        </header>
    );
}
