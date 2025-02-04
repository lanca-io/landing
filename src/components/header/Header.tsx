import { FC, useState, useEffect } from 'react';
import { externalLinks } from '../../constants/constants';

import Button from '../common/Button';
import Hamburger from './hamburger';
import MenuIcon from '../../assets/icons/MenuIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import useMediaQuery from '../../hooks/useMediaQuery';
import classNames from './Header.module.pcss';

const navItems = [
    { href: externalLinks.sdk, label: 'SDK', disabled: false },
    { href: '/', label: 'Bridging Framework', disabled: true },
    { href: '/contact', label: 'Whitepaper', disabled: true },
];

type HeaderProps = {
    toggleModal: () => void;
};

const Header: FC<HeaderProps> = ({ toggleModal }) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

    const { isPhone, isTablet } = useMediaQuery();

    useEffect(() => {
        if (!isPhone && !isTablet) {
            setIsHamburgerOpen(false);
        }
    }, [isPhone, isTablet]);

    useEffect(() => {
        if (isHamburgerOpen) {
            document.body.classList.add(classNames['no-scroll']);
        } else {
            document.body.classList.remove(classNames['no-scroll']);
        }
    }, [isHamburgerOpen]);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    const hamburgerIcon = isHamburgerOpen ? <CloseIcon /> : <MenuIcon />;

    return (
        <>
            <header className={classNames['header']}>
                <div className={classNames['header__logo-container']}>
                    <img src="/Lanca.png" alt="Lanca Logo" />
                </div>
                <nav className={classNames['header__nav']} aria-label="Navigation">
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.disabled ? undefined : item.href}
                            target={item.disabled ? undefined : "_blank"}
                            className={`${classNames['header__nav-link']} ${item.disabled ? classNames['disabled'] : ''}`}
                            onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                        >
                            <p className="text-small">{item.label}</p>
                        </a>
                    ))}
                </nav>
                <div className={classNames['header__actions']}>
                    {!isPhone && !isTablet && (
                        <Button text="Contact Us" onClick={toggleModal} color="primary" link="" />
                    )}
                    <Button text="Open App" color="secondary" link={externalLinks.app} />
                    {(isPhone || isTablet) && <Button icon={hamburgerIcon} onClick={toggleHamburger} color="primary" />}
                </div>
            </header>
            <Hamburger isOpen={isHamburgerOpen} toggleModal={toggleModal} />
        </>
    );
};

export default Header;