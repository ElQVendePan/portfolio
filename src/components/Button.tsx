import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    color?: string;
};

const Button = ({ children, color }: ButtonProps) => {
    return (
        <button className={`p-2 px-5 rounded-full bg-purple-50 ring-2 ring-purple-600 text-purple-600`}>{children}</button>
    )
}

export default Button
