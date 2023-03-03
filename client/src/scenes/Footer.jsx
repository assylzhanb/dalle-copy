import SocialMediaIcons from "../pages/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-my-purple pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <p className="text-white text-2xl font-opensans font-semibold">DALL-E Clone</p>
                <p className="font-opensans text-md text-white">Wubba lubba dub dub</p>
            </div>
        </footer>
    )
}

export default Footer;