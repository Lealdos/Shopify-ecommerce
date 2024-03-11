'use client';

import { useChat } from 'ai/react';

export const ChatBot = ({ agent }: { agent: string }) => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            {
                id: '1',
                role: 'system',
                content: agent,
            },
        ],
    });

    return (
        <main
            className='mx-auto w-[99%] h-screen max-w-xl  flex flex-col justify-between 
         bg-gray-700 p-4 rounded-md opacity-95 my-4 overflow-x-hidden '
        >
            <h1 className='text-xl text-center'>Store assistant</h1>
            <section className='overflow-y-auto'>
                {messages
                    .filter((message) => message.role !== 'system')
                    .map((message) => (
                        <div className='mb-4' key={message.id}>
                            {message.role === 'user' ? 'User: ' : 'Store: '}
                            {message.content}
                        </div>
                    ))}
            </section>
            <form className='flex gap-2' onSubmit={handleSubmit}>
                <input
                    className='rounded-md p-2 text-black w-11/12 '
                    value={input}
                    onChange={handleInputChange}
                    placeholder='Ask something about ours product...'
                />
                <button
                    className='border-solid border-2 border-white p-2 rounded-md'
                    type='submit'
                >
                    Send
                </button>
            </form>
        </main>
    );
};
