import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
    return (
        <button className={`p-3 px-5 rounded-full bg-purple-50 hover:bg-purple-100 hover:font-bold duration-200 ring-1 ring-neutral-200 hover:ring-neutral-400 text-purple-600 cursor-pointer`}>{children}</button>
    )
}

export default Button
