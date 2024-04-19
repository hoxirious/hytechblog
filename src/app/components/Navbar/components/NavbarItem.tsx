export const NavbarItem = ({ text }: { text: string }) => {
    return (
        <div className="rounded-sm p-2">
            <span className="text-primary-foreground text-sm mx-2 hover:text-secondary">{text}</span>
        </div>
    );
}

export default NavbarItem;
