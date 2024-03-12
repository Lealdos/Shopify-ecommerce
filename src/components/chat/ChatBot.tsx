'use client';

import { useChat } from 'ai/react';

interface ChatProps {

}
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

    const messageStyle = {
        'user':' text-right bg-cyan-900/50 rounded-lg p-1 self-end ',
        'system':' text-left bg-purple-900/50 rounded-lg p-1 '
    }

    return (
        <main
            className='mx-4 h-screen flex flex-col justify-between 
         bg-gray-700 p-4 rounded-md opacity-95 my-4 overflow-x-hidden md:max-w-lg md:mx-auto'
        >
            <h1 className='text-xl text-center'>Store assistant</h1>
            <section className='overflow-y-auto h-full mt-4 flex flex-col'>
                {messages
                    .filter((message) => message.role !== 'system')
                    .map((message) => (
                        
                        <div className={`mb-4  ${message.role === 'user' ? messageStyle.user: messageStyle.system} `} key={message.id}>
                            {message.role === 'user' ? 'Client: ' : 'Store: '}
                            {message.content}
                        </div>
                        
                    ))}
            </section>
            <form className='flex gap-2' onSubmit={handleSubmit}>
                <input
                    className='rounded-md  p-2 text-black w-11/12 '
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
