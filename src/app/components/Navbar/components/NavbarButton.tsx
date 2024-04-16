import { Button } from "@/components/ui/button";

const NavBarButton = ({ text }: { text: string }) => {
    return (
        <Button className="bg-primary-100 text-primary" size="sm">{text}</Button>
    );
}

export default NavBarButton;
