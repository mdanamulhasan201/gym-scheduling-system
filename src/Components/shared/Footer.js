'use client'

const Footer = () => {
    const currentYear = new Date().getFullYear(); 
    return (
        <div className="bg-gray-800 text-white text-center py-4  w-full">
            <p className="text-sm font-bold">&copy; {currentYear} Gym</p>
        </div>
    );
};

export default Footer;
