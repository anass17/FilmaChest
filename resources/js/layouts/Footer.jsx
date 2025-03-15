import React from "react"

export default function Footer() {

    return (
        <footer className="text-white text-center bg-gray-900 py-6 absolute bottom-0 w-full left-0">
            <p>&copy; {new Date().getFullYear} FilmaChest. All rights reserved.</p>
        </footer>
    )
}