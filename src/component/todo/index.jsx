import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Todo = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div>
            <header className="bg-white border fixed w-full z-40">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <nav className="flex space-x-4">
                        <Link
                            to="/todo"
                            className={isActive("/todo") ? "text-blue-600 font-semibold" : "text-gray-600"}
                        >
                            Assign
                        </Link>
                        <Link
                            to="/todo/done"
                            className={isActive("/todo/done") ? "text-blue-600 font-semibold" : "text-gray-600"}
                        >
                            Done
                        </Link>
                        <Link
                            to="/todo/missed"
                            className={isActive("/todo/missed") ? "text-blue-600 font-semibold" : "text-gray-600"}
                        >
                            Missed
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6 pt-16">
                <Outlet /> {/* This will render the nested route components */}
            </main>
        </div>
    );
};

export default Todo;


