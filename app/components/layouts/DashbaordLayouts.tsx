"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Bell, LogOut, Users, Menu, X, Home, Timer } from "lucide-react";

interface MenuItem {
    name: string;
    path: string;
    icon: React.ReactNode;
}

interface DashboardLayoutProps {
    children: ReactNode;
    userName: string;
    userRole: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    userName,
    userRole,
}) => {
    const pathname = usePathname();
    const [currentPageTitle, setCurrentPageTitle] = useState("Dashboard");

    const [sidebarOpen, setSidebarOpen] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth >= 768;
        }
        return false;
    });

    useEffect(() => {
        const handleResize = () => {
            setSidebarOpen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setRole(localStorage.getItem("role"));
        }
    }, []);

    const doctorMenu: MenuItem[] = [
        { name: "Dashboard", path: "/doctor", icon: <Home size={20} /> },
        { name: "Patients", path: "/doctor/patients", icon: <Users size={20} /> },
        { name: "Profile", path: "/doctor/profile", icon: <User size={20} /> },
        { name: "Logout", path: "/", icon: <LogOut size={20} /> },
    ];

    const superAdminMenu: MenuItem[] = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: <Home size={20} />,
        },
        {
            name: "Doctors",
            path: "/admin/doctors",
            icon: <Users size={20} />,
        },
        {
            name: "Profile",
            path: "/admin/profile",
            icon: <User size={20} />,
        },
        {
            name: "Appointments",
            path: "/admin/appointments",
            icon: <Timer size={20} />,
        },
        { name: "Logout", path: "/", icon: <LogOut size={20} /> },
    ];
    const mainMenuItems =
        role === "doctor"
            ? doctorMenu
            : superAdminMenu;
    useEffect(() => {
        const currentMenuItem = mainMenuItems.find(
            (item) => item.path === pathname
        );
        setCurrentPageTitle(currentMenuItem ? currentMenuItem.name : "Dashboard");
    }, [pathname, mainMenuItems]);
    const renderMenuItem = (item: MenuItem) => {
        const isActive = pathname === item.path;
        return (
            <li key={item.path}>
                <Link
                    href={item.path}
                    className={`flex items-center p-2 rounded-md 
            ${isActive
                            ? "bg-white text-[#118265] font-medium"
                            : "bg-[#118265] hover:opacity-80 text-indigo-100"
                        }
          `}
                >
                    {item.icon}
                    {sidebarOpen && <span className="ml-3">{item.name}</span>}
                </Link>
            </li>
        );
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div
                className={`${sidebarOpen ? "w-64" : "md:w-20 w-12"
                    } bg-[#118265] text-white transition-all duration-300 flex flex-col h-full`}
            >
                <div className="flex items-center justify-between py-4 md:px-4 px-1  border-b border-[#118265] opacity-80">
                    <h1 className="md:text-xl text-sm font-bold">
                        {sidebarOpen ? "GLAMERC" : "GL"}
                    </h1>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-white p-1 rounded-full bg-[#118265] hover:opacity-80"
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
                <div className="flex flex-col justify-between flex-1 overflow-y-auto">
                    <nav className="mt-6 md:px-4 px-1">
                        <ul className="space-y-2">
                            {mainMenuItems.map((item) => renderMenuItem(item))}
                        </ul>
                    </nav>
                    {sidebarOpen && (
                        <div className="p-4 border-t border-[#118265] mt-6">
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-[#118265] flex items-center justify-center">
                                    <span className="text-xl font-bold">
                                        {userName.charAt(0)}
                                    </span>
                                </div>
                                <div className="ml-3">
                                    <p className="font-medium">{userName}</p>
                                    <p className="text-xs text-green-300">{userRole}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center justify-between p-4">
                        <h1 className="lg:text-2xl font-semibold text-gray-800 text-base">
                            {currentPageTitle}
                        </h1>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <Bell size={20} />
                            </button>
                            <div className="relative">
                                <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                                    <div className="h-8 w-8 rounded-full bg-[#118265] flex items-center justify-center text-white">
                                        <span className="text-sm font-bold">
                                            {userName.charAt(0)}
                                        </span>
                                    </div>
                                    <span className="md:text-sm font-medium text-gray-700 text-xs">
                                        {userName}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
