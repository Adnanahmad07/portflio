import React from "react"
import { Linkedin, Instagram, Twitter, Send } from "lucide-react"  // Send icon for Telegram

const Copywrite = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-white text-gray-500 dark:bg-black border-t border-gray-500  py-6 flex flex-col items-center space-y-4">
            <p className="text-sm">© {year} YourCompany. All rights reserved.</p>

            <div className="flex space-x-6">
                <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Twitter size={20} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Instagram size={20} />
                </a>
                <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    <Send size={20} />
                </a>
            </div>
        </footer>
    )
}

export default Copywrite
