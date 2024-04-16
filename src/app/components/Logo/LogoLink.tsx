export  const LogoLink = ({ icon, link }: { icon: JSX.Element; link: string }) => {
    return (
        <a href={link} className="text-primary-foreground m-2 hover:text-secondary">
            {icon}
        </a>

    )
}

export default LogoLink;
