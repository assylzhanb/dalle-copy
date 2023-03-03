import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-deep-blue pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <p className="text-white text-2xl font-inter font-semibold">DALL-E Clone</p>
                <p className="font-inter text-md text-white">Wubba lubba dub dub</p>
            </div>
        </footer>
    )
}

export default Footer;