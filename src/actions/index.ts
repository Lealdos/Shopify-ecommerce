'use server';

import { GraphQLClientSingleton } from '@/graphql';
import { createCartMutation } from '@/graphql/mutations/createCartMutation';
import { createUserMutation } from '@/graphql/mutations/createUserMutation';
import { validateAccessToken } from '@/utils/auth/ValidateAccessToken';
import { createAccessToken } from '@/utils/auth/createAccessToken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

//falta encriptar contraseña y manejo de errores

type GraphQLResponse = {
    customerCreate: {
        customerUserErrors: any[];
        customer: any;
    };
};

export const handleCreateUser = async (formData: FormData) => {
    const graphQLClient = GraphQLClientSingleton.getInstance().getClient();
    const formDataObj = Object.fromEntries(formData);
    /*

    
    console.log(Object.fromEntries(formData.entries()));
    */

    const variables = {
        input: {
            ...formDataObj,
            phone: formDataObj.phone,
            acceptsMarketing: formData.get('acceptsMarketing') === 'off',
        },
    };

    const { customerCreate } = await graphQLClient.request<GraphQLResponse>(
        createUserMutation,
        variables
    );
    const { customerUserErrors, customer } = customerCreate;
    if (customer?.lastName) {
        await createAccessToken(
            customer.email,
            formData.get('password') as string
        );
        redirect('/store');
    }
};

export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    const accessToken = await createAccessToken(
        formDataObject.email as string,
        formDataObject.password as string
    );
    if (accessToken) {
        redirect('/store');
    }
};

export const handleCreateCart = async (items: CartItem[]) => {
    const cookiesStore = cookies();
    const accessToken = cookiesStore.get('accessToken')?.value as string;

    if (!accessToken) redirect('/login');

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const customer = await validateAccessToken();
    const variables = {
        input: {
            buyerIdentity: {
                customerAccessToken: accessToken,
                email: customer?.email,
            },
            lines: items.map((item) => ({
                merchandiseId: item.merchandiseId,
                quantity: item.quantity,
            })),
        },
    };

    const {
        cartCreate,
    }: {
        cartCreate?: {
            cart?: {
                checkoutUrl: string;
            };
        };
    } = await graphqlClient.request(createCartMutation, variables);

    return cartCreate?.cart?.checkoutUrl;
};
