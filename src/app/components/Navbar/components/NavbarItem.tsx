export const NavbarItem = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className="rounded-sm p-2">
            <span className={`${className} text-primary-foreground text-sm mx-2 pb-2 hover:border-b-2`}>{text}</span>
        </div >
    );
}

export default NavbarItem;
