import { getProducts } from '@/services/shopify/products';
import { createAgent } from '@/utils/geminiAI/createAgent';
import { ChatBot } from 'app/components/chat';

export default async function ChatPage() {
    const products = await getProducts();
    const productsNames = products.map((product: ProductType) => product.title);
    const flatProductsNames = productsNames.flat();
    const agent = createAgent(flatProductsNames);


    return <ChatBot agent={agent} />;
}
