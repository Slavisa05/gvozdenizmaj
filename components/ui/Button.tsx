import { Loader2, type LucideIcon } from 'lucide-react'

interface ButtonProps {
    type?: 'submit' | 'button' | 'reset';
    text: string;
    icon?: LucideIcon;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    className?: string;
}

const variantStyles = {
    primary:   'bg-accent text-black border-2 border-accent shadow-accent hover:shadow-xs active:shadow-none',
    secondary: 'bg-gray-color border-3 border-gray-color before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100',
};

const Button = ({ type = 'button', text, icon: Icon, variant = 'primary', onClick, disabled, isLoading, loadingText, className = '' }: ButtonProps) => {
    return(
        <button type={type} onClick={onClick} disabled={disabled || isLoading}
                className={`relative overflow-hidden font-bold uppercase py-3 px-5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 ${variantStyles[variant]} ${className}`}>
                <span className="relative z-10 inline-flex items-center gap-2">
                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : Icon && <Icon size={16} />}
                    {isLoading ? (loadingText ?? text) : text}
                </span>
        </button>
    );
}

export default Button