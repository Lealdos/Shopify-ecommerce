'use client';

import { useEffect, useState } from 'react';
import { FloatingChat } from '../chat/FloatingChat';
import { createAgent } from '@/utils/geminiAI/createAgent';

export const ChatProvider = () => {
    const [agent, setAgent] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const products = await response.json();
                const productsNames = products.map(
                    (product: any) => product.title
                );
                const flatProductsNames = productsNames.flat();
                const agentPrompt = createAgent(flatProductsNames);
                setAgent(agentPrompt);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    if (!agent) return null;

    return <FloatingChat agent={agent} />;
};
