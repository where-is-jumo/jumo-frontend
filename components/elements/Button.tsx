import React, {Component, CSSProperties, ReactNode} from 'react'

interface ButtonProps {
    content?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export default (props: ButtonProps) => {
    const style: CSSProperties = {
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        display: 'inline-block',
        outline: 0,
        border: 'none',
        verticalAlign: 'baseline',
        margin: '0 .78571429em',
        padding: '.78571429em 1.5em .78571429em',
        textAlign: 'center',
        backgroundColor: '#2185d0',
        color: '#fff',
        borderRadius: 4,
        ...props.style,
    }

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={((props.className + " ") || "") + "ui button"}
            style={{
                ...style,
                opacity: props.disabled ? 0.5 : 1
            }}
        >
            {props.content || props.children}
        </button>
    );
}