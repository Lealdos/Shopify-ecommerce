'use client';

import { useChat } from 'ai/react';

import { IoMdRemove } from 'react-icons/io';

interface ChatProps {
    agent: string;
    onClose: () => void;
}

export const ChatBot = ({ agent, onClose }: ChatProps) => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            {
                id: '1',
                role: 'system',
                content: agent,
            },
        ],
    });

    const messageStyle = {
        user: 'text-right bg-cyan-900/50 rounded-lg p-2 self-end max-w-[80%]',
        system: 'text-left bg-purple-900/50 rounded-lg p-2 max-w-[80%]',
    };

    return (
        <div className='h-full flex flex-col'>
            <div className='p-3 border-b border-gray-700 flex '>
                <h1 className='text-xl text-center flex-1  '>chat assistant</h1>
                <button className='py-2 px-3' onClick={() => onClose()}>
                    <IoMdRemove />
                </button>
            </div>

            <section className='flex-1 overflow-y-auto p-4 flex flex-col gap-4'>
                {messages
                    .filter((message) => message.role !== 'system')
                    .map((message) => (
                        <div
                            className={`${
                                message.role === 'user'
                                    ? messageStyle.user
                                    : messageStyle.system
                            }`}
                            key={message.id}
                        >
                            {message.content}
                        </div>
                    ))}
            </section>
            <form
                className='p-4 border-t border-gray-700 flex gap-2'
                onSubmit={handleSubmit}
            >
                <input
                    className='flex-1 rounded-md p-2 text-black'
                    value={input}
                    onChange={handleInputChange}
                    placeholder='Ask about our products...'
                />
                <button
                    className='px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors'
                    type='submit'
                >
                    send
                </button>
            </form>
        </div>
    );
};
