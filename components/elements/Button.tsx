import React, {Component, CSSProperties} from 'react'

interface ButtonProps {
    content?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}

class Button extends Component<ButtonProps> {
    style: CSSProperties = {
        cursor: this.props.disabled ? 'not-allowed' : 'pointer',
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
        ...this.props.style,
    }

    public render() {
        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                className={((this.props.className + " ") || "") + "ui button"}
                style={{
                    ...this.style,
                    opacity: this.props.disabled ? 0.5 : 1
                }}
            >
                {this.props.content || this.props.children}
            </button>
        );
    }
}

export default Button