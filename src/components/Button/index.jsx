import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    loading = false,
    children,
    href,
    size = 'medium',
    className,
    onClick,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    });

    const Component = href ? 'a' : 'button';

    const props = {
        ...passProps,
    };

    if (onClick && !disabled && !loading) {
        props.onClick = onClick;
    }

    return (
        <Component {...props} href={href} className={classNames} disabled={disabled || loading}>
            <span className={styles.content}>{children}</span>
            {loading && <span className={styles.spinner}></span>}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
