import { useState, useCallback } from 'react';

const useToggleModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = useCallback(() => {
        setIsModalOpen(prevState => !prevState);
    }, []);

    return {
        isModalOpen,
        toggleModal,
    };
};

export default useToggleModal;