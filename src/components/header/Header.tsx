import { FC, useState, useEffect } from 'react';

import Button from '../common/Button';
import Hamburger from './hamburger';
import MenuIcon from '../../assets/icons/MenuIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import useMediaQuery from '../../hooks/useMediaQuery';
import useToggleModal from '../../hooks/useOpenModal';
import classNames from './Header.module.pcss';
import Contact from '../contact/Contact';

const navItems = [
    { href: 'https://www.npmjs.com/package/lanca-sdk-demo', label: 'SDK' },
    { href: '/', label: 'Bridging Framework' },
    { href: '/contact', label: 'Whitepaper' },
];

const Header: FC = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
    const { isModalOpen, toggleModal } = useToggleModal();
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
                        <a key={item.href} href={item.href} target="_blank" className={classNames['header__nav-link']}>
                            <p className="text-small">{item.label}</p>
                        </a>
                    ))}
                </nav>
                <div className={classNames['header__actions']}>
                    {!isPhone && !isTablet && <Button text="Contact Us" onClick={toggleModal} color="primary" link="" />}
                    <Button text="Open App" onClick={() => {}} color="secondary" link="" />
                    {(isPhone || isTablet) && <Button icon={hamburgerIcon} onClick={toggleHamburger} color="primary" />}
                </div>
            </header>
            <Hamburger isOpen={isHamburgerOpen} />
            <Contact isOpen={isModalOpen} toggleOpen={toggleModal} />
        </>
    );
};

export default Header;