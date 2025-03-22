'use client';

import { useState } from 'react';
import { ChatBot } from './ChatBot';
import { IoClose } from 'react-icons/io5';
import { IoMdChatboxes } from 'react-icons/io';

interface FloatingChatProps {
    agent: string;
}

export const FloatingChat = ({ agent }: FloatingChatProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleChat = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className='fixed bottom-4 right-4 z-50'>
            <div className='relative'>
                <div
                    className={`w-[350px] h-[600px] bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                        isOpen ? 'block' : 'hidden'
                    } `}
                >
                    <ChatBot agent={agent} onClose={handleClose} />
                </div>
            </div>
            <button
                onClick={handleToggleChat}
                className={`p-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center  ${
                    !isOpen ? 'block' : 'hidden'
                } `}
            >
                <IoMdChatboxes className='w-8 h-8' />
            </button>
        </div>
    );
};
