import { FC } from "react";

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="bg-neutral-900 text-center py-8 px-6">
            <p>Made by <a href="https://twitter.com/ShahenAlgoo" target="_blank">Shahen Algoo</a> & Shahil Algoo</p>
        </footer>
    );
}

export default Footer;